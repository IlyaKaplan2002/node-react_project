import styled from 'styled-components';

const TrainingFormSection = styled.div`
  width: 280px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 704px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 928px;
  }
  .training-button {
    width: 100%;
    padding: 18px 0;

    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;

    background-color: ${({ theme, active }) =>
      active ? theme.colors.mainOrange : theme.colors.darkGray};
    color: ${props => props.theme.colors.mainWhite};
    border: none;

    margin-bottom: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      height: fit-content;
      margin: auto 0 28px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin: auto 0 24px;
    }
  }
`;

const AddTrainingFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .submit {
    width: 170px;
    margin: 32px auto 0;
    transition: 0.2s linear;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin: 0 auto 0 50px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 180px;
      margin: 0 auto 0 32px;
    }

    &:hover {
      transform: translateY(-0.25em);
      border: ${props =>
        props.filled
          ? props.theme.borders.transparent
          : props.theme.borders.buttonHover};
    }
  }

  .date-label,
  .date-input,
  .second-part,
  .first-part,
  .book-input,
  .book-label {
    width: 100%;
  }

  .book-input,
  .book-label {
  }

  .date-input,
  .date-input::placeholder {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 14px;
    line-height: 1.21;
    color: ${props => props.theme.colors.placeholder};
  }

  .date-input {
    outline: none;
    border: none;
    background: ${props => props.theme.colors.mainBg};
    border: 1px solid #a6abb9;
    color: ${props => props.theme.colors.mainBlack};
    padding: 12px 40px;
  }

  .rdtOpen .rdtPicker {
    display: block;
    left: 50%;
    top: 110%;
    transform: translateX(-50%);
  }

  .second-part {
    margin-top: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 24px;
      display: flex;
    }
  }

  .first-part {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      padding-right: 163px;
      justify-content: space-between;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      justify-content: center;
      padding: 0;
    }
  }
`;

const DatePickerWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    right: 12px;
    fill: ${props => props.theme.colors.mainBlack};
  }

  .calendar {
    fill: ${props => props.theme.colors.placeholder};
    left: 12px;
  }

  & + & {
    margin-top: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 250px;
      margin-top: 0;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-left: 44px;
    }
  }
`;

export { TrainingFormSection, AddTrainingFormStyled, DatePickerWrapper };
