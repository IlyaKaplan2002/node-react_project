import styled from 'styled-components';

const SelectionListWrapper = styled.ul`
    &.list {
    position: absolute;
    z-index: 2;
    width: 280px;
    overflow: hidden;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 483px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
        width: 715px;
    }
  }
  }
  
  & .item:not(:last-child) {
    border-: ${props => props.theme.borders.input};
  }

  & .item {
    border: ${props => props.theme.borders.input};
    &:not(:first-child) {
        border-top: none;
    }
  }
  
  
  & .label {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-size: 14px;
    line-height: 1.21;
    padding: 12px;
    display: block;
    cursor: pointer;
    background: ${props => props.theme.colors.mainWhite};
    font-weight: ${props => props.theme.fonts.weights.medium};
    color: ${props => props.theme.colors.mainBlack};
  }
  
  & .labelActive {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-size: 14px;
    line-height: 1.21;
    padding: 12px;
    display: block;
    cursor: pointer;
    background: ${props => props.theme.colors.mainWhite};
    font-weight: ${props => props.theme.fonts.weights.medium};
    color: ${props => props.theme.colors.placeholder};
  }
  
`;

export { SelectionListWrapper };
