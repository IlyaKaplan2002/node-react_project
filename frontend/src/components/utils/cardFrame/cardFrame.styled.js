import styled from 'styled-components';

const CardFrameStyled = styled.div`
  position: relative;
  padding: 20px 20px 30px 54px;
  margin: 0 auto;
  width: 100%;
  max-width: 280px;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.25;
  background-color: ${props => props.theme.colors.mainWhite};
  color: ${props => props.theme.colors.mainBlack};
  box-shadow: ${props => props.theme.shadows.header};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-grid;
    grid-template-columns: ${props =>
      props.read ? '1.2fr 3fr 0.2fr' : '1fr 1.15fr'};
    column-gap: 30px;
    padding: 14px 20px 14px 60px;
    height: 62px;
    font-size: 14px;
    max-width: 704px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: ${props =>
      props.read ? '1.25fr 3fr 0.84fr' : '1fr 1.3fr'};
    max-width: 1248px;
    column-gap: ${props => (props.read ? '30px' : '110px')};
  }

  & + & {
    margin-top: 16px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 8px;
    }
  }

  & svg + & svg {
    margin-left: 3px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 4px;
    }
  }

  & .resume-card-button {
    font-size: 14px;
    border: none;
    background-color: ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.mainWhite};
    padding: 12px 34px;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin: 0;
      padding: 12px 0;
      height: fit-content;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding: 10px 36px;
      width: 130px;
    }
  }
`;

export { CardFrameStyled };
