import styled from 'styled-components';

const ChartStyled = styled.div`
  position: absolute;
  width: 290px;
  height: 280px;
  padding: 22px 25px 22px 20px;
  background-color: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 704px;
    height: 340px;
    padding: 42px, 35px, 52px, 31px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 928px;
    height: 340px;
    padding: 36px, 37px, 78px, 32px;
  }
`;

export default ChartStyled;
