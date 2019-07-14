import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { findAttributeInEvent } from 'utils/event';
import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';
import { AVATAR_URL } from 'containers/YoutubeClone/NavigationBar/constants';
import {
  themeOptions,
} from 'Styled/Settings/constants';

const themeSwitchIconAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const setOptionStyle = (optionId, themeType) => (optionId === themeType ? ' active' : '');

const MenuContentContainer = styled.div`
  .menu-content__profile-wrapper {
    padding: 16px;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme[props.themeType].dropdown.borderColor};
  }
  .menu-content__profile-avatar-image {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 16px;
  }
  .menu-content__profile-name {
    font-size: 16px;
    font-weight: 600;
  }
  .menu-content__profile-email {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5rem;
  }
  .menu-content__profile-management {
    font-size: 14px;
    color: #3ea6ff;
    margin: 8px 0px;
    font-weight: 500;
    cursor: pointer;
  }

  .menu-content__theme-switch-wrapper {
    font-size: 14px;
    padding: 8px 0px;
    border-bottom: 1px solid ${(props) => props.theme[props.themeType].dropdown.borderColor};
  }
  .menu-content__theme-switch-item {
    display: flex;
    align-items: center;
    line-height: 40px;
    font-size: 16px;
    color: ${(props) => props.theme[props.themeType].dropdown.iconColor};
    &.subject {
      color: ${(props) => props.theme[props.themeType].dropdown.iconColor};
      font-weight: 600;
    }
    &.option {
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme[props.themeType].dropdown.itemHoverBackground};
      }
    }
    &.active {
      color: ${(props) => props.theme[props.themeType].dropdown.color};
    }
  }
  .menu-content__theme-switch-icon {
    margin: 0px 16px;
    font-size: 20px;
    width: 24px;
    text-align: center;
    visibility: hidden;
    &.subject {
      color: ${(props) => props.theme[props.themeType].dropdown.iconColor};
      visibility: visible;
    }
    &.option {
      font-size: 16px;
    }
    &.active {
      visibility: visible;
      animation: ${themeSwitchIconAnimation} 0.2s ease-in-out;
    }
  }
`;

const MenuContent = ({
  themeType,
}) => {
  const {
    setThemeType,
  } = useContext(YoutubeCloneContext);
  const handleOnThemeClick = useCallback((event) => {
    const selectedThemeOption = findAttributeInEvent(event, 'data-theme-option');
    setThemeType(selectedThemeOption);
  }, [setThemeType]);
  return (
    <MenuContentContainer themeType={themeType}>
      <div className="menu-content__profile-wrapper">
        <img className="menu-content__profile-avatar-image" src={AVATAR_URL} alt="" />
        <div>
          <div className="menu-content__profile-name">陳泰銘</div>
          <div className="menu-content__profile-email">eefozeo@gmail.com</div>
          <div className="menu-content__profile-management">管理你的 Google 帳戶</div>
        </div>
      </div>
      <div className="menu-content__theme-switch-wrapper">
        <div className="menu-content__theme-switch-item subject">
          <i className="fas fa-sun menu-content__theme-switch-icon subject" />
          <div>自訂主題</div>
        </div>
        {
          themeOptions.map((option) => (
            <div
              role="presentation"
              key={option.id}
              data-theme-option={option.id}
              className={`menu-content__theme-switch-item option${setOptionStyle(option.id, themeType)}`}
              onClick={handleOnThemeClick}
            >
              <i className={`fas fa-check menu-content__theme-switch-icon option${setOptionStyle(option.id, themeType)}`} />
              <div className="menu-content__theme-switch-title">{option.name}</div>
            </div>
          ))
        }
      </div>
    </MenuContentContainer>
  );
};

MenuContent.propTypes = {
  themeType: PropTypes.string,
};

MenuContent.defaultProps = {
  themeType: 'lightTheme',
};

export default MenuContent;
