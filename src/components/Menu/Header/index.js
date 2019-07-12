import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0px 16px;
  font-size: 16px;
  font-weight: 500;
  background: ${(props) => props.theme[props.themeType].dropdown.headerBackground};
  color: ${(props) => props.theme[props.themeType].dropdown.iconColor};
  .header__title {
    color: ${(props) => props.theme[props.themeType].dropdown.color};
  }
  .header__button {
    font-size: 20px;
    cursor: pointer;
  }
`;

const Header = ({
  title,
  button,
}) => {
  const {
    themeType,
  } = useContext(YoutubeCloneContext);
  return (
    <HeaderContainer themeType={themeType}>
      <div className="header__title">{title}</div>
      <div className="header__button">
        {button}
      </div>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  button: PropTypes.any,
};

Header.defaultProps = {
  title: '',
  button: null,
};

export default Header;
