import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const UploadLive = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <i className="fas fa-video" />
  </NavIconButton>
);

UploadLive.propTypes = {
  themeType: PropTypes.string,
};

UploadLive.defaultProps = {
  themeType: 'lightTheme',
};

export default UploadLive;
