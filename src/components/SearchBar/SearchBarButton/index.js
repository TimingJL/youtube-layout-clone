import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up, only } from 'components/BreakPoints';
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

const SearchBarButton = ({
  handleOnClick,
}) => (
  <SearchBarIcon onClick={handleOnClick}>
    <i className="fas fa-search" />
  </SearchBarIcon>
);

SearchBarButton.propTypes = {
  handleOnClick: PropTypes.func,
};

SearchBarButton.default = {
  handleOnClick: () => {},
};

export default SearchBarButton;
