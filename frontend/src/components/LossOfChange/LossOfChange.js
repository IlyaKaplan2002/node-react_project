import React from 'react';
import Modal from 'components/reusableComponents/Modal';
import { ArticleStyled, PStyled, DivButtonStyled } from './LossOfChange.styled';
import Button from 'components/reusableComponents/Button';
import Media from 'react-media';

const LossOfChange = ({ onCloseModal, onLeaveClick }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <ArticleStyled>
        <PStyled>
          The changes you made will be lost if you navigate away from this
          application
        </PStyled>
        <DivButtonStyled>
          <Button
            className="button btnWhite"
            type="button"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button
            filled
            className="button btnOrange"
            type="button"
            onClick={onLeaveClick}
          >
            Leave{' '}
            <Media query="(min-width:768px)" render={() => <>this app</>} />
          </Button>
        </DivButtonStyled>
      </ArticleStyled>
    </Modal>
  );
};

export default LossOfChange;
