import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import AddButtonStyled from './AddButton.styled';

const AddButton = ({ onClick, className }) => {
  return (
    <AddButtonStyled type="button" onClick={onClick} className={className}>
      <AiOutlinePlus color="#ffffff" width={16} height={16} />
    </AddButtonStyled>
  );
};

export default AddButton;
