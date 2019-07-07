import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const SearchBar = ({
  themeType,
}) => (
  <SearchBarContainer themeType={themeType}>
    <div className="search-bar__search-input-box-wrapper">
      <input placeholder="搜尋" className="search-bar__search-input-box" />
    </div>
    <div className="search-bar__button-wrapper">
      <i className="fas fa-search search-bar__search-icon" />
    </div>
  </SearchBarContainer>
);

SearchBar.propTypes = {
  themeType: PropTypes.string,
};

SearchBar.default = {
  themeType: 'lightTheme',
};

export default SearchBar;
