import styled from 'styled-components';

const AddBookFormStyled = styled.form`
  .wrapper {
    margin-bottom: 40px;
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      display: flex;
      .label:first-child {
        min-width: 346px;
        margin-right: 16px;
      }
    }
  }

  .label:not(:last-child) {
    margin-bottom: 20px;
  }

  .dataWrapper {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      .label:not(:last-child) {
        margin-right: 32px;
      }
    }
    .label:first-child {
      min-width: 315px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      .label:not(:last-child) {
        margin-right: 16px;
      }
      .label:first-child {
        min-width: 250px;
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
  }

  .button {
    width: fit-content;
    height: fit-content;
    padding: 12px 70px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 17px;

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      top: 22px;
      margin-left: 48px;
    }
  }
`;

export default AddBookFormStyled;
