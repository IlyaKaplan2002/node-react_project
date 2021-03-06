import React, { useEffect } from 'react';
import Media from 'react-media';
import { useOnEscClose } from 'hooks';
import AddBookForm from 'components/AddBookForm';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
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
        render={() => (
          <HiOutlineArrowNarrowLeft
            onClick={onClose}
            className="back"
            size={24}
          />
        )}
      />
      <AddBookForm onClose={onClose} />
    </AddBookModalStyled>
  );
};

export default AddBookModal;
