import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const Message = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <i className="fas fa-comment-medical" />
  </NavIconButton>
);

Message.propTypes = {
  themeType: PropTypes.string,
};

Message.defaultProps = {
  themeType: 'lightTheme',
};

export default Message;
