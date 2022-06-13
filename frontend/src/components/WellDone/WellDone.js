import React, { useEffect } from 'react';
import Modal from 'components/reusableComponents/Modal';
import {
  ArticleStyled,
  PStyled,
  DivButtonStyled,
  WellDoneIcon,
} from './WellDone.styled';
import Icon from 'components/reusableComponents/Icon';
import Button from 'components/reusableComponents/Button';
import { useOnEscClose } from 'hooks';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const WellDone = ({ onCloseModal, onNewTrainingClick }) => {
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);

  useEffect(() => {
    addEsc();
    disableBodyScroll(document.body);
    return () => {
      removeEsc();
      enableBodyScroll(document.body);
    };
  }, [addEsc, removeEsc]);

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
