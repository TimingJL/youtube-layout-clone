/* eslint-disable no-undef */
import { useEffect } from 'react';

export const useInitSidebarSize = ({
  breakValue,
  setIsUsingFloatSideMenu,
  setIsExtendMenu,
  setIsUsingLargeSideMenu,
}) => {
  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > breakValue) {
      setIsUsingFloatSideMenu(false);
      setIsExtendMenu(true);
      setIsUsingLargeSideMenu(true);
      return;
    }
    setIsUsingFloatSideMenu(true);
    setIsExtendMenu(false);
    setIsUsingLargeSideMenu(false);
  }, [breakValue]);
};

export const useListenWindowResize = ({
  handleOnResize,
}) => {
  useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, [handleOnResize]);
};
