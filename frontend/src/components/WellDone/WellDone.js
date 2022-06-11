import React from 'react';
import Modal from 'components/utils/Modal';
import {
  ArticleStyled,
  PStyled,
  DivButtonStyled,
  WellDoneIcon,
} from './WellDone.styled';
import Icon from 'components/utils/Icon';
import Button from 'components/utils/Button';

const WellDone = ({ onCloseModal, onNewTrainingClick }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <ArticleStyled>
        <WellDoneIcon>
          <Icon className="icon" iconId="welldone" />
        </WellDoneIcon>

        <PStyled>
          Well done!
          <br /> but you need to be a little bit faster. <br />
          You can do it)
        </PStyled>
        <DivButtonStyled>
          <Button
            className="button"
            type="button"
            filled
            onClick={onNewTrainingClick}
          >
            New training
          </Button>
          <Button className="button" type="button" onClick={onCloseModal}>
            Back
          </Button>
        </DivButtonStyled>
      </ArticleStyled>
    </Modal>
  );
};

export default WellDone;
