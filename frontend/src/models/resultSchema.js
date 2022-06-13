import * as yup from 'yup';

const resultSchema = yup.object().shape({
  date: yup
    .date()
    .typeError('Date should be valid')
    .required('Date is required'),
  pages: yup
    .number()
    .typeError('Pages should be a number')
    .positive('Pages should be positive')
    .required('Pages is required'),
});

export default resultSchema;
