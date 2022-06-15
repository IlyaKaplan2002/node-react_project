import styled from 'styled-components';

const DaysStyled = styled.div`
  position: absolute;
  top: 27px;
  left: 180px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  color: rgba(36, 42, 55, 1);
  background-color: rgba(245, 247, 250, 1);
  width: 25px;
  height: 25px;
  text-align: center;
  padding-top: 5px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 38px;
    left: 210px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    left: 200px;
    top: 39px;
  }
`;

export default DaysStyled;
