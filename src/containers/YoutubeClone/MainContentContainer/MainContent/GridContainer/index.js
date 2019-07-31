import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowContent from './RowContent';

const Container = styled.div`
  ${(props) => {
    if (props.mainContentWidth > 1070) {
      return `
        width: 1070px;
      `;
    }
    if (props.mainContentWidth > 957) {
      return `
        width: 856px;
      `;
    }
    if (props.mainContentWidth > 670) {
      return `
        width: 642px;
      `;
    }
    if (props.mainContentWidth > 457) {
      return `
        width: 428px;
      `;
    }
    return `
      width: 100%;
    `;
  }}
`;

const GridContainer = ({
  mainContentWidth,
}) => (
  <Container mainContentWidth={mainContentWidth}>
    <RowContent mainContentWidth={mainContentWidth} />
    <RowContent mainContentWidth={mainContentWidth} />
    <RowContent mainContentWidth={mainContentWidth} />
  </Container>
);

GridContainer.propTypes = {
  mainContentWidth: PropTypes.number,
};

GridContainer.defaultProps = {
  mainContentWidth: 0,
};

export default GridContainer;
