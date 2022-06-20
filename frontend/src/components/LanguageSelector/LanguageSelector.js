import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelectorStyled from './LanguageSelector.styled';
import Flag from 'react-world-flags';

const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <LanguageSelectorStyled className={className}>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('ua')}
        className="button"
      >
        <Flag
          code="ua"
          // width="18"
          fallback="UA"
          className="button-flag-img button_flag_img-UA"
        />
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className="button"
      >
        <Flag
          code="gb"
          // width="20"
          fallback="GB"
          className="button-flag-img button_flag_img-GB"
        />
      </button>
    </LanguageSelectorStyled>
  );
};

export default LanguageSelector;
