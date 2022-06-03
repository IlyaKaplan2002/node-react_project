import React from 'react';
import { useFormik } from 'formik';
import addBookSchema from 'models/addBookShema';
import AddBookFormStyled from './AddBookForm.styled';

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
        <label className="label">
          <span className="labelText">Book title</span>
          <input
            className="input"
            placeholder="..."
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="error">{formik.touched.name && formik.errors.name}</p>
        </label>
        <label className="label">
          <span className="labelText">Author</span>
          <input
            className="input"
            placeholder="..."
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          <p className="error">
            {formik.touched.author && formik.errors.author}
          </p>
        </label>
        <label className="label">
          <span className="labelText">Publication date</span>
          <input
            className="input"
            placeholder="..."
            name="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          <p className="error">{formik.touched.year && formik.errors.year}</p>
        </label>
        <label className="label">
          <span className="labelText">Amount of pages</span>
          <input
            className="input"
            placeholder="..."
            name="pages"
            value={formik.values.pages}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          <p className="error">{formik.touched.pages && formik.errors.pages}</p>
        </label>
      </div>

      <button className="button" type="submit">
        Add
      </button>
    </AddBookFormStyled>
  );
};

export default AddBookForm;
