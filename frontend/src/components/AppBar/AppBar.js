import React from 'react';
// import { useSelector } from 'react-redux';
import AppBarContainer from './AppBar.styled';
import Logo from 'components/utils/Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

// import { authSelectors } from '../redux/auth';

export default function AppBar() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <AppBarContainer>
        <Logo />
        <div className="containerNav">
          <Navigation />
          <UserMenu />
        </div>
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </AppBarContainer>
    </>
  );
}
