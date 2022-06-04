import React from 'react';
import { useFormik } from 'formik';
import signUpShema from 'models/signUpShema';
import {
  LoginFormStyled,
  LabelStyled,
  LabelTextStyled,
  FormSpanStarStyled,
  InputStyled,
  LinkStyled,
  FormSpanStyled,
  ErrorInfoStyled,
  FormContainer,
} from '../AuthForm.styled';
import Button from 'components/utils/Button';
import AuthGoogle from '../../GoogleReg/GoogleReg';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const initialErrors = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    initialErrors,
    validationSchema: signUpShema,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  return (
    <FormContainer className="signUp">
      <LoginFormStyled onSubmit={formik.handleSubmit}>
        <AuthGoogle type="button" className="googleButton" />
        <LabelStyled>
          <LabelTextStyled>
            Ім’я <FormSpanStarStyled>*</FormSpanStarStyled>
          </LabelTextStyled>
          <InputStyled
            type="text"
            name="name"
            placeholder="..."
            values={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorInfoStyled className="error">
            {formik.touched.name && formik.errors.name}
          </ErrorInfoStyled>
        </LabelStyled>
        <LabelStyled>
          <LabelTextStyled>
            Електронна адреса <FormSpanStarStyled>*</FormSpanStarStyled>
          </LabelTextStyled>
          <InputStyled
            type="email"
            name="email"
            placeholder="your@email.com"
            values={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorInfoStyled className="error">
            {formik.touched.email && formik.errors.email}
          </ErrorInfoStyled>
        </LabelStyled>
        <LabelStyled>
          <LabelTextStyled>
            Пароль <FormSpanStarStyled>*</FormSpanStarStyled>
          </LabelTextStyled>
          <InputStyled
            type="password "
            name="password"
            placeholder="..."
            values={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorInfoStyled className="error">
            {formik.touched.password && formik.errors.password}
          </ErrorInfoStyled>
        </LabelStyled>
        <LabelStyled>
          <LabelTextStyled>
            Підтвердити пароль <FormSpanStarStyled>*</FormSpanStarStyled>
          </LabelTextStyled>
          <InputStyled
            type="password "
            name="confirmPassword"
            placeholder="..."
            values={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorInfoStyled className="error">
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </ErrorInfoStyled>
        </LabelStyled>
        <Button type="submit" filled className="button">
          Зареєструватися
        </Button>
        <FormSpanStyled>
          Вже з нами? <LinkStyled to="/login">Увійти</LinkStyled>
        </FormSpanStyled>
      </LoginFormStyled>
    </FormContainer>
  );
};

export default SignUpForm;
