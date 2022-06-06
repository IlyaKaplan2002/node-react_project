import React, { useEffect, useState } from 'react';
import NonAuthHeader from 'components/NonAuthHeader';
import LoginForm from 'components/Forms/FormLogin/LoginForm';
import { Container } from 'styles';
import Quote from 'components/Quote';
import { Wrapper } from 'components/Forms/AuthForm.styled';

const LoginView = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.title = 'Books Reading Login';
  }, []);

  const onToggleModal = img => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
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
