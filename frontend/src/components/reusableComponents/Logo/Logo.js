import { routes } from 'constants';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoStyled from './Logo.styled';

const Logo = ({ className }) => {
  return (
    <LogoStyled className={className}>
      <Link className="link" to={routes.home.path}>
        br
      </Link>
    </LogoStyled>
  );
};

export default Logo;
