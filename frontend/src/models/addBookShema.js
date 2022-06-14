import { object, string, number } from 'yup';
import { getYear } from 'date-fns';

const currentYear = getYear(new Date());

const addBookSchema = object().shape({
  name: string().max(50, 'Name should be less than 50').matches(/^[^\s-]/).required('Name is required'),
  author: string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/ ).required('Author is required'),
  year: number()
    .typeError('Year should be a number')
    .positive('Year should be positive')
    .required('Year is required')
    .max(currentYear, `Year should be less than ${currentYear}`),
  pages: number()
    .typeError('Pages should be a number')
    .positive('Pages should be positive')
    .max(99999, 'Must be no more than 5 characters')    
    .required('Pages is required'),
});

export default addBookSchema;

