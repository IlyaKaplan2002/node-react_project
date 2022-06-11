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

const initialValues = {
  start: null,
  finish: null,
  book: null,
};

const placeholderBook = {
  isDefault: true,
  name: 'Choose book from the library',
  id: '...',
};

const AddTrainingForm = ({ books }) => {
  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  const setSelectedBook = book => {
    formik.setFieldValue('book', book);
  };

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
              id="finish"
              name="finish"
              closeOnSelect
              inputProps={{
                placeholder: 'Finish',
                className: 'date-input',
              }}
              dateFormat="DD.MM.yyyy"
              timeFormat={false}
              value={formik.values.finish}
              onChange={dateFromValue => {
                formik.setFieldValue('finish', dateFromValue._d);
              }}
            />
          </DatePickerWrapper>
        </div>
        <div className="second-part">
          <Selection
            data={{ options: [...books, placeholderBook] }}
            onChange={setSelectedBook}
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
