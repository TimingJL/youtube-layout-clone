/* eslint-disable no-undef */
import { useEffect } from 'react';

export const useInitSidebarSize = ({
  setIsShowLargeMenu,
  breakValue,
}) => {
  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > breakValue) {
      setIsShowLargeMenu(true);
    }
  }, [breakValue, setIsShowLargeMenu]);
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
