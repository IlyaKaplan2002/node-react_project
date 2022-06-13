import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useOnEscClose } from 'hooks';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './Model.styled';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal = () => {}, children }) => {
  const [addOnEsc, removeOnEsc] = useOnEscClose(onCloseModal);

  useEffect(() => {
    addOnEsc();
    disableBodyScroll(document.body, { reserveScrollBarGap: true });
    return () => {
      removeOnEsc();
      enableBodyScroll(document.body);
    };
  });

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
