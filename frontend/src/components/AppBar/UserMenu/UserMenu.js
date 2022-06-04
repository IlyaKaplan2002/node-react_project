import React from 'react';
import { Container, Button, ProfileImage } from './UserMenu.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <ProfileImage>{'M'}</ProfileImage>
      {/* <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вихід
      </Button> */}
      <Button type="button">Вихід</Button>
    </Container>
  );
}
