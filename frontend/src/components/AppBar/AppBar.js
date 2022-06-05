import React from 'react';
import Media from 'react-media';
import AppBarContainer from './AppBar.styled';
import Logo from 'components/utils/Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Logout from './Logout';

class AppBar extends React.Component {
  render() {
    return (
      <div>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches =>
            matches.small ? (
              <AppBarContainer>
                <Logo />
                <div className="containerNavMob">
                  <Navigation />
                  <UserMenu />
                  <Logout />
                </div>
              </AppBarContainer>
            ) : (
              <AppBarContainer>
                <Logo />
                <UserMenu />
                <div className="containerNavTablDesc">
                  <Navigation />
                  <Logout />
                </div>
              </AppBarContainer>
            )
          }
        </Media>
      </div>
    );
  }
}

export default AppBar;
