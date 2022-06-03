import styled from 'styled-components';

const HelpInfoMobileStyled = styled.div`
  padding: 32px 20px 40px;
  .title {
    margin-bottom: 32px;
  }
  .list1 {
    margin-bottom: 24px;
  }
  .list2 {
    margin-bottom: 60px;
  }
  .buttonsWrapper {
    display: flex;
    justify-content: space-between;
  }
  .button {
    width: calc((100% - 20px) / 2);
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 14px;
    line-height: 38px;
    color: ${props => props.theme.colors.mainBlack};
    text-align: center;
    border: ${props => props.theme.borders.button};
  }

  .filled {
    border: transparent;
    background: ${props => props.theme.colors.mainOrange};
    color: ${props => props.theme.colors.mainWhite};
  }
`;

export default HelpInfoMobileStyled;
