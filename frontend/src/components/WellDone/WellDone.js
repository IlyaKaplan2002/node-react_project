import React, { useEffect } from 'react';
import {
  ArticleStyled,
  PStyled,
  DivButtonStyled,
  WellDoneIcon,
  Backdrop,
} from './WellDone.styled';
import Icon from 'components/reusableComponents/Icon';
import Button from 'components/reusableComponents/Button';
import { useBodyScroll, useOnEscClose } from 'hooks';
import { useTranslation } from 'react-i18next';

const WellDone = ({ onCloseModal, onNewTrainingClick }) => {
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);
  const [enable, disable] = useBodyScroll();

  const { t } = useTranslation('translation', { keyPrefix: 'wellDone' });

  const onBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    onCloseModal();
  };

  useEffect(() => {
    addEsc();
    enable();
    return () => {
      removeEsc();
      disable();
    };
  }, [addEsc, removeEsc, enable, disable]);

  return (
    <Backdrop onClick={onBackdrop}>
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
    </Backdrop>
  );
};

export default WellDone;
