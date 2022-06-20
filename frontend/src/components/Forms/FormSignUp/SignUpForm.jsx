import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import AuthGoogle from '../../GoogleReg/GoogleReg';
import Button from 'components/reusableComponents/Button';
import InputField from 'components/reusableComponents/InputField';
import Loader from 'components/reusableComponents/Loader';
import signUpShema from 'models/signUpShema';
import { login, signUp } from 'api/auth';
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
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisual, setButtonVisual] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'registerForm' });

  const onSubmit = async values => {
    try {
      setIsLoading(true);
      const { email, password } = values;
      await signUp(values);
      const data = await login({ email, password });
      dispatch(authActions.login(data));
    } catch (error) {
      notifyError(error);
    }
    setIsLoading(false);
  };

  const onHadleShowPassword = () => setShowPassword(prev => !prev);
  const onHadleShowConfirmPassword = () =>
    setShowConfirmPassword(prev => !prev);

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: signUpShema,
    validateOnBlur: true,
    onSubmit,
  });

  useEffect(() => {
    const handlerDisableButton = () => {
      if (
        formik.values.name === '' ||
        (formik.touched.name && formik.errors.name) ||
        formik.values.email === '' ||
        (formik.touched.email && formik.errors.email) ||
        formik.values.password === '' ||
        (formik.touched.password && formik.errors.password) ||
        formik.values.confirmPassword === '' ||
        (formik.touched.confirmPassword && formik.errors.confirmPassword)
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
    formik.values.confirmPassword,
    formik.values.email,
    formik.values.name,
    formik.values.password,
    formik.touched.name,
    formik.errors.name,
    formik.touched.email,
    formik.errors.email,
    formik.touched.password,
    formik.errors.password,
    formik.touched.confirmPassword,
    formik.errors.confirmPassword,
  ]);

  return (
    <FormContainer className="signUp" signup>
      <AuthFormStyled autoComplete="off" onSubmit={formik.handleSubmit}>
        <AuthGoogle type="button" className="googleButton" />
        <div className="wrapperSignUp">
          <InputField
            type="text"
            placeholder="..."
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                {t('name')}
                {formik.touched.name && formik.errors.name && (
                  <FormSpanStarStyled>*</FormSpanStarStyled>
                )}
              </div>
            }
            touched={formik.touched.name}
            error={formik.errors.name}
            classNames={{
              field: 'label',
              input: 'input',
            }}
          />
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
            placeholder="..."
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
          <InputField
            onShowPassword={onHadleShowConfirmPassword}
            variant={showConfirmPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="..."
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                {t('confirm')}
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <FormSpanStarStyled>*</FormSpanStarStyled>
                  )}
              </div>
            }
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            classNames={{
              field: 'label',
              input: 'input',
            }}
          />
        </div>
        <Button
          type="submit"
          filled
          className="button signUpForm"
          disabled={buttonVisual}
        >
          {t('register')}
          {isLoading && <Loader button width={30} height={30} />}
        </Button>
        <FormSpanStyled>
          {t('have')}{' '}
          <LinkStyled to={routes.login.path}>{t('login')}</LinkStyled>
        </FormSpanStyled>
      </AuthFormStyled>
    </FormContainer>
  );
};

export default SignUpForm;
