import React, { useState } from 'react';
import Button from 'components/utils/Button';
import Datetime from 'react-datetime';
import { format, subDays } from 'date-fns';
import 'react-datetime/css/react-datetime.css';
import notifyError from 'helpers/notifyError';
import {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  ListStyled,
} from './Result.styled';
// import Icon from 'components/utils/Icon';

const Result = () => {
  const [results, setResults] = useState([]);
  const [date, setDate] = useState();
  const [pages, setPages] = useState('');

  const time = format(new Date(), 'kk:mm:ss');

  const handlerDateChange = evt => {
    setDate(evt.format('DD.MM.YYYY'));
  };
  const handletInputChange = evt => {
    const { value } = evt.target;
    setPages(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!date || !pages) {
      notifyError('Date and page must be filled');
      return;
    }
    if (!Number(pages)) {
      notifyError('Pages is a number');
      return;
    }

    const array = { date, time, pages };
    setResults(prevState => [...prevState, array]);

    setDate('');
    setPages('');
  };

  const valid = function (current) {
    const dayBefore = subDays(new Date(), 2);
    return current.isAfter(dayBefore);
  };

  let inputProps = { className: 'input', name: 'date', autoComplete: 'false' };

  return (
    <ResultContainerStyled>
      <TextStyled>RESULT</TextStyled>
      <form onSubmit={handleSubmit} className="form">
        <div className="formContainer">
          <label className="inputMargin">
            <SpanStyled>Date</SpanStyled>
            <Datetime
              isValidDate={valid}
              inputProps={inputProps}
              locale="en"
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              onChange={handlerDateChange}
              value={date}
              closeOnSelect
            />
          </label>
          <label>
            <SpanStyled>Amount of pages</SpanStyled>
            <input
              className="input"
              type="text"
              name="pages"
              onChange={handletInputChange}
              value={pages}
            />
          </label>
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
