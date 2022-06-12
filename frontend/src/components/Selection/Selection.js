import React, { useEffect, useRef, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import SelectionList from './SelectionList';
import classNames from 'classnames';
import { SelectionWrapper } from './Selection.styled';
import { useDispatch } from 'react-redux';
import { trainingsActions } from 'redux/trainings';

const Selection = ({ books, wide, top, current }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const selectionRef = useRef(null);

  useEffect(() => {
    const onBodyClick = e => {
      if (selectionRef.current && !selectionRef.current.contains(e.target)) {
        toggle();
      }
    };
    isOpen
      ? document.body.addEventListener('click', onBodyClick)
      : document.body.removeEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [isOpen]);

  const toggle = () => setIsOpen(prev => !prev);

  const onItemClick = book => {
    dispatch(trainingsActions.addSelectedBook(book));
    toggle();
  };

  return (
    <SelectionWrapper
      ref={selectionRef}
      className={classNames(
        'wrapper',
        wide ? 'wide' : '',
        top ? 'top' : '',
        isOpen ? 'open' : ''
      )}
    >
      <div className={'buttonWrapper'}>
        <button type="button" className={'button'} onClick={toggle}>
          <span className={'current'}>
            {!books.length
              ? 'You do not have books in library'
              : 'Choose books from the library'}
          </span>
          <GoTriangleDown size={13} />
        </button>
      </div>

      {isOpen && (
        <SelectionList books={books} onClick={onItemClick} current={current} />
      )}
    </SelectionWrapper>
  );
};

export default Selection;
