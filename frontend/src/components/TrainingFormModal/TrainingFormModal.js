import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './TrainingFormModal.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal = () => {}, children }) => {

  useEffect(() => {
    disableBodyScroll(document.body, { reserveScrollBarGap: true });
    return () => {
      enableBodyScroll(document.body);
    };
  });

  return createPortal(
    <OverlayStyled>
      <ModalStyled>
        <HiOutlineArrowNarrowLeft onClick={onCloseModal} className="back" size={24} />
        {children}
      </ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

export default Modal;
