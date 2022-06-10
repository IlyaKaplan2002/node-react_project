import React from 'react';
import NonAuthHeader from 'components/NonAuthHeader';
import LoginForm from 'components/Forms/FormLogin/LoginForm';
import { Container } from 'styles';
import Quote from 'components/Quote';
import { Wrapper } from 'components/Forms/AuthForm.styled';
import Result from 'components/Result';
const LoginView = () => {
  return (
    <>
      <Container>
        <NonAuthHeader />
        <Wrapper>
          <LoginForm />
          <Quote />
        </Wrapper>
        {/* <Result /> */}
      </Container>
    </>
  );
};

export default LoginView;
