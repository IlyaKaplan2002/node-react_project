import React from 'react';
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
import { format, isAfter, isFuture, isSameDay } from 'date-fns';
import { notifyError } from 'helpers';

const AddTrainingForm = ({ books, closeModal = () => {} }) => {
  const selectedTraining = useSelector(trainingsSelectors.getSelectedTraining);
  const selectedBooks = useSelector(trainingsSelectors.getSelectedBooks);
  const dispatch = useDispatch();

  const initialValues = {
    start: selectedTraining?.start ? new Date(selectedTraining.start) : null,
    end: selectedTraining?.end ? new Date(selectedTraining.end) : null,
  };

  const onSubmit = values => {
    if (!values.start || !values.end) {
      notifyError('Please select start and end dates!');
      return;
    }

    if (!selectedBooks.length) {
      notifyError('You should select at least one book!');
      return;
    }
    dispatch(
      trainingsActions.setSelectedDates({
        start: format(new Date(values.start), 'MM.dd.yyyy'),
        end: format(new Date(values.end), 'MM.dd.yyyy'),
      })
    );
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
              isValidDate={val =>
                isFuture(new Date(val)) || isSameDay(new Date(), new Date(val))
              }
              timeFormat={false}
              value={formik.values.start}
              onChange={dateFromValue => {
                formik.setFieldValue('start', dateFromValue._d);
              }}
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
                return isAfter(new Date(val), new Date(formik.values.start));
              }}
              dateFormat="DD.MM.yyyy"
              timeFormat={false}
              value={formik.values.end}
              onChange={dateFromValue => {
                formik.setFieldValue('end', dateFromValue._d);
              }}
            />
          </DatePickerWrapper>
        </div>
        <div className="second-part">
          <Selection books={books} current={selectedBooks} />
          <Button className={'submit'} type="submit">
            Add
          </Button>
        </div>
      </AddTrainingFormStyled>
    </TrainingFormSection>
  );
};

export default AddTrainingForm;
