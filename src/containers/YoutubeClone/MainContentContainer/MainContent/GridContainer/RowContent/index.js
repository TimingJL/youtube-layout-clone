import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { findAttributeInEvent } from 'utils/event';
import { getSampling } from 'utils/sampling';
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
import VideoCard from './VideoCard';

const getTranslateX = (mainContentWidth) => {
  if (mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_XL, breakpoints)) {
    return 0;
  }
  if (mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_LG, breakpoints)) {
    return -214;
  }
  if (mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_MD, breakpoints)) {
    return -424;
  }
  if (mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_SM, breakpoints)) {
    return -640;
  }
  if (mainContentWidth > getBreakPointValue(BREAK_POINT_GRID_XS, breakpoints)) {
    return -853;
  }
  return -853;
};

const RowContentContainer = styled.div`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.mainContent.borderColor};
  height: 313px;
  display: flex;
  flex-direction: column;
  .row-content__subject-info-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 73px;
  }
  .row-content__subject-info-user {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
  }
  .row-content__operation-wrapper {
    display: flex;
    align-items: center;
  }
  .row-content__record-button {
    padding: 0px 15px;
    height: 40px;
    color: white;
    background: #cc0000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    margin: 0px 4px;
    border-radius: 3px;
  }
  .row-content__subject-info-cancel-icon {
    width: 40px;
    font-size: 24px;
    cursor: pointer;
    color: #909090;
    text-align: center;
  }
  .row-content__favicon {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: url(${(props) => props.favicon});
    background-size: cover;
    margin-right: 8px;
  }
  .row-content__content-wrapper {
    position: relative;
    overflow-x: hidden;
  }
  .row-content__card-wrapper {
    height: 240px;
    display: grid;
    grid-template-columns: repeat(6, 210px);
    grid-column-gap: 4px;
    right: 0px;
    transform: translateX(${(props) => (props.caret === 'right' ? props.translateX : 0)}px);
    transition: transform 0.2s ease-in-out;
  }

  .row-content__caret-wrapper {
    position: absolute;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    top: 36%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0,0,0,0.2);
    color: #909090;
    &.right {
      right: 0px;
      transform: translateX(50%);
    }
    &.left {
      left: 0px;
      transform: translateX(-50%);
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
      background: #eee;
      z-index: -1;
      transform: scale(0);
    }
    &:active {
      &:after {
        transform: scale(1);
        transition: 0.1s ease-in-out;
      }
    }
  }
`;

const RowContent = ({
  data,
  mainContentWidth,
}) => {
  const { t } = useTranslation('mainContent');
  const [caret, setCaret] = useState('left');
  const [translateX, setTranslateX] = useState(0);
  const handleOnClickCaret = useCallback((event) => {
    const dataCaretType = findAttributeInEvent(event, 'data-caret-type');
    setCaret(dataCaretType);
    setTranslateX(getTranslateX(mainContentWidth));
  }, [mainContentWidth]);
  const samplingList = getSampling(6, data.get('videoList').size);
  const cards = data.get('videoList')
    .filter((item, index) => samplingList.indexOf(index) > -1);
  const channelTitle = data.get('channelTitle');

  return (
    <RowContentContainer caret={caret} translateX={translateX} favicon={data.get('favicon')}>
      <div className="row-content__subject-info-wrapper">
        <div className="row-content__subject-info-user">
          <div className="row-content__favicon" />
          <div>{data.get('channelTitle')}</div>
        </div>
        <div className="row-content__operation-wrapper">
          <div className="row-content__record-button">
            <span>
              {t('subscribe')}
              (143w)
            </span>

          </div>
          <i className="fas fa-times row-content__subject-info-cancel-icon" />
        </div>
      </div>
      <div className="row-content__content-wrapper">
        <div className="row-content__card-wrapper">
          {
            cards.map((card) => (
              <VideoCard key={card} data={card} channelTitle={channelTitle} />
            ))
          }
        </div>
      </div>
      {
        (caret === 'right'
          ? <div role="presentation" data-caret-type="left" onClick={handleOnClickCaret} className="row-content__caret-wrapper left"><i className="fas fa-chevron-left" /></div>
          : <div role="presentation" data-caret-type="right" onClick={handleOnClickCaret} className="row-content__caret-wrapper right"><i className="fas fa-chevron-right" /></div>)
      }
    </RowContentContainer>
  );
};

RowContent.propTypes = {
  data: PropTypes.instanceOf(Map),
  mainContentWidth: PropTypes.number,
};

RowContent.defaultProps = {
  data: Map(),
  mainContentWidth: 0,
};

export default RowContent;
