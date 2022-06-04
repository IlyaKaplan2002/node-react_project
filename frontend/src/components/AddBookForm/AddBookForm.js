import React from 'react';
import { useFormik } from 'formik';
import addBookSchema from 'models/addBookShema';
import AddBookFormStyled from './AddBookForm.styled';
import Button from 'components/utils/Button';
import InputField from 'components/utils/InputField';

const initialValues = {
  name: '',
  author: '',
  year: '',
  pages: '',
};
const initialErrors = {
  name: '',
  author: '',
  year: '',
  pages: '',
};

const AddBookForm = () => {
  const formik = useFormik({
    initialValues,
    initialErrors,
    validationSchema: addBookSchema,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  return (
    <AddBookFormStyled onSubmit={formik.handleSubmit}>
      <div className="wrapper">
        <InputField
          type="text"
          placeholder="..."
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Book title"
          touched={formik.touched.name}
          error={formik.errors.name}
          classNames={{
            field: 'label',
          }}
        />

        <InputField
          placeholder="..."
          name="author"
          type="text"
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Author"
          touched={formik.touched.author}
          error={formik.errors.author}
          classNames={{
            field: 'label',
          }}
        />

        <InputField
          placeholder="..."
          name="year"
          type="text"
          value={formik.values.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Publication date"
          touched={formik.touched.year}
          error={formik.errors.year}
          classNames={{
            field: 'label',
          }}
        />

        <InputField
          placeholder="..."
          name="pages"
          type="text"
          value={formik.values.pages}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Amount of pages"
          touched={formik.touched.pages}
          error={formik.errors.pages}
          classNames={{
            field: 'label',
          }}
        />
      </div>

      <Button className="button" type="submit">
        Add
      </Button>
    </AddBookFormStyled>
  );
};

export default AddBookForm;
