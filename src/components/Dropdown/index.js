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
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background: ${(props) => props.theme.dropdown.background};
  box-shadow: 0 16px 24px 2px #00000024, 0 6px 30px 5px #0000001f, 0 8px 10px -5px #0006;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const Dropdown = ({
  id,
  menu,
  children,
  customStyle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const dataComponent = `${id}-${DATA_COMPONENT}`;
  const handleOnContentClick = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);
  const handleOnClickOutside = useCallback((event) => {
    if (findAttributeInEvent(event, 'data-component') !== dataComponent) {
      setIsVisible(false);
    }
  }, [dataComponent]);
  useEffect(() => {
    document.addEventListener('click', handleOnClickOutside);
    return () => {
      document.removeEventListener('click', handleOnClickOutside);
    };
  }, [handleOnClickOutside]);

  return (
    <DropdownContainer data-component={`${id}-${DATA_COMPONENT}`}>
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
  id: PropTypes.string,
  menu: PropTypes.element,
  children: PropTypes.element,
  customStyle: PropTypes.object,
};

Dropdown.defaultProps = {
  id: '',
  menu: null,
  children: null,
  customStyle: {},
};

export default Dropdown;
