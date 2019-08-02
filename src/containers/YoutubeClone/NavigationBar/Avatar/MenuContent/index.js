import React, { useCallback, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { findAttributeInEvent } from 'utils/event';
import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';
import { AVATAR_URL } from 'containers/YoutubeClone/NavigationBar/constants';

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
    border-bottom: 1px solid ${(props) => props.theme.dropdown.borderColor};
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
    line-height: 20px;
  }

  .menu-content__theme-switch-wrapper {
    font-size: 14px;
    padding: 8px 0px;
    border-bottom: 1px solid ${(props) => props.theme.dropdown.borderColor};
  }
  .menu-content__theme-switch-item {
    display: flex;
    align-items: center;
    line-height: 40px;
    font-size: 16px;
    color: ${(props) => props.theme.dropdown.iconColor};
    &.subject {
      color: ${(props) => props.theme.dropdown.iconColor};
      font-weight: 600;
    }
    &.option {
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.dropdown.itemHoverBackground};
      }
    }
    &.active {
      color: ${(props) => props.theme.dropdown.color};
    }
  }
  .menu-content__theme-switch-icon {
    margin: 0px 16px;
    font-size: 20px;
    width: 24px;
    text-align: center;
    visibility: hidden;
    &.subject {
      color: ${(props) => props.theme.dropdown.iconColor};
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

const MenuContent = () => {
  const { t } = useTranslation('dropdown');
  const {
    themeType,
    themeOptions,
    setThemeType,
    languageOptions,
    language,
    handleSetLanguage,
  } = useContext(YoutubeCloneContext);
  const handleOnThemeClick = useCallback((event) => {
    const selectedThemeOption = findAttributeInEvent(event, 'data-theme-option');
    setThemeType(selectedThemeOption);
  }, [setThemeType]);

  const handleOnLanguageClick = useCallback((event) => {
    const selectedLanguageOption = findAttributeInEvent(event, 'data-language-option');
    handleSetLanguage(selectedLanguageOption);
  }, [handleSetLanguage]);

  return (
    <MenuContentContainer>
      <div className="menu-content__profile-wrapper">
        <img className="menu-content__profile-avatar-image" src={AVATAR_URL} alt="" />
        <div>
          <div className="menu-content__profile-name">陳泰銘</div>
          <div className="menu-content__profile-email">eefozeo@gmail.com</div>
          <div className="menu-content__profile-management">{t('manageYourAccount')}</div>
        </div>
      </div>
      <div className="menu-content__theme-switch-wrapper">
        <div className="menu-content__theme-switch-item subject">
          <i className="fas fa-sun menu-content__theme-switch-icon subject" />
          <div>{t('customTheme')}</div>
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

      <div className="menu-content__theme-switch-wrapper">
        <div className="menu-content__theme-switch-item subject">
          <i className="fas fa-language menu-content__theme-switch-icon subject" />
          <div>{t('language')}</div>
        </div>
        {
          languageOptions.map((option) => (
            <div
              role="presentation"
              key={option.id}
              data-language-option={option.id}
              className={`menu-content__theme-switch-item option${setOptionStyle(option.id, language)}`}
              onClick={handleOnLanguageClick}
            >
              <i className={`fas fa-check menu-content__theme-switch-icon option${setOptionStyle(option.id, language)}`} />
              <div className="menu-content__theme-switch-title">{option.name}</div>
            </div>
          ))
        }
      </div>
    </MenuContentContainer>
  );
};

export default MenuContent;
