import React from 'react';
import { useFormik } from 'formik';
import addBookSchema from 'models/addBookShema';
import AddBookFormStyled from './AddBookForm.styled';
import Button from 'components/reusableComponents/Button';
import InputField from 'components/reusableComponents/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { tryRefreshToken } from 'helpers';
import { addBook } from 'api/books';
import { authSelectors } from 'redux/auth';
import { booksActions } from 'redux/books';
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: '',
  author: '',
  year: '',
  pages: '',
};

const AddBookForm = ({ onClose = () => {} }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);

  const onSubmit = async (values, { resetForm }) => {
    const tryFunc = async tokenValue => {
      const { book } = await addBook(tokenValue, values);
      dispatch(booksActions.add(book));
    };

    try {
      await tryFunc(token, values);
    } catch (error) {
      tryRefreshToken(error, refreshTokenValue, dispatch, tryFunc);
    }
    onClose();
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: addBookSchema,
    validateOnBlur: true,
    onSubmit: onSubmit,
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
          label={t('addBookForm.name')}
          touched={formik.touched.name}
          error={formik.errors.name}
          classNames={{
            field: 'label name',
          }}
        />
        <div className="dataWrapper">
          <InputField
            placeholder="..."
            name="author"
            type="text"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={t('addBookForm.author')}
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
            label={t('addBookForm.year')}
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
            label={t('addBookForm.pages')}
            touched={formik.touched.pages}
            error={formik.errors.pages}
            classNames={{
              field: 'label',
            }}
          />
        </div>
      </div>

      <Button className="button btnWhite" type="submit">
        {t('add')}
      </Button>
    </AddBookFormStyled>
  );
};

export default AddBookForm;
