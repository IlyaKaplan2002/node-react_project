import { IconStyled } from './Icon.styled';
import sprite from 'assets/icons/sprite.svg';

const Icon = ({ iconId, className }) => {
  return (
    <IconStyled className={className}>
      <use xlinkHref={`${sprite}#${iconId}`}></use>
    </IconStyled>
  );
};

export default Icon;
