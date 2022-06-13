import React from 'react';
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
            {book.name}
          </label>
        </li>
      ))}
    </SelectionListWrapper>
  );
};

export default SelectionList;
