import AddBookForm from 'components/AddBookForm';
import GoBackButton from 'components/utils/GoBackButton';
import React from 'react';
import AddBookModalStyled from './AddBookModal.styled';

const AddBookModal = ({ onClose }) => {
  return (
    <AddBookModalStyled>
      <GoBackButton className="back" onClick={onClose} />
      <AddBookForm />
    </AddBookModalStyled>
  );
};

export default AddBookModal;
