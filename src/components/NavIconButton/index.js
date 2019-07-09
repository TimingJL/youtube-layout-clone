import styled from 'styled-components';

export const NavIconButton = styled.div`
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme[props.themeType].navbar.iconColor};
  font-size: 20px;
`;
