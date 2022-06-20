import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'constants';
import { VscHome } from 'react-icons/vsc';
import { MdMenuBook } from 'react-icons/md';
import { NavigationStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavLink to={routes.training.path} className="link">
        <MdMenuBook className="icon" />
      </NavLink>
      <NavLink to={routes.library.path} className="link">
        <VscHome className="icon" />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
