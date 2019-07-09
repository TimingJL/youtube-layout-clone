import { useState, createContext } from 'react';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  // const [themeType, setThemeType] = useState('darkTheme');
  const [themeType, setThemeType] = useState('lightTheme');
  const [isNavSearchBar, setIsNavSearchBar] = useState(false);
  return {
    themeType,
    setThemeType,
    isNavSearchBar,
    setIsNavSearchBar,
  };
};
