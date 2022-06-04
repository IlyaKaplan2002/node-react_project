import styled from 'styled-components';

export const InstructionListStyled = styled.div`
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  color: ${props => props.theme.colors.mainBlack};

  .title {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 8px;
  }

  .itemWrapper {
    display: flex;
    margin-bottom: 8px;
  }

  .itemWrapper .icon {
    margin-right: 12px;
    stroke: ${props => props.theme.colors.placeholder};
    width: 22px;
    height: 17px;
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

  .textWrapper .icon {
    margin-right: 8px;
    stroke: ${props => props.theme.colors.mainOrange};
    width: 10px;
    height: 12px;
  }

  .text {
    font-size: 14px;
    line-height: 17px;
  }
`;
