import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  width: ${props => props.theme.breakpoints.mobile};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => props.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.breakpoints.desktop};
  }
`;

export default Container;
