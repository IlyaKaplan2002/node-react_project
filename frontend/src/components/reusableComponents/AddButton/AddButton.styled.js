import styled from 'styled-components';

const AddButtonStyled = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.mainOrange};
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    cursor: pointer;
  }
`;

export default AddButtonStyled;
