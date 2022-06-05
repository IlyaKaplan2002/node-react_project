import React from 'react';
import { useFormik } from 'formik';
import loginSchema from 'models/loginSchema';
import {
  LoginFormStyled,
  LabelStyled,
  LabelTextStyled,
  FormSpanStarStyled,
  InputStyled,
  ErrorInfoStyled,
  LinkStyled,
  FormSpanStyled,
  FormContainer,
} from '../AuthForm.styled';
import Button from 'components/utils/Button';
import AuthGoogle from '../../GoogleReg/GoogleReg';

const initialValues = {
  email: '',
  password: '',
};
const initialErrors = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    initialErrors,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  return (
    <FormContainer>
      <LoginFormStyled onSubmit={formik.handleSubmit}>
        <AuthGoogle type="button" className="googleButton" />
        <LabelStyled>
          <LabelTextStyled>
            Email <FormSpanStarStyled>*</FormSpanStarStyled>
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
            Password <FormSpanStarStyled>*</FormSpanStarStyled>
          </LabelTextStyled>
          <InputStyled
            type="password "
            name="password"
            placeholder="Password"
            values={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></InputStyled>
          <ErrorInfoStyled className="error">
            {formik.touched.password && formik.errors.password}
          </ErrorInfoStyled>
        </LabelStyled>
        <Button className="button" type="submit" filled>
          Login
        </Button>
        <FormSpanStyled>
          <LinkStyled to="/signup"> SignUp </LinkStyled>
        </FormSpanStyled>
      </LoginFormStyled>
    </FormContainer>
  );
};

export default LoginForm;
