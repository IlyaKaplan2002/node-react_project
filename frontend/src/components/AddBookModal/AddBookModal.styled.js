import styled from 'styled-components';

const AddBookModalStyled = styled.div`
  padding: 24px 20px 110px 20px;

  .back {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 32px 32px 0 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 40px 123px 0 16px;
  }
`;

export default AddBookModalStyled;
