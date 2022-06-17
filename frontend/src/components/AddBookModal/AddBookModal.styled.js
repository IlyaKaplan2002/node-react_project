import styled from 'styled-components';

const AddBookModalStyled = styled.div`
  padding: 24px 20px 110px 20px;
  padding-top: 52px;
  position: relative;

  & svg.back {
    margin-bottom: 32px;

    z-index: 2;
    position: absolute;
    top: 3%;
    left: 5%;
    stroke: ${props => props.theme.colors.mainOrange};

    &:hover {
      cursor: pointer;
      stroke: ${props => props.theme.colors.buttonHoverOrange};
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 32px 32px 0 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 40px 123px 0 16px;
  }
`;

export default AddBookModalStyled;
