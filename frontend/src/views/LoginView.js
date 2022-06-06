import React, { useEffect, useState } from 'react';
import NonAuthHeader from 'components/NonAuthHeader';
import LoginForm from 'components/Forms/FormLogin/LoginForm';
import { Container } from 'styles';
import Quote from 'components/Quote';
import { Wrapper } from 'components/Forms/AuthForm.styled';
import Resume from 'components/Resume';
import Button from 'components/utils/Button/Button.styled';

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
        {/* <NonAuthHeader /> */}
        {/* <Wrapper>
          <LoginForm />
          <Quote />
        </Wrapper> */}
        {showModal && <Resume onCloseModal={onToggleModal} />}
        <Button type="button" onClick={onToggleModal}>
          Click
        </Button>
      </Container>
    </>
  );
};

export default LoginView;
