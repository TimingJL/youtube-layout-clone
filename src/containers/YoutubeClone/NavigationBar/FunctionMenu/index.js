import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '../Styled';

const FunctionMenu = ({
  themeType,
}) => (
  <IconButton themeType={themeType}>
    <i className="fas fa-th" />
  </IconButton>
);

FunctionMenu.propTypes = {
  themeType: PropTypes.string,
};

FunctionMenu.defaultProps = {
  themeType: 'lightTheme',
};

export default FunctionMenu;
