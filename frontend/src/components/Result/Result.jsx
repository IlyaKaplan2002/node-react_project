import React from 'react';
import Button from 'components/reusableComponents/Button';
import Datetime from 'react-datetime';
import { format, subDays } from 'date-fns';
import 'react-datetime/css/react-datetime.css';
import {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  ListStyled,
} from './Result.styled';
import { useFormik } from 'formik';
import { GoTriangleDown } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { statisticsActions, statisticsSelectors } from 'redux/statistics';
import resultSchema from 'models/resultSchema';
import InputField from 'components/reusableComponents/InputField';
import { authSelectors } from 'redux/auth';
import { addStatistics } from 'api/statistics';
import { notifyError, tryRefreshToken } from 'helpers';
import { getCurrentTraining } from 'api/trainings';
import { trainingsActions, trainingsSelectors } from 'redux/trainings';
import { cardTypes } from 'constants';
import ScrollContainer from 'react-indiana-drag-scroll';

const initialValues = {
  date: null,
  pages: '',
};

const Result = ({ openWellDone }) => {
  const results = useSelector(statisticsSelectors.getItems);
  const token = useSelector(authSelectors.getToken);
  const refreshToken = useSelector(authSelectors.getRefreshToken);
  const currentTraining = useSelector(trainingsSelectors.getTraining);
  const dispatch = useDispatch();

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

    const formatDate = format(values.date, 'MM.dd.yyyy');
    const value = { date: formatDate, pages: values.pages };

    const tryFunc = async tokenValue => {
      const { statistic } = await addStatistics(tokenValue, value);
      dispatch(statisticsActions.add(statistic));
      const { training } = await getCurrentTraining(tokenValue);
      if (getReadBooks(training.books) !== getReadBooks(currentTraining.books))
        openWellDone();

      dispatch(trainingsActions.init(training));
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
    const dayBefore = subDays(new Date(), 2);
    const dayAfter = new Date();

    return current.isAfter(dayBefore) && current.isBefore(dayAfter);
  };

  let inputProps = { className: 'input', name: 'date' };

  return (
    <ResultContainerStyled>
      <TextStyled>RESULT</TextStyled>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="formContainer">
          <div className="inputMargin">
            <SpanStyled>Date</SpanStyled>
            <Datetime
              id="date"
              name="date"
              closeOnSelect
              isValidDate={valid}
              inputProps={inputProps}
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              onChange={dateFromValue => {
                formik.setFieldValue('date', dateFromValue._d);
              }}
              value={formik.values.date ? formik.values.date : ''}
              renderInput={props => (
                <input
                  {...props}
                  value={
                    formik.values.date
                      ? format(formik.values.date, 'dd.MM.yyyy')
                      : ''
                  }
                />
              )}
            />
            <GoTriangleDown size={14} />
            <p className="error">{formik.touched.date && formik.errors.date}</p>
          </div>
          <div>
            <SpanStyled>Amount of pages</SpanStyled>

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
          Add result
        </Button>
      </form>
      <TextStyled className="changeWeight">STATISTICS</TextStyled>

      {Boolean(results.length) && (
        <ScrollContainer component="ul" hideScrollbars={false} className="list">
          {[...results].reverse().map(result => (
            <li key={result.createdAt}>
              <ListStyled>
                <li className="table">
                  {format(new Date(result.date), 'dd.MM.yyyy')}
                </li>
                <li className="table">
                  <span className="chengeColor">
                    {format(new Date(result.createdAt), 'kk:mm:ss')}
                  </span>
                </li>
                <li className="table">
                  {result.pages} <span className="chengeColor">pages</span>
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
