import { InstructionListStyled } from './InstructionList.styled';
import { Icon } from 'components/utils/Icon/Icon';

const InstructionList = ({
  className,
  title,
  bigIconId,
  smallIconId,
  fill,
  stroke,
  width,
  height,
  instruction,
  text,
}) => {
  return (
    <InstructionListStyled className={className}>
      <h2 className="title">{title}</h2>
      <div className="itemWrapper">
        {
          <Icon
            iconId={bigIconId}
            fill={fill}
            stroke={stroke}
            width={width}
            height={height}
          />
        }
        <h3 className="itemTitle">{instruction}</h3>
      </div>
      <div className="textWrapper">
        {
          <Icon
            iconId={smallIconId}
            fill={fill}
            stroke={stroke}
            width={width}
            height={height}
          />
        }
        <p className="text">{text}</p>
      </div>
    </InstructionListStyled>
  );
};

export default InstructionList;
