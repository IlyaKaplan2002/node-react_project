import AddBookForm from 'components/AddBookForm';
import GoBackButton from 'components/utils/GoBackButton';
import { useOnEscClose } from 'hooks';
import React, { useEffect } from 'react';
import AddBookModalStyled from './AddBookModal.styled';

const AddBookModal = ({ onClose, isInstructionModalOpened }) => {
  const [addOnEscClose, removeOnEscClose] = useOnEscClose(onClose);

  useEffect(() => {
    if (!isInstructionModalOpened) addOnEscClose();

    return () => {
      removeOnEscClose();
    };
  }, [addOnEscClose, removeOnEscClose, isInstructionModalOpened]);

  return (
    <AddBookModalStyled>
      <GoBackButton className="back" onClick={onClose} />
      <AddBookForm onClose={onClose} />
    </AddBookModalStyled>
  );
};

export default AddBookModal;
