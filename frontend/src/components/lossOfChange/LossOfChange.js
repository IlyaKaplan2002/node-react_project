import React from 'react';
import Modal from 'components/utils/Modal';
import {
  ArticleStyled,
  PStyled,
  MyButton,
  DivButtonStyled,
} from './LossOfChange.styled';

const LossOfChange = ({ onCancelClick, onLeaveClick, onCloseModal }) => {
  return (
    <Modal onClick={onCloseModal}>
      <ArticleStyled>
        <PStyled>
          The changes you made will be lost if you navigate away from this
          application
        </PStyled>
        <DivButtonStyled>
          <MyButton label={'Cancel'} onClick={onCancelClick}>
            Cancel
          </MyButton>
          <MyButton
            className={'resume-card-button'}
            label={'Leave this app'}
            onClick={onLeaveClick}
          >
            Leave this app
          </MyButton>
        </DivButtonStyled>
      </ArticleStyled>
    </Modal>
  );
};

export default LossOfChange;
