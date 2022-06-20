import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBodyScroll, useOnEscClose } from 'hooks';
import Button from 'components/reusableComponents/Button';
import Icon from 'components/reusableComponents/Icon';
import { ArticleStyled, Backdrop, PStyled, WellDoneIcon } from './Done.styled';

const Done = ({ onCloseModal }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'done' });
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);
  const [enable, disable] = useBodyScroll();

  useEffect(() => {
    addEsc();
    enable();
    return () => {
      removeEsc();
      disable();
    };
  }, [addEsc, removeEsc, enable, disable]);

  const onBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    onCloseModal();
  };

  return (
    <Backdrop onClick={onBackdrop}>
      <ArticleStyled>
        <WellDoneIcon>
          <Icon iconId="welldone" />
        </WellDoneIcon>

        <PStyled>
          {t('congrats')}
          <br />
          {t('another')}
        </PStyled>
        <Button type="button" className="button" filled onClick={onCloseModal}>
          {t('done')}
        </Button>
      </ArticleStyled>
    </Backdrop>
  );
};

export default Done;
