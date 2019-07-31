import React from 'react';
import styled from 'styled-components';

const LoaderIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
`;

const LoaderIcon = () => (
  <LoaderIconContainer>
    <i className="fa fa-circle-o-notch fa-spin fa-fw" />
  </LoaderIconContainer>
);

export default LoaderIcon;
