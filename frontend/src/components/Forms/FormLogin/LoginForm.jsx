import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import loginSchema from 'models/loginSchema';
import {
  AuthFormStyled,
  FormSpanStarStyled,
  LinkStyled,
  FormSpanStyled,
  FormContainer,
} from '../AuthForm.styled';
import Button from 'components/reusableComponents/Button';
import AuthGoogle from '../../GoogleReg/GoogleReg';
import InputField from 'components/reusableComponents/InputField';
import { login } from 'api/auth';
import { notifyError } from 'helpers';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';
import { routes } from 'constants';
import Loader from 'components/reusableComponents/Loader';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisual, setButtonVisual] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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

  const onHadleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit,
  });

  useEffect(() => {
    const handlerDisableButton = () => {
      if (
        formik.values.password === '' ||
        (formik.touched.password && formik.errors.password) ||
        formik.values.email === '' ||
        (formik.touched.email && formik.errors.email)
      ) {
        setButtonVisual(true);
        return;
      } else {
        setButtonVisual(false);
        return;
      }
    };
    handlerDisableButton();
  }, [
    formik.values.email,
    formik.values.password,
    formik.touched.password,
    formik.errors.password,
    formik.touched.email,
    formik.errors.email,
  ]);

  return (
    <FormContainer>
      <AuthFormStyled onSubmit={formik.handleSubmit}>
        <AuthGoogle type="button" className="googleButton" />
        <div className="wrapperSignIn">
          <InputField
            type="email"
            placeholder="your@email.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                Email
                {formik.touched.email && formik.errors.email && (
                  <FormSpanStarStyled>*</FormSpanStarStyled>
                )}
              </div>
            }
            touched={formik.touched.email}
            error={formik.errors.email}
            classNames={{
              field: 'label',
              input: 'input',
            }}
          />
          <InputField
            onShowPassword={onHadleShowPassword}
            variant={showPassword}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                Password
                {formik.touched.password && formik.errors.password && (
                  <FormSpanStarStyled>*</FormSpanStarStyled>
                )}
              </div>
            }
            touched={formik.touched.password}
            error={formik.errors.password}
            classNames={{
              field: 'label',
              input: 'input',
            }}
          />
        </div>

        <Button className="button" disabled={buttonVisual} type="submit" filled>
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
