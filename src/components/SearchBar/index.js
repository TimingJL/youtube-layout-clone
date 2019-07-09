import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { down } from 'components/BreakPoints';
import {
  BREAK_POINT_SM,
} from 'Styled/Settings/constants';

import SearchBarIcon from './SearchBarButton';
import InputSearchBar from './InputSearchBar';

const InputSearchBarWrapper = styled.div`
  margin: 0px 40px;
  flex: 1 1 auto;
  ${down(BREAK_POINT_SM)} {
    display: none;
  }
`;

const SearchBar = ({
  themeType,
  handleSetIsNavSearchBar,
}) => (
  <>
    <InputSearchBarWrapper>
      <InputSearchBar themeType={themeType} />
    </InputSearchBarWrapper>
    <SearchBarIcon themeType={themeType} handleOnClick={handleSetIsNavSearchBar} />
  </>
);

SearchBar.propTypes = {
  themeType: PropTypes.string,
  handleSetIsNavSearchBar: PropTypes.func,
};

SearchBar.default = {
  themeType: 'lightTheme',
  handleSetIsNavSearchBar: () => {},
};

export default SearchBar;
