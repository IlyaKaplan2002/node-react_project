import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoList from 'components/reusableComponents/InfoList';
import InfoTitle from 'components/reusableComponents/InfoTitle';
import { BookInfoContainerStyled } from './BookInfo.styled';

const BookInfo = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'bookInfo' });

  return (
    <BookInfoContainerStyled>
      <InfoTitle title="Books Reading" className="title" />
      <InfoList
        title={t('first.title')}
        items={[
          t('first.items.first'),
          t('first.items.second'),
          t('first.items.third'),
        ]}
        className="list"
      />
      <InfoList
        title={t('second.title')}
        items={[
          t('second.items.first'),
          t('second.items.second'),
          t('second.items.third'),
        ]}
        className="list"
      />
    </BookInfoContainerStyled>
  );
};

export default BookInfo;
