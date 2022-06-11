import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useOnEscClose } from 'hooks';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './TrainingFormModal.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
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

  return createPortal(
    <OverlayStyled>
      <ModalStyled>
        <HiOutlineArrowNarrowLeft className="back" size={24} />
        {children}
      </ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

export default Modal;
