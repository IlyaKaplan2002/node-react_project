import styled from 'styled-components';

const QuoteContainer = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.2;
  width: 230px;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;

  @media screen and (min-width: 768px) {
    width: 526px;
    font-size: 24px;
    line-height: 1.6;
  }

  @media screen and (min-width: 1280px) {
    width: 397px;
    font-size: 24px;
    line-height: 1.2;
  }
  .quote {
    color: ${props => props.theme.colors.mainOrange};
    width: 27px;
    height: 40px;
  }
`;

const QuoteText = styled.p`
  color: ${props => props.theme.colors.mainBlack};
`;

const QuoteAuthor = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin-top: 28px;
  font-size: 14px;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 50%;
    display: block;
    width: 100px;
    height: 1px;
    background-color: #242a3780;
    margin-bottom: 18px;
    @media screen and (min-width: 768px) {
      width: 150;
    }
  }
`;

export { QuoteContainer, QuoteText, QuoteAuthor };
