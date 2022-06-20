import React, { useEffect } from 'react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import Button from 'components/reusableComponents/Button';
import { useBodyScroll, useOnEscClose } from 'hooks';
import {
  ArticleStyled,
  PStyled,
  DivButtonStyled,
  Backdrop,
} from './LossOfChange.styled';
import Loader from 'components/reusableComponents/Loader';

const LossOfChange = ({ onCloseModal, onLeaveClick, buttonDisabled }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'lossOfChange' });
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);
  const [enable, disable] = useBodyScroll();

  const onBackdropClick = e => {
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
    <Backdrop onClick={onBackdropClick}>
      <ArticleStyled>
        <PStyled>{t('text')}</PStyled>
        <DivButtonStyled>
          <Button
            className="button btnWhite"
            type="button"
            onClick={onCloseModal}
          >
            {t('cancel')}
          </Button>
          <Button
            filled
            className="button btnOrange"
            type="button"
            onClick={onLeaveClick}
          >
            {t('leave')}{' '}
            <Media query="(min-width:768px)" render={() => <>{t('app')}</>} />
            {buttonDisabled && <Loader button width={30} height={30} />}
          </Button>
        </DivButtonStyled>
      </ArticleStyled>
    </Backdrop>
  );
};

export default LossOfChange;
