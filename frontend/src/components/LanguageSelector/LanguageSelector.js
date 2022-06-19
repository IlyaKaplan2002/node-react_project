import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelectorStyled from './LanguageSelector.styled';

const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <LanguageSelectorStyled className={className}>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('ua')}
        className="button"
      >
        🇺🇦
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className="button"
      >
        🇬🇧
      </button>
    </LanguageSelectorStyled>
  );
};

export default LanguageSelector;
