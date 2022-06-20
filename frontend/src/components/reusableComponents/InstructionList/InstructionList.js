import Icon from 'components/reusableComponents/Icon';
import { InstructionListStyled } from './InstructionList.styled';

const InstructionList = ({ className, title, bigIcon, instruction, text }) => {
  return (
    <InstructionListStyled className={className}>
      <h2 className="title">{title}</h2>
      <div className="itemWrapper">
        {bigIcon}
        <h3 className="itemTitle">{instruction}</h3>
      </div>
      <div className="textWrapper">
        {<Icon iconId="vector" className="icon" />}
        <p className="text">{text}</p>
      </div>
    </InstructionListStyled>
  );
};

export default InstructionList;
