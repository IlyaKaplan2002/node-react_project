import React from 'react';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { useFormik, Field, FormikProvider } from 'formik';
import { RiCalendar2Line } from 'react-icons/ri';
import { GoTriangleDown } from 'react-icons/go';
import Datetime from 'react-datetime';
import {
  TrainingFormSection,
  AddTrainingFormStyled,
  DatePickerWrapper,
} from './AddTrainingForm.styled';
import Button from 'components/utils/Button';
import Selection from 'components/Selection';

const initialValues = {
  start: null,
  finish: null,
  book: '',
};
const books = [
  { name: 'aaaaaaaaa', id: '1' },
  { name: 'hkbvjdsbvjbd', id: '2' },
  { isDefault: true, name: ' Choose book from the library', id: '' },
];
const AddTrainingForm = () => {
  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: null, //todo
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
              inputProps={{
                placeholder: 'Start',
                className: 'date-input',
              }}
              value={formik.values.start}
              onChange={dateFromValue => {
                formik.setFieldValue('start', moment(dateFromValue).toDate());
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
              value={formik.values.finish}
              onChange={dateFromValue => {
                formik.setFieldValue('finish', moment(dateFromValue).toDate());
              }}
            />
          </DatePickerWrapper>
        </div>
        <div className="second-part">
          <Selection data={{ options: books }} onChange={setSelectedBook} />
          <Button className={'submit'} type="submit">
            Add
          </Button>
        </div>
      </AddTrainingFormStyled>
    </TrainingFormSection>
  );
};

export default AddTrainingForm;
