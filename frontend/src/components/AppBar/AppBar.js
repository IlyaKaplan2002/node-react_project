import React from 'react';
// import { useSelector } from 'react-redux';
import { Container, ContainerNav } from './AppBar.styled';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

// import { authSelectors } from '../redux/auth';

export default function AppBar() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Container>
        <Logo />
        <ContainerNav>
          <Navigation />
          <UserMenu />
        </ContainerNav>
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Container>
    </>
  );
}
