import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  BREAK_POINT_GRID_XS,
  BREAK_POINT_GRID_SM,
  BREAK_POINT_GRID_MD,
  BREAK_POINT_GRID_LG,
  BREAK_POINT_GRID_XL,
  breakpoints,
} from 'Styled/Settings/constants';
import {
  getBreakPointValue,
} from 'Styled/Settings/utils';

import LoaderIcon from 'components/LoaderIcon';
import RowContent from './RowContent';

const containerWidth = {
  xl: 1284,
  lg: 1070,
  md: 856,
  sm: 642,
  xs: 428,
};

const Container = styled.div`
  ${(props) => {
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_XL, breakpoints)) {
      return `
        width: ${containerWidth.xl}px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_LG, breakpoints)) {
      return `
        width: ${containerWidth.lg}px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_MD, breakpoints)) {
      return `
        width: ${containerWidth.md}px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_SM, breakpoints)) {
      return `
        width: ${containerWidth.sm}px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_XS, breakpoints)) {
      return `
        width: ${containerWidth.xs}px;
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
        dataSource.map((data, index) => {
          const madeKey = `${data.get('id')}-${index}`;
          return (
            <RowContent
              key={madeKey}
              mainContentWidth={mainContentWidth}
              data={data}
            />
          );
        })
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
