import React from 'react';
import { useFormik } from 'formik';
import loginSchema from 'models/loginSchema';
import {
  AuthFormStyled,
  FormSpanStarStyled,
  LinkStyled,
  FormSpanStyled,
  FormContainer,
} from '../AuthForm.styled';
import Button from 'components/utils/Button';
import AuthGoogle from '../../GoogleReg/GoogleReg';
import InputField from 'components/utils/InputField';
import { login } from 'api/auth';
import { notifyError } from 'helpers';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';
import { routes } from 'constants';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async values => {
    try {
      const data = await login(values);
      dispatch(authActions.login(data));
    } catch (error) {
      notifyError(error);
    }
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <FormContainer>
      <AuthFormStyled onSubmit={formik.handleSubmit}>
        <AuthGoogle type="button" className="googleButton" />
        <div className="wrapper">
          <InputField
            type="email"
            placeholder="your@email.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                Email <FormSpanStarStyled>*</FormSpanStarStyled>
              </div>
            }
            touched={formik.touched.email}
            error={formik.errors.email}
            classNames={{
              field: 'label',
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                Password <FormSpanStarStyled>*</FormSpanStarStyled>
              </div>
            }
            touched={formik.touched.password}
            error={formik.errors.password}
            classNames={{
              field: 'label',
            }}
          />
        </div>

        <Button className="button" type="submit" filled>
          Login
        </Button>
        <FormSpanStyled>
          <LinkStyled to={routes.signUp.path}>Register</LinkStyled>
        </FormSpanStyled>
      </AuthFormStyled>
    </FormContainer>
  );
};

export default LoginForm;
