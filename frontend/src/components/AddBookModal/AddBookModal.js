import AddBookForm from 'components/AddBookForm';
import GoBackButton from 'components/utils/GoBackButton';
import React from 'react';
import AddBookModalStyled from './AddBookModal.styled';

const AddBookModal = () => {
  return (
    <AddBookModalStyled>
      <GoBackButton className="back" />
      <AddBookForm />
    </AddBookModalStyled>
  );
};

export default AddBookModal;
