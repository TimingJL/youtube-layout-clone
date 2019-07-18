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
  handleSetIsNavSearchBar,
}) => (
  <>
    <InputSearchBarWrapper>
      <InputSearchBar />
    </InputSearchBarWrapper>
    <SearchBarIcon handleOnClick={handleSetIsNavSearchBar} />
  </>
);

SearchBar.propTypes = {
  handleSetIsNavSearchBar: PropTypes.func,
};

SearchBar.default = {
  handleSetIsNavSearchBar: () => {},
};

export default SearchBar;
