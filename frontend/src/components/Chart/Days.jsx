import DaysStyled from './Days.styled';

const Days = props => {
  return (
    <DaysStyled>
      <p> {props.children}</p>
    </DaysStyled>
  );
};

export default Days;
