import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import SelectionList from './SelectionList';
import { trainingsActions, trainingsSelectors } from 'redux/trainings';
import { GoTriangleDown } from 'react-icons/go';
import { SelectionWrapper } from './Selection.styled';

const Selection = ({
  books,
  wide,
  top,
  current,
  desktop,
  currentBook,
  setCurrentBook,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedBooks = useSelector(trainingsSelectors.getSelectedBooks);

  const { t } = useTranslation('translation', { keyPrefix: 'selection' });

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
    if (selectedBooks.find(item => item._id === book._id)) return;
    if (!desktop) {
      dispatch(trainingsActions.addSelectedBook(book));
      toggle();
      return;
    }
    setCurrentBook(book);
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
            {!books.length ? (
              t('noBooks')
            ) : currentBook ? (
              <EllipsisText text={currentBook.name} length={40} />
            ) : (
              t('choose')
            )}
          </span>
          <GoTriangleDown size={13} />
        </button>
      </div>

      {isOpen && (
        <SelectionList
          books={books}
          currentBook={currentBook}
          onClick={onItemClick}
          current={current}
        />
      )}
    </SelectionWrapper>
  );
};

export default Selection;
