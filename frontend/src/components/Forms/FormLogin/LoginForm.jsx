import React, { useState } from 'react';
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
import Loader from 'components/utils/Loader';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async values => {
    try {
      setIsLoading(true);
      const data = await login(values);
      dispatch(authActions.login(data));
    } catch (error) {
      notifyError(error);
    }
    setIsLoading(false);
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

        <Button className="button" disabled={isLoading} type="submit" filled>
          Login
          {isLoading && <Loader button width={30} height={30} />}
        </Button>
        <FormSpanStyled>
          <LinkStyled to={routes.signUp.path}>Register</LinkStyled>
        </FormSpanStyled>
      </AuthFormStyled>
    </FormContainer>
  );
};

export default LoginForm;
