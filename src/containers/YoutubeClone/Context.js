import { useState, createContext } from 'react';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  const [themeType, setThemeType] = useState('lightTheme');
  const [isNavSearchBar, setIsNavSearchBar] = useState(false);
  const [isExtendMenu, setIsExtendMenu] = useState(false);
  const [isExtendFloatMenu, setIsExtendFloatMenu] = useState(false);
  const [isUsingFloatSideMenu, setIsUsingFloatSideMenu] = useState(false);
  const [isUsingLargeSideMenu, setIsUsingLargeSideMenu] = useState(false);
  return {
    themeType,
    setThemeType,
    isNavSearchBar,
    setIsNavSearchBar,
    isUsingFloatSideMenu,
    setIsUsingFloatSideMenu,
    isExtendMenu,
    setIsExtendMenu,
    isExtendFloatMenu,
    setIsExtendFloatMenu,
    isUsingLargeSideMenu,
    setIsUsingLargeSideMenu,
  };
};
