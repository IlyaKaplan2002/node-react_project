import styled from 'styled-components';

const AddButtonStyled = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.mainOrange};
  position: fixed;
  bottom: 53px;
  left: 50%;
  transform: translateX(-50%);
`;

export default AddButtonStyled;
