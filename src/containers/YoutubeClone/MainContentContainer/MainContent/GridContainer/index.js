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

const Container = styled.div`
  ${(props) => {
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_XL, breakpoints)) {
      return `
        width: 1284px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_LG, breakpoints)) {
      return `
        width: 1070px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_MD, breakpoints)) {
      return `
        width: 856px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_SM, breakpoints)) {
      return `
        width: 642px;
      `;
    }
    if (props.mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_XS, breakpoints)) {
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
