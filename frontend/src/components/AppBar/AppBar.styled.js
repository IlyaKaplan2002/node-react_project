import styled from 'styled-components';

const AppBarContainer = styled.header`
  height: 60px;
  width: auto;
  padding: 14px 20px 13px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};

  .containerNav {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export default AppBarContainer;
