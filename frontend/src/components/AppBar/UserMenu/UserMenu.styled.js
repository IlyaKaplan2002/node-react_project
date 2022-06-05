import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;

  .profileImage {
    border-radius: 50%;
    background-color: ${props => props.theme.colors.input} !important;
    color: ${props => props.theme.colors.mainBlack} !important;
  }

  .userName {
    display: none;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: inline;
      font-family: ${props => props.theme.fonts.families.montserrat};
      font-weight: ${props => props.theme.fonts.weights.light};
      font-size: 14px;
      line-height: 17px;
      color: ${props => props.theme.colors.mainBlack};
      margin-left: 12px;
    }
  }
`;

export default UserMenuStyled;
