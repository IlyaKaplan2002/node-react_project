import React from 'react';
import Modal from 'components/utils/Modal';
import sprite from 'assets/icons/sprite.svg';
import {
  ArticleStyled,
  PStyled,
  MyButton,
  DivButtonStyled,
  WellDoneIcon,
} from './WellDone.styled';

const WellDone = ({ onCloseModal, onNewTrainingClick, onBackClick }) => {
  return (
    <Modal onClick={onCloseModal}>
      <ArticleStyled>
        <WellDoneIcon>
          <use xlinkHref={`${sprite}#welldone`}></use>
        </WellDoneIcon>

        <PStyled>
          Well done!
          <br /> but you need to be a little bit faster. <br />
          You can do it)
        </PStyled>
        <DivButtonStyled>
          <MyButton label={'New training'} onClick={onNewTrainingClick}>
            New training
          </MyButton>
          <MyButton
            className={'resume-card-button'}
            label={'Back'}
            onClick={onBackClick}
          >
            Back
          </MyButton>
        </DivButtonStyled>
      </ArticleStyled>
    </Modal>
  );
};

export default WellDone;
