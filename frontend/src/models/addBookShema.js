import { object, string, number } from 'yup';
import { getYear } from 'date-fns';

const currentYear = getYear(new Date());

const addBookSchema = object().shape({
  name: string()
    .max(50, 'Name should be less than 50')
    .matches(/^[^\s-]/, 'Name should not start from space or dash')
    .required('Name is required'),
  author: string()
    .max(50, 'Author should be less than 50')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/,
      'Author name must be letters'
    )
    .required('Author is required'),
  year: number()
    .typeError('Year should be a number')
    .positive('Year should be positive')
    .required('Year is required')
    .max(currentYear, `Year should be less than ${currentYear}`)
    .min(1457, 'Year should be more than 1457'),
  pages: number()
    .typeError('Pages should be a number')
    .positive('Pages should be positive')
    .max(99999, 'Must be no more than 5 characters')
    .required('Pages is required'),
});

export default addBookSchema;
