import React from 'react';
import { Helmet } from 'react-helmet';
import NonAuthHeader from 'components/NonAuthHeader';
import LoginForm from 'components/Forms/FormLogin/LoginForm';
import { Container } from 'styles';
import Quote from 'components/Quote';
import { Wrapper } from 'components/Forms/AuthForm.styled';

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
