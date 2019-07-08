import styled from 'styled-components';

export const IconButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme[props.themeType].navbar.iconColor};
  font-size: 20px;
`;

export const AvatarWrapper = styled.div`
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
