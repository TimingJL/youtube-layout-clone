import { useState, createContext } from 'react';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  const [themeType, setThemeType] = useState('darkTheme');
  return {
    themeType,
    setThemeType,
  };
};
