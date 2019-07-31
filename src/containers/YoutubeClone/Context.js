import { useState, createContext, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  lightTheme,
  darkTheme,
} from 'Styled/Settings/theme';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  const [themeType, setThemeType] = useState('lightTheme');
  const [isNavSearchBar, setIsNavSearchBar] = useState(false);
  const [isExtendMenu, setIsExtendMenu] = useState(false);
  const [isExtendFloatMenu, setIsExtendFloatMenu] = useState(false);
  const [isUsingFloatSideMenu, setIsUsingFloatSideMenu] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleSetLanguage = useCallback((lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }, [i18n]);

  const customeTheme = {
    lightTheme,
    darkTheme,
  };
  const themeOptions = [
    {
      id: 'lightTheme',
      name: '預設主題',
    },
    {
      id: 'darkTheme',
      name: '深色主題',
    },
  ];
  const languageOptions = [
    {
      id: 'en',
      zhHant: '英文',
      en: 'English',
    },
    {
      id: 'zh-Hant',
      zhHant: '中文',
      en: 'Traditional Chinese',
    },
  ];
  const currentTheme = customeTheme[themeType];
  return {
    themeType,
    currentTheme,
    themeOptions,
    setThemeType,
    isNavSearchBar,
    setIsNavSearchBar,
    isUsingFloatSideMenu,
    setIsUsingFloatSideMenu,
    isExtendMenu,
    setIsExtendMenu,
    isExtendFloatMenu,
    setIsExtendFloatMenu,
    languageOptions,
    language,
    handleSetLanguage,
  };
};
