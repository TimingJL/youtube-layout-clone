import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '../Styled';

const UploadLive = ({
  themeType,
}) => (
  <IconButton themeType={themeType}>
    <i className="fas fa-video" />
  </IconButton>
);

UploadLive.propTypes = {
  themeType: PropTypes.string,
};

UploadLive.defaultProps = {
  themeType: 'lightTheme',
};

export default UploadLive;
