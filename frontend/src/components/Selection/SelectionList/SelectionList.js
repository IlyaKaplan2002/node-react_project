import React from 'react';
import { SelectionListWrapper } from './SelectionList.styled';

const SelectionList = ({ data, current }) => {
  const getClassName = id => (id === current?.id ? 'labelActive' : 'label');

  return (
    <SelectionListWrapper className={'list'}>
      {data.options.map(
        ({ name, id, isDefault }) =>
          !isDefault && (
            <li key={id} className={'item'}>
              <label className={getClassName(id)} htmlFor={id}>
                {name}
              </label>
            </li>
          )
      )}
    </SelectionListWrapper>
  );
};

export default SelectionList;
