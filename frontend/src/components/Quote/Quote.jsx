import React from 'react';
import { useTranslation } from 'react-i18next';
import { QuoteContainer, QuoteText, QuoteAuthor } from './Quote.styled';
const Quote = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'quote' });

  return (
    <QuoteContainer>
      <div className="quote">“</div>
      <QuoteText>{t('text')}</QuoteText>
      <QuoteAuthor>{t('author')}</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;
