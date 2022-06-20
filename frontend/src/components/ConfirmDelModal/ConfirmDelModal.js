import Button from 'components/reusableComponents/Button';
import Loader from 'components/reusableComponents/Loader';
import { useBodyScroll, useOnEscClose } from 'hooks';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmDelModalStyled from './ConfirmDelModal.styled';

const ConfirmDelModal = ({ onClose, onDelete, delButtonDisabled }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'confirmDelModal' });
  const [addEsc, removeEsc] = useOnEscClose(onClose);
  const [enable, disable] = useBodyScroll();

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onClose();
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
    <ConfirmDelModalStyled onClick={onBackdropClick}>
      <div className="modal">
        <p className="text">{t('text')}</p>
        <div className="buttonsWrapper">
          <Button className="button btnWhite" type="button" onClick={onClose}>
            {t('cancel')}
          </Button>
          <Button
            disabled={delButtonDisabled}
            filled
            className="button btnOrange"
            type="button"
            onClick={onDelete}
          >
            {t('delete')}
            {delButtonDisabled && <Loader button width={30} height={30} />}
          </Button>
        </div>
      </div>
    </ConfirmDelModalStyled>
  );
};

export default ConfirmDelModal;
