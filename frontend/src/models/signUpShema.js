import * as yup from 'yup';

const signUpShema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
      'Please enter valid name'
    )
    .min(3)
    .max(100)
    .required('Name is required'),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+$/,
      'Please enter valid email'
    )
    .min(10)
    .max(63)
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9+!@#$%^&*_]+[a-zA-Zа-яА-Я0-9+!@#$%^&*_.-]+[a-zA-Zа-яА-Я0-9+!@#$%^&*_]$/,
      'Please enter valid password'
    )
    .min(6)
    .max(30)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

export default signUpShema;
