import styled from 'styled-components';

export const InstructionListStyled = styled.div`
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  color: ${props => props.theme.colors.mainBlack};

  .title {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 8px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 16px;
    }
  }

  .itemWrapper {
    display: flex;
    margin-bottom: 8px;
  }

  .itemTitle {
    font-size: 16px;
    line-height: 1.25;
  }

  .textWrapper {
    display: flex;
    padding-left: 34px;
    font-weight: ${props => props.theme.fonts.weights.regular};
    color: ${props => props.theme.colors.secondary};
  }

  .icon {
    margin-right: 8px;
  }

  .text {
    font-size: 14px;
    line-height: 17px;
  }
`;
