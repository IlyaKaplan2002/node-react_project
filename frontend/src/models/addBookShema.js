import { object, string, number } from 'yup';

const addBookSchema = object().shape({
  name: string().required('Name is required'),
  author: string().required('Author is required'),
  year: number()
    .typeError('Year should be a number')
    .positive('Year should be positive')
    .required('Year is required'),
  pages: number()
    .typeError('Pages should be a number')
    .positive('Pages should be positive')
    .required('Pages is required'),
});

export default addBookSchema;
