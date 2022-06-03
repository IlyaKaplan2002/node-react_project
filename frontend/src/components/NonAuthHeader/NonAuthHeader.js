import Logo from 'components/utils/Logo';
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
