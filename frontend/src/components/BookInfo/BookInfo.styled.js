import styled from 'styled-components';

const BookInfoContainerStyled = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
    text-align: center;
    padding-top: 64px;
    padding-bottom: 84px;
    margin-left: auto;
    margin-right: auto;
    .title {
      margin-bottom: 48px;
    }

    .list {
      text-align: left;
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
  }

  @media screen and(min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;

    .list {
      text-align: center;
    }
  }
`;

export { BookInfoContainerStyled };
