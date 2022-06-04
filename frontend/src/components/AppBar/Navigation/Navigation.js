import React from 'react';
import { NavigationStyled } from './Navigation.styled';
import { VscHome } from 'react-icons/vsc';
import { MdMenuBook } from 'react-icons/md';
import { routes } from 'constants';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

const Navigation = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //   const [value, setValue] = React.useState('contacts');

  return (
    <NavigationStyled>
      <NavLink to={routes.library.path} className="link">
        <MdMenuBook className="icon" />
      </NavLink>
      <NavLink to={routes.home.path} className="link">
        <VscHome className="icon" />
      </NavLink>
      {/* <NavLink to={routes.training.path} className="link">
        <MdLibraryAdd className="icon" />
      </NavLink> */}
    </NavigationStyled>
  );
};

export default Navigation;
