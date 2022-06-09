import React, { useState } from 'react';
import Button from 'components/utils/Button';
import moment from 'moment';
import {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  InputStyled,
  ListStyled,
} from './Result.styled';

const Result = () => {
  const [results, setResults] = useState([]);
  const [dateValue, setDateValue] = useState('');
  const [pages, setPages] = useState('');

  const time = moment().format('kk:mm:ss');

  const handlerResultChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'date':
        setDateValue(value);
        break;
      case 'pages':
        setPages(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!dateValue || !pages) {
      console.log('date || pages === null');
      return;
    }

    const date = dateValue.split('-').reverse().join('.');
    const array = { date, time, pages };
    setResults(prevState => [...prevState, array]);

    setDateValue('');
    setPages('');
  };

  return (
    <ResultContainerStyled>
      <TextStyled>RESULT</TextStyled>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <label className="inputMargin">
            <SpanStyled>Date</SpanStyled>
            <InputStyled
              type="date"
              name="date"
              onChange={handlerResultChange}
              value={dateValue}
            />
          </label>
          <label>
            <SpanStyled>Amount of pages</SpanStyled>
            <InputStyled
              type="text"
              name="pages"
              onChange={handlerResultChange}
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
