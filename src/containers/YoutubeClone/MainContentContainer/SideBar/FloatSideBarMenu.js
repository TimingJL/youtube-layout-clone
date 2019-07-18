import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';

import HamburgerMenuIcon from 'components/HamburgerMenuIcon';
import YoutubeLogo from 'components/YoutubeLogo';

import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

const HeaderContainer = styled.div`
  display: flex;
  height: 57px;
  border-bottom: 1px solid ${(props) => props.theme[props.themeType].dropdown.borderColor};
  .header-container__icon-wrapper {
    padding: 0px 16px;
    display: flex;
    align-items: center;
  }
`;

const FloatSideBarMenu = () => {
  const {
    themeType,
    setIsExtendFloatMenu,
  } = useContext(YoutubeCloneContext);
  const handleOnMenuIconClick = useCallback(() => {
    setIsExtendFloatMenu(false);
  }, [setIsExtendFloatMenu]);
  return (
    <>
      <HeaderContainer themeType={themeType}>
        <div
          role="presentation"
          className="header-container__icon-wrapper"
          onClick={handleOnMenuIconClick}
        >
          <HamburgerMenuIcon themeType={themeType} />
        </div>
        <YoutubeLogo themeType={themeType} />
      </HeaderContainer>
    </>
  );
};

export default FloatSideBarMenu;