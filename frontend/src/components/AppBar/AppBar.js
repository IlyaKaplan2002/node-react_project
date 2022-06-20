import React from 'react';
import Media from 'react-media';
import Logo from 'components/reusableComponents/Logo';
import LanguageSelector from 'components/LanguageSelector';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Logout from './Logout';
import AppBarContainer from './AppBar.styled';

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
                  <LanguageSelector />
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
                  <LanguageSelector />
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
