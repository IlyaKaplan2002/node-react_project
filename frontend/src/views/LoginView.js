import React from 'react';
import NonAuthHeader from 'components/NonAuthHeader';
import LoginForm from 'components/Forms/FormLogin/LoginForm';
import { Container } from 'styles';
import Quote from 'components/Quote';
import { Wrapper } from 'components/Forms/AuthForm.styled';
import { Helmet } from 'react-helmet';

const LoginView = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <NonAuthHeader />
        <Wrapper>
          <LoginForm />
          <Quote />
        </Wrapper>
      </Container>
    </>
  );
};

export default LoginView;
