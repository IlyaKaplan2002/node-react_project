import React from 'react';
import { QuoteContainer, QuoteText, QuoteAuthor } from './Quote.styled';
const Quote = () => {
  return (
    <QuoteContainer>
      <div className="quote">“</div>
      <QuoteText>
        Books are the ships of thoughts, wandering through the waves of time.
      </QuoteText>
      <QuoteAuthor>Francis Bacon</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;
