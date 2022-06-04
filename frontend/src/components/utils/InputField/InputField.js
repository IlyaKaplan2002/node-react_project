import React from 'react';
import InputFieldStyled from './InputField.styled';

const InputField = ({
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  label,
  touched,
  error,
  type,
  classNames = {},
}) => {
  return (
    <InputFieldStyled className={classNames.field}>
      <span className={classNames.labelText + ' labelText'}>{label}</span>
      <input
        type={type}
        className={classNames.input + ' input'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={classNames.error + ' error'}>{touched && error}</p>
    </InputFieldStyled>
  );
};

export default InputField;
