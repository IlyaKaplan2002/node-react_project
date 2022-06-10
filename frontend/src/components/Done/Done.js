import React from 'react';
import Modal from 'components/utils/Modal';
import sprite from 'assets/icons/sprite.svg';
import { ArticleStyled, PStyled, MyButton, WellDoneIcon } from './Done.styled';

const Done = ({ onCloseModal, onDoneClick }) => {
  return (
    <Modal onClick={onCloseModal}>
      <ArticleStyled>
        <WellDoneIcon>
          <use xlinkHref={`${sprite}#welldone`}></use>
        </WellDoneIcon>

        <PStyled>
          Congratulations!
          <br />
          Another book read.
        </PStyled>
        <MyButton label={'Done'} onClick={onDoneClick}>
          Done
        </MyButton>
      </ArticleStyled>
    </Modal>
  );
};

export default Done;
