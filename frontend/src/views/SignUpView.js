import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'styles';
import NonAuthHeader from 'components/NonAuthHeader';
import FormSignUp from 'components/Forms/FormSignUp';
import BookInfo from 'components/BookInfo';
import { Wrapper } from 'components/Forms/AuthForm.styled';

const SignUpView = () => {
  useEffect(() => {
    document.title = 'Books Reading SigUp';
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Container>
        <NonAuthHeader />
        <Wrapper>
          <FormSignUp />
          <BookInfo />
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUpView;
