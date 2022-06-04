import React from 'react';
import InfoList from 'components/utils/InfoList';
import InfoTitle from 'components/utils/InfoTitle';
import { BookInfoContainerStyled } from './BookInfo.styled';

const BookInfo = () => {
  return (
    <BookInfoContainerStyled>
      <InfoTitle title="Books Reading" className="title" />
      <InfoList
        title="Допоможе вам"
        items={[
          'Швидше сформулювати свою ціль і розпочати читати',
          'Пропорційно розподілити навантаження на кожний день',
          'Відстежувати особистий успіх',
        ]}
        className="list"
      />
      <InfoList
        title="Також ви зможете "
        items={[
          'Швидше сформулювати свою ціль і розпочати читати',
          'Пропорційно розподілити навантаження на кожний день',
          'Відстежувати особистий успіх',
        ]}
        className="list"
      />
    </BookInfoContainerStyled>
  );
};

export default BookInfo;
