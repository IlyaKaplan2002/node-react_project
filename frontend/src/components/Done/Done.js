import React from 'react';
import Modal from 'components/reusableComponents/Modal';
import { ArticleStyled, PStyled, WellDoneIcon } from './Done.styled';
import Icon from 'components/reusableComponents/Icon';
import Button from 'components/reusableComponents/Button';

const Done = ({ onCloseModal }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <ArticleStyled>
        <WellDoneIcon>
          {/* <use xlinkHref={`${sprite}#welldone`}></use> */}
          <Icon iconId="welldone" />
        </WellDoneIcon>

        <PStyled>
          Congratulations!
          <br />
          Another book read.
        </PStyled>
        <Button type="button" className="button" filled onClick={onCloseModal}>
          Done
        </Button>
      </ArticleStyled>
    </Modal>
  );
};

export default Done;
