import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputSearchBar from 'components/SearchBar/InputSearchBar';
import BackButton from './BackButton';

const NavSearchBarContainer = styled.div`
  padding: 0px 8px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const BackButtonContainer = styled.div`
  margin-right: 8px;
`;

const NavSearchBar = ({
  handleSetIsNavSearchBar,
}) => (
  <NavSearchBarContainer>
    <BackButtonContainer onClick={handleSetIsNavSearchBar}>
      <BackButton />
    </BackButtonContainer>
    <InputSearchBar />
  </NavSearchBarContainer>
);

NavSearchBar.propTypes = {
  handleSetIsNavSearchBar: PropTypes.func,
};

NavSearchBar.default = {
  handleSetIsNavSearchBar: () => {},
};

export default NavSearchBar;
