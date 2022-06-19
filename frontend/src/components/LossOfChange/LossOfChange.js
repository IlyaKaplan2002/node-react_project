import React from 'react';
import Modal from 'components/reusableComponents/Modal';
import { ArticleStyled, PStyled, DivButtonStyled } from './LossOfChange.styled';
import Button from 'components/reusableComponents/Button';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

const LossOfChange = ({ onCloseModal, onLeaveClick }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'lossOfChange' });

  return (
    <Modal onCloseModal={onCloseModal}>
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
    </Modal>
  );
};

export default LossOfChange;
