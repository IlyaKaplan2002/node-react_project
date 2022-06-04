import PropTypes from 'prop-types';
import sprite from 'assets/icons/sprite.svg';

export function Icon({ iconId, className, fill, stroke, width, height }) {
  return (
    <svg
      className={`icon icon-${iconId} ${className}`}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${sprite}#${iconId}`}></use>
    </svg>
  );
}

Icon.defaultProps = {
  className: '',
  fill: 'A6ABB9',
  stroke: '',
  width: '15px',
  height: '15px',
};

Icon.propTypes = {
  iconId: PropTypes.string.isRequired,
};
