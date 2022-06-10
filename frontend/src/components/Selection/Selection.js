import React, { useEffect, useRef, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import SelectionList from './SelectionList';
import classNames from 'classnames';
import { SelectionWrapper } from './Selection.styled';

const Selection = ({ data, onChange, wide, top }) => {
  const [current, setCurrent] = useState(data.options.find(({ isDefault }) => isDefault));
  const [isOpen, setIsOpen] = useState(false);

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

  const handleChange = e => {
    const newId = e.target.value;
    const newValue = data.options.find(({ id }) => id == newId);
    setCurrent(newValue);
    onChange(newValue);
    toggle();
  };

  return (
    <SelectionWrapper
      ref={selectionRef}
      className={classNames(
        'wrapper',
        wide ? 'wide' : '',
        top ? 'top' : '',
        isOpen ? 'open' : '',
      )}
    >
      <div className={'buttonWrapper'}>
        <button type="button" className={'button'} onClick={toggle}>
          <span className={'current'}>
            {data?.showTitle && <span className={'title'}>{data?.title}: </span>}
            {current?.name}
          </span>
            <GoTriangleDown size={13} />
        </button>
      </div>
      {data.options.map(({ type, id }) => (
        <input
          type="radio"
          id={id}
          name={type}
          key={id}
          value={id}
          onChange={handleChange}
          checked={current?.id === id}
          className={'input'}
        />
      ))}
      {isOpen && <SelectionList data={data} current={current} />}
    </SelectionWrapper>
  );
};

export default Selection;
