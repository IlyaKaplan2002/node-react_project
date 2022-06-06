import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './Model.styled';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onCloseModalClick);
    return () => {
      window.removeEventListener('keydown', onCloseModalClick);
    };
  });
  const onCloseModalClick = evt => {
    if (evt.code === 'Escape') {
      onCloseModal();
    }
  };

  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <OverlayStyled onClick={onBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

export default Modal;
