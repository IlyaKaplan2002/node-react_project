import * as yup from 'yup';

const signUpShema = yup.object({
  name: yup.string().min(3).max(100).required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).max(30).required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

export default signUpShema;
