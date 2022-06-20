import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
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
        <Flag code="ua" width={20} fallback="UA" />
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className="button"
      >
        <Flag code="gb" width={20} fallback="GB" />
      </button>
    </LanguageSelectorStyled>
  );
};

export default LanguageSelector;
