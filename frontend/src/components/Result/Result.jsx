import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import { useFormik } from 'formik';
import { format, isAfter, isBefore, isSameDay } from 'date-fns';
import { useTranslation } from 'react-i18next';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-datetime/css/react-datetime.css';
import { notifyError, tryRefreshToken } from 'helpers';
import { cardTypes } from 'constants';
import resultSchema from 'models/resultSchema';
import { authSelectors } from 'redux/auth';
import { booksActions } from 'redux/books';
import { statisticsActions, statisticsSelectors } from 'redux/statistics';
import { trainingsActions, trainingsSelectors } from 'redux/trainings';
import Button from 'components/reusableComponents/Button';
import InputField from 'components/reusableComponents/InputField';
import { addStatistics, getStatistics } from 'api/statistics';
import { getCurrentTraining } from 'api/trainings';
import { getAllBooks } from 'api/books';
import { GoTriangleDown } from 'react-icons/go';
import {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  ListStyled,
} from './Result.styled';

const initialValues = {
  date: null,
  pages: '',
};

const Result = ({ openWellDone }) => {
  const results = useSelector(statisticsSelectors.getItems);
  const token = useSelector(authSelectors.getToken);
  const refreshToken = useSelector(authSelectors.getRefreshToken);
  const currentTraining = useSelector(trainingsSelectors.getTraining);
  const isCurrent = useSelector(trainingsSelectors.getIsCurrent);
  const dispatch = useDispatch();

  const { t } = useTranslation('translation', { keyPrefix: 'result' });

  const getReadBooks = books =>
    books.reduce((acc, book) => {
      if (book.status === cardTypes.alreadyRead) return acc + 1;
      return acc;
    }, 0);

  const onSubmit = async values => {
    if (formik.errors.date) {
      notifyError(formik.errors.date);
      return;
    }
    if (formik.errors.pages) {
      notifyError(formik.errors.pages);
      return;
    }

    if (!isCurrent) return;

    if (
      !(
        (isBefore(new Date(values.date), new Date(currentTraining.end)) ||
          isSameDay(new Date(values.date), new Date(currentTraining.end))) &&
        (isAfter(new Date(values.date), new Date(currentTraining.start)) ||
          isSameDay(new Date(values.date), new Date(currentTraining.start)))
      )
    ) {
      notifyError('Your training does not contain this date');
      return;
    }

    const formatDate = format(values.date, 'MM/dd/yyyy');
    const value = { date: formatDate, pages: values.pages };

    const tryFunc = async tokenValue => {
      await addStatistics(tokenValue, value);

      const { training } = await getCurrentTraining(tokenValue);
      if (getReadBooks(training.books) !== getReadBooks(currentTraining.books))
        openWellDone();

      const { statistic: newStatistic } = await getStatistics(tokenValue);

      dispatch(statisticsActions.init({ statistics: newStatistic, training }));
      dispatch(trainingsActions.init(training));

      const { books } = await getAllBooks(tokenValue);

      dispatch(booksActions.init(books));
    };

    try {
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshToken, dispatch, tryFunc);
    }

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: resultSchema,
    validateOnBlur: true,
    onSubmit,
  });

  const valid = function (current) {
    return (
      (isAfter(new Date(current), new Date(currentTraining.start)) ||
        isSameDay(new Date(current), new Date(currentTraining.start))) &&
      (isBefore(new Date(current), new Date(currentTraining.end)) ||
        isSameDay(new Date(current), new Date(currentTraining.end))) &&
      isBefore(new Date(current), new Date())
    );
  };

  let inputProps = { className: 'input', name: 'date' };

  return (
    <ResultContainerStyled>
      <TextStyled>{t('title').toUpperCase()}</TextStyled>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="formContainer">
          <div className="inputMargin">
            <SpanStyled>{t('date')}</SpanStyled>
            <Datetime
              id="date"
              name="date"
              closeOnSelect
              isValidDate={valid}
              inputProps={inputProps}
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              formik={formik}
              onChange={dateFromValue => {
                formik.setFieldValue('date', dateFromValue._d);
              }}
              value={formik.values.date ? formik.values.date : ''}
              renderInput={props => {
                return (
                  <label className="dateLabel">
                    <input
                      {...props}
                      autoComplete="off"
                      value={
                        formik.values.date
                          ? format(formik.values.date, 'dd.MM.yyyy')
                          : ''
                      }
                    />
                    <GoTriangleDown className="arrowIcon" size={14} />
                  </label>
                );
              }}
            />
            <p className="error">{formik.touched.date && formik.errors.date}</p>
          </div>
          <div>
            <SpanStyled>{t('pages')}</SpanStyled>

            <InputField
              value={formik.values.pages}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              name="pages"
              touched={formik.touched.pages}
              type="text"
              classNames={{ labelText: 'labelText', input: 'input' }}
              error={formik.errors.pages}
            />
          </div>
        </div>
        <Button filled type="submit" className="button">
          {t('sbm')}
        </Button>
      </form>
      <TextStyled className="changeWeight">
        {t('stats').toUpperCase()}
      </TextStyled>

      {Boolean(results.length) && (
        <ScrollContainer component="ul" hideScrollbars={false} className="list">
          {[...results].reverse().map(result => (
            <li key={result.createdAt}>
              <ListStyled>
                <li className="table resultDate">
                  {format(new Date(result.date), 'dd.MM.yyyy')}
                </li>
                <li className="table resultTime">
                  <span className="chengeColor">
                    {format(new Date(result.createdAt), 'kk:mm:ss')}
                  </span>
                </li>
                <li className="table resultPages">
                  {result.pages}{' '}
                  <span className="chengeColor resultPagesText">pages</span>
                </li>
              </ListStyled>
            </li>
          ))}
        </ScrollContainer>
      )}
    </ResultContainerStyled>
  );
};

export default Result;
