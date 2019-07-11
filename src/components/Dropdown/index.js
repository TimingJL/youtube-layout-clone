/* eslint-disable no-undef */
import React, {
  useCallback, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { findAttributeInEvent } from 'utils/event';

const DATA_COMPONENT = 'dropdown-menu';

const DropdownMenu = styled.div`
  position: absolute;
  width: 100px;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const Dropdown = ({
  menu,
  children,
  customStyle,
}) => {
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
  }, []);

  return (
    <DropdownContainer data-component={DATA_COMPONENT}>
      <div role="presentation" onClick={handleOnContentClick}>
        {children}
      </div>
      <DropdownMenu style={customStyle} isVisible={isVisible}>
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
