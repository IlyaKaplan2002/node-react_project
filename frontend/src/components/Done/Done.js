import React from 'react';
import Modal from 'components/utils/Modal';
import { ArticleStyled, PStyled, WellDoneIcon } from './Done.styled';
import Icon from 'components/utils/Icon';
import Button from 'components/utils/Button';

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
