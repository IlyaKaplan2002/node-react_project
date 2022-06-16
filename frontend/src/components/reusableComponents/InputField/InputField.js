import React from 'react';
import InputFieldStyled from './InputField.styled';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

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
  variant = null,
  onShowPassword,
  classNames = { field: '', labelText: '', input: '', error: '' },
}) => {
  if (variant !== null) {
    return (
      <InputFieldStyled className={classNames.field}>
        <label className="iconLabel">
          <span className={'labelText ' + classNames.labelText}>{label}</span>
          <input
            autoComplete="off"
            type={type}
            className={classNames.input + ' input'}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {variant ? (
            <button
              type="button"
              onClick={() => onShowPassword()}
              className="icon"
            >
              <AiFillEye />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onShowPassword()}
              className="icon"
            >
              <AiFillEyeInvisible />
            </button>
          )}
        </label>
        <p className={classNames.error + ' error'}>{touched && error}</p>
      </InputFieldStyled>
    );
  }

  return (
    <InputFieldStyled className={classNames.field}>
      <span className={'labelText ' + classNames.labelText}>{label}</span>
      <input
        type={type}
        autoComplete="off"
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
