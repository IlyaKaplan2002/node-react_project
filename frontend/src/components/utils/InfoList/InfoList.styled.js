import styled from 'styled-components';

const InfoListStyled = styled.div`
  padding-left: 5px;

  .topic {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 20px;
    line-height: 38px;
    margin-bottom: 14px;
  }
  .item {
    font-family: ${props => props.theme.fonts.families.montserrat};
    display: flex;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.colors.secondary};
  }
  .icon {
    color: ${props => props.theme.colors.mainOrange};
    margin-right: 12px;
  }
  .item:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export default InfoListStyled;
