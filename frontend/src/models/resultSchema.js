import * as yup from 'yup';

const resultSchema = yup.object().shape({
  date: yup.string().required('Date is required'),
  pages: yup.string().required('Pages is required'),
});

export default resultSchema;
