import React from 'react';
import InfoList from 'components/utils/InfoList';
import InfoTitle from 'components/utils/InfoTitle';
import { BookInfoContainerStyled } from './BookInfo.styled';

const BookInfo = () => {
  return (
    <BookInfoContainerStyled>
      <InfoTitle title="Books Reading" className="title" />
      <InfoList
        title="Will help you to"
        items={[
          'Create your goal faster and proceed to read',
          'Divide process proportionally for each day',
          'Track your success',
        ]}
        className="list"
      />
      <InfoList
        title="You may also"
        items={[
          'Pose your own independent point of view',
          'Improve your professional skills according to new knowledge',
          'Become an interesting interlocutor',
        ]}
        className="list"
      />
    </BookInfoContainerStyled>
  );
};

export default BookInfo;
