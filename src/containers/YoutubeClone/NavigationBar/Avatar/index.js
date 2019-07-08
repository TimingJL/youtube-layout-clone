import React from 'react';
import {
  AvatarWrapper,
} from '../Styled';

const AVATAR_URL = 'https://avatars0.githubusercontent.com/u/5562039?s=460&v=4';

const Avatar = () => (
  <AvatarWrapper>
    <img className="avatar__image" src={AVATAR_URL} alt="" />
  </AvatarWrapper>
);

export default Avatar;
