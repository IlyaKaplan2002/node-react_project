import styled from 'styled-components';

const SelectionWrapper = styled.div`
  .wrapper {
    position: relative;
    width: 100%;
  }

  .wide {
    width: 100%;
  }

  .buttonWrapper {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 483px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 715px;
    }
  }

  .button {
    padding: 14px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: ${props => props.theme.colors.mainWhite};
    cursor: pointer;
    position: relative;
    box-shadow: ${props => props.theme.shadows.input};
    font-family: ${props => props.theme.fonts.families.montserrat};
  }

  .current {
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 14px;
    line-height: 1.21;
    color: ${props => props.theme.colors.placeholder};
  }

  .button svg {
    fill: ${props => props.theme.colors.mainBlack};
  }

  .input {
    display: none;
  }
`;

export { SelectionWrapper };
