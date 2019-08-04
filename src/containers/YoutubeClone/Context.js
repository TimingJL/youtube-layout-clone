import { useState, createContext, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  lightTheme,
  darkTheme,
  sakuraTheme,
} from 'Styled/Settings/theme';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  // const [themeType, setThemeType] = useState('lightTheme');
  const [themeType, setThemeType] = useState('sakuraTheme');
  const [isNavSearchBar, setIsNavSearchBar] = useState(false);
  const [isExtendMenu, setIsExtendMenu] = useState(false);
  const [isExtendFloatMenu, setIsExtendFloatMenu] = useState(false);
  const [isUsingFloatSideMenu, setIsUsingFloatSideMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleSetLanguage = useCallback((lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }, [i18n]);

  const customeTheme = {
    lightTheme,
    darkTheme,
    sakuraTheme,
  };
  const themeOptions = [
    {
      id: 'lightTheme',
      name: t('theme:lightTheme'),
    },
    {
      id: 'darkTheme',
      name: t('theme:darkTheme'),
    },
    {
      id: 'sakuraTheme',
      name: t('theme:sakuraTheme'),
    },
  ];

  const languageOptions = [
    {
      id: 'en',
      name: t('langauge:english'),
    },
    {
      id: 'zh-Hant',
      name: t('langauge:zhHant'),
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
