import React from 'react';
import { useFormik } from 'formik';
import signUpShema from 'models/signUpShema';
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
import { login, signUp } from 'api/auth';
import { notifyError } from 'helpers';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';
import { routes } from 'constants';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async values => {
    try {
      const { email, password } = values;
      await signUp(values);
      const data = await login({ email, password });
      dispatch(authActions.login(data));
    } catch (error) {
      notifyError(error);
    }
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: signUpShema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <FormContainer className="signUp" signup>
      <AuthFormStyled onSubmit={formik.handleSubmit}>
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
                Name
                {formik.touched.name && (
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
                Email
                {formik.touched.email && (
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
            type="password"
            placeholder="..."
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                Password
                {formik.touched.password && (
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
            type="password"
            placeholder="..."
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <div>
                Confirm password
                {formik.touched.confirmPassword && (
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
        <Button type="submit" filled className="button signUpForm">
          Register
        </Button>
        <FormSpanStyled>
          Already with us? <LinkStyled to={routes.login.path}>Login</LinkStyled>
        </FormSpanStyled>
      </AuthFormStyled>
    </FormContainer>
  );
};

export default SignUpForm;
