import Logo from 'components/reusableComponents/Logo';
import React from 'react';
import NonAuthHeaderStyled from './NonAuthHeader.styled';

const NonAuthHeader = () => {
  return (
    <NonAuthHeaderStyled>
      <Logo className="logo" />
    </NonAuthHeaderStyled>
  );
};

export default NonAuthHeader;
