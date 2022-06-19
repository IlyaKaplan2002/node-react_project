import React, { useEffect } from 'react';
import { ArticleStyled, Backdrop, PStyled, WellDoneIcon } from './Done.styled';
import Icon from 'components/reusableComponents/Icon';
import Button from 'components/reusableComponents/Button';
import { useTranslation } from 'react-i18next';
import { useOnEscClose } from 'hooks';

const Done = ({ onCloseModal }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'done' });
  const [addEsc, removeEsc] = useOnEscClose(onCloseModal);

  useEffect(() => {
    addEsc();
    return () => {
      removeEsc();
    };
  }, [addEsc, removeEsc]);

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
