import styled from 'styled-components';

const LanguageSelectorStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: auto;
  margin-right: 12px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-right: 48px;
  }

  .button {
    cursor: pointer;
    width: 20px;
    height: 12px;
    overflow: hidden;
  }

  .button_flag_img-UA {
    width: auto;
    height: 110%;
    margin: 0 -3px 3px 0;
  }

  .button_flag_img-GB {
    width: auto;
    height: 100%;
    margin: 0 -3px 3px -3px;
  }
`;

export default LanguageSelectorStyled;
