import styled from 'styled-components';

const AddBookFormStyled = styled.form`
  .wrapper {
    margin-bottom: 40px;
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 0;
      display: flex;
      .label:first-child {
        min-width: 346px;
        margin-right: 16px;
      }
    }
  }

  .label:not(:last-child) {
    margin-bottom: 20px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 0;
    }
  }

  .label.name {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 24px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 0;
    }
  }

  .dataWrapper {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      .label:not(:last-child) {
        margin-right: 32px;
      }
      .label:first-child {
        min-width: 315px;
      }
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
    align-items: flex-end;
  }

  .button {
    width: fit-content;
    height: fit-content;
    padding: 12px 70px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 17px;
    :hover {
      background-color: ${props => props.theme.colors.mainOrange};
      border-color: ${props => props.theme.colors.mainOrange};
      transition: 0.6s linear;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-left: 48px;
    }
  }
`;

export default AddBookFormStyled;
