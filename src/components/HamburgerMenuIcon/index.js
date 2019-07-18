import React from 'react';
import styled from 'styled-components';
import { NavIconButton } from 'components/NavIconButton';

const IconStyle = styled.div`
  transform: scale(1.1, 0.8);
`;

const HamburgerMenuIcon = () => (
  <NavIconButton>
    <IconStyle className="fas fa-bars" />
  </NavIconButton>
);

export default HamburgerMenuIcon;
