import React, { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import { useFormik } from 'formik';
import { RiCalendar2Line } from 'react-icons/ri';
import { GoTriangleDown } from 'react-icons/go';
import Datetime from 'react-datetime';
import {
  TrainingFormSection,
  AddTrainingFormStyled,
  DatePickerWrapper,
} from './AddTrainingForm.styled';
import Button from 'components/reusableComponents/Button';
import Selection from 'components/Selection';
import { useDispatch, useSelector } from 'react-redux';
import { trainingsActions, trainingsSelectors } from 'redux/trainings';
import {
  addDays,
  format,
  isAfter,
  isBefore,
  isFuture,
  isSameDay,
  isValid,
  sub,
} from 'date-fns';
import { notifyError } from 'helpers';

const AddTrainingForm = ({ books, closeModal = () => {}, desktop }) => {
  const selectedTraining = useSelector(trainingsSelectors.getSelectedTraining);
  const selectedBooks = useSelector(trainingsSelectors.getSelectedBooks);
  const dispatch = useDispatch();
  const [currentBook, setCurrentBook] = useState(null);

  const initialValues = {
    start: selectedTraining?.start ? new Date(selectedTraining.start) : null,
    end: selectedTraining?.end ? new Date(selectedTraining.end) : null,
  };

  const onSubmit = values => {
    if (!selectedBooks.length && !currentBook) {
      notifyError('You should select at least one book!');
      return;
    }

    if (currentBook) {
      if (selectedBooks.find(book => book._id === currentBook._id)) {
        return;
      }
      dispatch(trainingsActions.addSelectedBook(currentBook));
      setCurrentBook(null);
    }

    if (selectedBooks?.start && selectedBooks?.end) {
      dispatch(
        trainingsActions.setSelectedDates({
          start: format(new Date(values.start), 'MM/dd/yyyy'),
          end: format(new Date(values.end), 'MM/dd/yyyy'),
        })
      );
    }
    closeModal();
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <TrainingFormSection>
      <Button className="training-button">My training</Button>

      <AddTrainingFormStyled onSubmit={formik.handleSubmit}>
        <div className="first-part">
          <DatePickerWrapper>
            <RiCalendar2Line className="calendar" size={22} />
            <GoTriangleDown size={13} />
            <Datetime
              id="start"
              name="start"
              closeOnSelect
              dateFormat="DD.MM.yyyy"
              inputProps={{
                placeholder: 'Start',
                className: 'date-input',
              }}
              isValidDate={val => {
                if (!formik.values.end) {
                  return (
                    isFuture(new Date(val)) ||
                    isSameDay(new Date(), new Date(val))
                  );
                }
                return (
                  (isFuture(new Date(val)) ||
                    isSameDay(new Date(), new Date(val))) &&
                  isBefore(new Date(val), new Date(formik.values.end)) &&
                  (isSameDay(
                    sub(new Date(formik.values.end), { days: 30 }),
                    new Date(val)
                  ) ||
                    isAfter(
                      new Date(val),
                      sub(new Date(formik.values.end), { days: 30 })
                    ))
                );
              }}
              timeFormat={false}
              value={formik.values.start ? formik.values.start : ''}
              onChange={dateFromValue => {
                formik.setFieldValue('start', dateFromValue._d);

                dispatch(
                  trainingsActions.setSelectedDates({
                    start: isValid(new Date(dateFromValue._d))
                      ? format(new Date(dateFromValue._d), 'MM/dd/yyyy')
                      : null,
                  })
                );
              }}
              renderInput={props => (
                <input
                  {...props}
                  autoComplete="off"
                  value={
                    formik.values.start
                      ? format(formik.values.start, 'dd.MM.yyyy')
                      : ''
                  }
                />
              )}
            />
          </DatePickerWrapper>
          <DatePickerWrapper>
            <RiCalendar2Line className="calendar" size={22} />
            <GoTriangleDown size={13} />
            <Datetime
              id="end"
              name="end"
              closeOnSelect
              inputProps={{
                placeholder: 'Finish',
                className: 'date-input',
              }}
              isValidDate={val => {
                if (!formik.values.start) return isFuture(new Date(val));
                return (
                  isAfter(new Date(val), new Date(formik.values.start)) &&
                  (isSameDay(
                    addDays(new Date(formik.values.start), 30),
                    new Date(val)
                  ) ||
                    isBefore(
                      new Date(val),
                      addDays(new Date(formik.values.start), 30)
                    ))
                );
              }}
              dateFormat="DD.MM.yyyy"
              timeFormat={false}
              value={formik.values.end ? formik.values.end : ''}
              onChange={dateFromValue => {
                formik.setFieldValue('end', dateFromValue._d);
                dispatch(
                  trainingsActions.setSelectedDates({
                    end: isValid(new Date(dateFromValue._d))
                      ? format(new Date(dateFromValue._d), 'MM/dd/yyyy')
                      : null,
                  })
                );
              }}
              renderInput={props => (
                <input
                  {...props}
                  autoComplete="off"
                  value={
                    formik.values.end
                      ? format(formik.values.end, 'dd.MM.yyyy')
                      : ''
                  }
                />
              )}
            />
          </DatePickerWrapper>
        </div>
        <div className="second-part">
          <Selection
            books={books}
            current={selectedBooks}
            desktop={desktop}
            currentBook={currentBook}
            setCurrentBook={setCurrentBook}
          />
          <Button className={'submit'} type="submit">
            Add
          </Button>
        </div>
      </AddTrainingFormStyled>
    </TrainingFormSection>
  );
};

export default AddTrainingForm;
