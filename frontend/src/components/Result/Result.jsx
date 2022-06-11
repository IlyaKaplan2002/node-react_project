import React, { useState } from 'react';
import Button from 'components/utils/Button';
import Datetime from 'react-datetime';
import { format, subDays } from 'date-fns';
import 'react-datetime/css/react-datetime.css';
// import resultSchema from 'models/';
// import notifyError from 'helpers/notifyError';
import {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  ListStyled,
} from './Result.styled';
import { useFormik } from 'formik';
import { GoTriangleDown } from 'react-icons/go';

const initialValues = {
  date: '',
  pages: '',
};

const Result = () => {
  const [results, setResults] = useState([]);

  const time = format(new Date(), 'kk:mm:ss'); // for example

  const onSubmit = values => {
    const formatDate = format(values.date, 'dd.MM.yyyy');

    const array = { date: formatDate, time, pages: values.pages };

    setResults(prevState => [...prevState, array]);
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: null, //to do
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
              value={formik.values.date}
            />
            <GoTriangleDown size={14} />
          </div>
          <div>
            <SpanStyled>Amount of pages</SpanStyled>
            <input
              className="input"
              type="text"
              name="pages"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pages}
            />
          </div>
        </div>
        <Button filled type="submit" className="button">
          Add result
        </Button>
      </form>
      <TextStyled className="changeWeight">STATISTICS</TextStyled>

      {results && (
        <ul>
          {results.map(result => (
            <ListStyled key={result.time}>
              <li className="table">{result.date}</li>
              <li className="table">
                <span className="chengeColor">{result.time}</span>
              </li>
              <li className="table">
                {result.pages} <span className="chengeColor">pages</span>
              </li>
            </ListStyled>
          ))}
        </ul>
      )}
    </ResultContainerStyled>
  );
};

export default Result;
