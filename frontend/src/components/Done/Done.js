import React from 'react';
import Modal from 'components/reusableComponents/Modal';
import { ArticleStyled, PStyled, WellDoneIcon } from './Done.styled';
import Icon from 'components/reusableComponents/Icon';
import Button from 'components/reusableComponents/Button';
import { useTranslation } from 'react-i18next';

const Done = ({ onCloseModal }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'done' });

  return (
    <Modal onCloseModal={onCloseModal}>
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
    </Modal>
  );
};

export default Done;
