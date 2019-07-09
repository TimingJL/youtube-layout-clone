import React from 'react';
import styled from 'styled-components';

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/5562039?s=460&v=4';

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

const Avatar = () => (
  <AvatarWrapper>
    <img className="avatar__image" src={AVATAR_URL} alt="" />
  </AvatarWrapper>
);

export default Avatar;
