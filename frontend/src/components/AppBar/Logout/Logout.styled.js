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
    text-decoration: underline;
    line-height: 17px;
    color: ${props => props.theme.colors.mainBlack};
    cursor: pointer;
  }
`;

export default LogoutStyled;
