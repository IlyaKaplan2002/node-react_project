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
import { useTranslation } from 'react-i18next';

const WellDone = ({ onCloseModal, onNewTrainingClick }) => {
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);

  const { t } = useTranslation('translation', { keyPrefix: 'wellDone' });

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
          {t('title')}
          <br />
          {t('faster')}
          <br />
          {t('can')}
        </PStyled>
        <DivButtonStyled>
          <Button
            className="button btnOrange"
            type="button"
            filled
            onClick={onNewTrainingClick}
          >
            {t('new')}
          </Button>
          <Button
            className="button btnWhite"
            type="button"
            onClick={onCloseModal}
          >
            {t('back')}
          </Button>
        </DivButtonStyled>
      </ArticleStyled>
    </Modal>
  );
};

export default WellDone;
