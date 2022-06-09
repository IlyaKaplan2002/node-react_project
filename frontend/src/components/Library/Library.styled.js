import styled from 'styled-components';

const LibraryStyled = styled.div`
  padding-top: 20px;
  padding-bottom: 79px;

  .cards:not(:last-child) {
    margin-bottom: 20px;
  }

  .empty {
    font-family: ${props => props.theme.fonts.families.montserrat};
    color: ${props => props.theme.colors.secondary};
    width: fit-content;
    margin: 0 auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 40px;
    padding-bottom: 61px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 80px;
    padding-bottom: 162px;
  }
`;

export default LibraryStyled;
