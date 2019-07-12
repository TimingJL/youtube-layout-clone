/* eslint-disable no-undef */
import React, {
  useCallback, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { findAttributeInEvent } from 'utils/event';
import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

const DATA_COMPONENT = 'dropdown-menu';

const DropdownMenu = styled.div`
  position: absolute;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background: ${(props) => props.theme[props.themeType].dropdown.background};
  box-shadow: 0 16px 24px 2px #00000024, 0 6px 30px 5px #0000001f, 0 8px 10px -5px #0006;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const Dropdown = ({
  menu,
  children,
  customStyle,
}) => {
  const {
    themeType,
  } = useContext(YoutubeCloneContext);
  const [isVisible, setIsVisible] = useState(false);
  const handleOnContentClick = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);
  const handleOnClickOutside = useCallback((event) => {
    const dataComponent = findAttributeInEvent(event, 'data-component');
    if (!dataComponent) {
      setIsVisible(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener('click', handleOnClickOutside);
    return () => {
      document.removeEventListener('click', handleOnClickOutside);
    };
  }, [handleOnClickOutside]);

  return (
    <DropdownContainer data-component={DATA_COMPONENT}>
      <div role="presentation" onClick={handleOnContentClick}>
        {children}
      </div>
      <DropdownMenu style={customStyle} isVisible={isVisible} themeType={themeType}>
        {menu}
      </DropdownMenu>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  menu: PropTypes.element,
  children: PropTypes.element,
  customStyle: PropTypes.object,
};

Dropdown.defaultProps = {
  menu: null,
  children: null,
  customStyle: {},
};

export default Dropdown;
