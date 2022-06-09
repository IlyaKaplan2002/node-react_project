import AddBookForm from 'components/AddBookForm';
import GoBackButton from 'components/utils/GoBackButton';
import { useOnEscClose } from 'hooks';
import React, { useEffect } from 'react';
import Media from 'react-media';
import AddBookModalStyled from './AddBookModal.styled';

const AddBookModal = ({ onClose, isInstructionModalOpened, modal }) => {
  const [addOnEscClose, removeOnEscClose] = useOnEscClose(onClose);

  useEffect(() => {
    if (!isInstructionModalOpened && modal) addOnEscClose();

    return () => {
      removeOnEscClose();
    };
  }, [addOnEscClose, removeOnEscClose, isInstructionModalOpened, modal]);

  return (
    <AddBookModalStyled>
      <Media
        query="(max-width:767px)"
        render={() => <GoBackButton className="back" onClick={onClose} />}
      />
      <AddBookForm onClose={onClose} />
    </AddBookModalStyled>
  );
};

export default AddBookModal;
