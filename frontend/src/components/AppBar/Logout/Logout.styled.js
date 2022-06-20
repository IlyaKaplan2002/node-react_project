import styled from 'styled-components';

export const LogoutStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;

  .button {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.light};
    font-size: 14px;
    line-height: 17px;

    cursor: pointer;
    :hover {
      color: ${props => props.theme.colors.mainOrange};
    }
    :focus {
      color: ${props => props.theme.colors.mainOrange};
    }
  }
`;

export default LogoutStyled;
