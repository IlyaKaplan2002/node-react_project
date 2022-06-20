import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import { SelectionListWrapper } from './SelectionList.styled';

const SelectionList = ({ books, currentBook, current, onClick }) => {
  const getClassName = id =>
    current.find(book => book._id === id) ||
    (currentBook && currentBook._id === id)
      ? 'labelActive'
      : 'label';

  return (
    <SelectionListWrapper className={'list'}>
      {books.map(book => (
        <li key={book._id} className={'item'}>
          <label
            className={getClassName(book._id)}
            onClick={() => onClick(book)}
          >
            <EllipsisText text={book.name} length={10} />
          </label>
        </li>
      ))}
    </SelectionListWrapper>
  );
};

export default SelectionList;
