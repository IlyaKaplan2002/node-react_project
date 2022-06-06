import styled from 'styled-components';

const ChartStyled = styled.div`
  width: 280px;
  height: 290px;
  .title {
    display: block;
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 14px;
    line-height: 38px;
    color: ${props => props.theme.colors.mainBlack};
  }
`;

export default ChartStyled;
