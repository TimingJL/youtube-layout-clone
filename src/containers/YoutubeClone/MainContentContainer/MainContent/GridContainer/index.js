import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoaderIcon from 'components/LoaderIcon';
import RowContent from './RowContent';

const Container = styled.div`
  ${(props) => {
    if (props.mainContentWidth > 1312) {
      return `
        width: 1284px;
      `;
    }
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
  isLoading,
  dataSource,
}) => (
  <Container mainContentWidth={mainContentWidth}>
    {
      dataSource.map((item) => (
        <RowContent key={item} mainContentWidth={mainContentWidth} />
      ))
    }
    {isLoading && <LoaderIcon />}
  </Container>
);

GridContainer.propTypes = {
  mainContentWidth: PropTypes.number,
  dataSource: PropTypes.any,
  isLoading: PropTypes.bool,
};

GridContainer.defaultProps = {
  mainContentWidth: 0,
  isLoading: false,
};

export default GridContainer;
