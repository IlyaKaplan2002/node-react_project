import styled from 'styled-components';

const ChartStyled = styled.div`
  position: relative;
  height: 280px;
  width: 290px;
  padding: 25px 22px 20px 22px;
  background-color: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 340px;
    width: 704px;
    padding: 35px 49px 31px 49px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 340px;
    width: 928px;
    padding: 37px 78px 32px 40px;
  }
`;

export default ChartStyled;
