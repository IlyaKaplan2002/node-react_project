import React from 'react';
import LanguageSelector from 'components/LanguageSelector';
import Logo from 'components/reusableComponents/Logo';
import NonAuthHeaderStyled from './NonAuthHeader.styled';

const NonAuthHeader = () => {
  return (
    <NonAuthHeaderStyled>
      <Logo className="logo" />
      <LanguageSelector className="langSelector" />
    </NonAuthHeaderStyled>
  );
};

export default NonAuthHeader;
