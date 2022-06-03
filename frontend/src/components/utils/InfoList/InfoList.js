import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import InfoListStyled from './InfoList.styled';

const InfoList = ({ title, items = [], className }) => {
  return (
    <InfoListStyled className={className}>
      <h3 className="topic">{title}</h3>
      <ul className="list">
        {items.map(item => (
          <li key={item} className="item">
            <span className="icon">
              <FiChevronRight />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </InfoListStyled>
  );
};

export default InfoList;
