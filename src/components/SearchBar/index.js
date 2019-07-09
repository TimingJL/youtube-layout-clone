import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { down, up, only } from 'components/BreakPoints';
import { NavIconButton } from 'components/NavIconButton';
import {
  BREAK_POINT_SM,
} from 'Styled/Settings/constants';


const SearchBarIcon = styled(NavIconButton)`
  ${up(BREAK_POINT_SM)} {
    display: none;
  }
  ${only(BREAK_POINT_SM)} {
    display: flex;
  }
`;

const SearchBarContainer = styled.div`
  margin: 0px 40px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  .search-bar__button-wrapper {
    background: ${(props) => props.theme[props.themeType].navbar.buttonBackground};
    width: 65px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme[props.themeType].navbar.inputBoxBorderColor};
    border-radius: 0px 2px 2px 0px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme[props.themeType].navbar.buttonHoverBackground};
      color: ${(props) => props.theme[props.themeType].navbar.color};
    }
  }
  .search-bar__search-input-box-wrapper {
    display: flex;
    align-items: center;
    padding: 0px 6px;
    background: ${(props) => props.theme[props.themeType].navbar.inputBoxBackgroundColor};
    height: 100%;
    width: 100%;
    max-width: 575px;
    border: 1px solid ${(props) => props.theme[props.themeType].navbar.inputBoxBorderColor};
    border-right: none;
    border-radius: 2px 0px 0px 2px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
  }
  .search-bar__search-input-box {
    border: none;
    outline: none;
    background: ${(props) => props.theme[props.themeType].navbar.inputBoxBackgroundColor};
    width: 100%;
    font-size: 16px;
    color: ${(props) => props.theme[props.themeType].navbar.color};
  }
  .search-bar__search-icon {
    color: ${(props) => `${props.theme[props.themeType].navbar.iconColor}80`};
  }

  ${down(BREAK_POINT_SM)} {
    display: none;
  }
`;

const SearchBar = ({
  themeType,
}) => (
  <>
    <SearchBarContainer themeType={themeType}>
      <div className="search-bar__search-input-box-wrapper">
        <input placeholder="搜尋" className="search-bar__search-input-box" />
      </div>
      <div className="search-bar__button-wrapper">
        <i className="fas fa-search search-bar__search-icon" />
      </div>
    </SearchBarContainer>
    <SearchBarIcon themeType={themeType}>
      <i className="fas fa-search" />
    </SearchBarIcon>
  </>
);

SearchBar.propTypes = {
  themeType: PropTypes.string,
};

SearchBar.default = {
  themeType: 'lightTheme',
};

export default SearchBar;
