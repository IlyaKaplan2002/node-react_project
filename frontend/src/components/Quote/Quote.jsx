import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { QuoteContainer, QuoteText, QuoteAuthor } from './Quote.styled';
const Quote = () => {
  return (
    <QuoteContainer>
      <ImQuotesLeft className="quote" />
      <QuoteText>
        Books are the ships of thoughts, wandering through the waves of time.
      </QuoteText>
      <QuoteAuthor>Francis Bacon</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;
