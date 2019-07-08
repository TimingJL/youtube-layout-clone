import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '../Styled';

const Message = ({
  themeType,
}) => (
  <IconButton themeType={themeType}>
    <i className="fas fa-comment-medical" />
  </IconButton>
);

Message.propTypes = {
  themeType: PropTypes.string,
};

Message.defaultProps = {
  themeType: 'lightTheme',
};

export default Message;
