import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { QuoteContainer, QuoteText, QuoteAuthor } from './Quote.styled';
const Quote = () => {
  return (
    <QuoteContainer>
      <ImQuotesLeft className="quote" />
      <QuoteText>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.
      </QuoteText>
      <QuoteAuthor>Бэкон Ф.</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;
