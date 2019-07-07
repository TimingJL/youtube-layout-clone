import { useState, createContext } from 'react';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  const [themeType, setThemeType] = useState('darkTheme');
  // const [themeType, setThemeType] = useState('lightTheme');
  return {
    themeType,
    setThemeType,
  };
};
