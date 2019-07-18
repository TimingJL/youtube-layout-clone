import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0px 16px;
  font-size: 16px;
  font-weight: 500;
  background: ${(props) => props.theme.dropdown.headerBackground};
  color: ${(props) => props.theme.dropdown.iconColor};
  .header__title {
    color: ${(props) => props.theme.dropdown.color};
  }
  .header__button {
    font-size: 20px;
    cursor: pointer;
  }
`;

const Header = ({
  title,
  button,
}) => (
  <HeaderContainer>
    <div className="header__title">{title}</div>
    <div className="header__button">
      {button}
    </div>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string,
  button: PropTypes.any,
};

Header.defaultProps = {
  title: '',
  button: null,
};

export default Header;
