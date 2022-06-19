import React from 'react';
import {
  ArticleStyled,
  PStyled,
  DivButtonStyled,
  Backdrop,
} from './LossOfChange.styled';
import Button from 'components/reusableComponents/Button';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { useOnEscClose } from 'hooks';
import { useEffect } from 'react';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const LossOfChange = ({ onCloseModal, onLeaveClick }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'lossOfChange' });
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onCloseModal();
  };

  useEffect(() => {
    addEsc();
    // disableBodyScroll(document.body);
    return () => {
      removeEsc();
      // enableBodyScroll(document.body);
    };
  }, [addEsc, removeEsc]);

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
          </Button>
        </DivButtonStyled>
      </ArticleStyled>
    </Backdrop>
  );
};

export default LossOfChange;
