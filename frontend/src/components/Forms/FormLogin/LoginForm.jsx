import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import AuthGoogle from '../../GoogleReg/GoogleReg';
import loginSchema from 'models/loginSchema';
import Button from 'components/reusableComponents/Button';
import InputField from 'components/reusableComponents/InputField';
import Loader from 'components/reusableComponents/Loader';
import { login } from 'api/auth';
import { notifyError } from 'helpers';
import { authActions } from 'redux/auth';
import { routes } from 'constants';
import {
  AuthFormStyled,
  FormSpanStarStyled,
  LinkStyled,
  FormSpanStyled,
  FormContainer,
} from '../AuthForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisual, setButtonVisual] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'loginForm' });

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
      <AuthFormStyled autoComplete="off" onSubmit={formik.handleSubmit}>
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
                {t('email')}
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
            placeholder={t('password')}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                {t('password')}
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
          {t('login')}
          {isLoading && <Loader button width={30} height={30} />}
        </Button>
        <FormSpanStyled>
          <LinkStyled to={routes.signUp.path}>{t('register')}</LinkStyled>
        </FormSpanStyled>
      </AuthFormStyled>
    </FormContainer>
  );
};

export default LoginForm;
