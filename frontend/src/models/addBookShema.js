import { object, string, number } from 'yup';
import { getYear } from 'date-fns';

const currentYear = getYear(new Date());

const addBookSchema = object().shape({
  name: string().required('Name is required'),
  author: string().required('Author is required'),
  year: number()
    .typeError('Year should be a number')
    .positive('Year should be positive')
    .required('Year is required')
    .max(currentYear, `Year should be less than ${currentYear}`),
  pages: number()
    .typeError('Pages should be a number')
    .positive('Pages should be positive')
    .required('Pages is required'),
});

export default addBookSchema;
