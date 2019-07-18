import styled from 'styled-components';
import { RippleAnimationIcon } from 'components/RippleAnimationIcon';

export const NavIconButton = styled(RippleAnimationIcon)`
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.theme[props.themeType] ? props.theme[props.themeType].navbar.iconColor : '#606060')};
  font-size: 20px;
`;
