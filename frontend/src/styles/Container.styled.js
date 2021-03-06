import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: ${props => props.theme.breakpoints.mobile};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => props.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.breakpoints.desktop};
  }
`;

export default Container;
