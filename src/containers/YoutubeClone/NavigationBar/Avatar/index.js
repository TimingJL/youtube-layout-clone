import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from 'components/Dropdown';
import { AVATAR_URL } from 'containers/YoutubeClone/NavigationBar/constants';
import MenuContent from './MenuContent';

const customStyle = {
  right: '0px',
  width: '300px',
  height: '642px',
};

const AvatarWrapper = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .avatar__image {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const Avatar = ({
  themeType,
}) => (
  <Dropdown
    id="Avatar"
    menu={<MenuContent themeType={themeType} />}
    customStyle={customStyle}
  >
    <AvatarWrapper>
      <img className="avatar__image" src={AVATAR_URL} alt="" />
    </AvatarWrapper>
  </Dropdown>
);

Avatar.propTypes = {
  themeType: PropTypes.string,
};

Avatar.defaultProps = {
  themeType: 'lightTheme',
};

export default Avatar;
