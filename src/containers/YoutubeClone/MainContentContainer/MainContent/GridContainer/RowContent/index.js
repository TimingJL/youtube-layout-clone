import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { findAttributeInEvent } from 'utils/event';

const getTranslateX = (mainContentWidth) => {
  if (mainContentWidth > 1312) {
    return 0;
  }
  if (mainContentWidth > 1070) {
    return -214;
  }
  if (mainContentWidth > 957) {
    return -424;
  }
  if (mainContentWidth > 670) {
    return -640;
  }
  if (mainContentWidth > 457) {
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
  .row-content__subject-info-cancel-icon {
    width: 24px;
    font-size: 24px;
    cursor: pointer;
    color: #909090;
  }
  .row-content__favicon {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: url('https://yt3.ggpht.com/a/AGF-l7_G59IlWRNJQR0KcfTu5xzr4yHF8YxeYUedjA=s240-mo-c-c0xffffffff-rj-k-no');
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

  .row-content__card {
    /* background: white; */
  }
  .row-content__card-image {
    background: url('https://i.ytimg.com/vi/7OOrJESdggk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGj91hnIV_XBDNtv8wPhoYvywdYg');
    background-size: cover;
    width: 210px;
    height: 117px;
  }
  .row-content__card-title {
    font-size: 14px;
    font-weight: 900;
    padding: 10px 0px;
    padding-right: 24px;
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
  mainContentWidth,
}) => {
  const [caret, setCaret] = useState('left');
  const [translateX, setTranslateX] = useState(0);
  const handleOnClickCaret = useCallback((event) => {
    const dataCaretType = findAttributeInEvent(event, 'data-caret-type');
    setCaret(dataCaretType);
    setTranslateX(getTranslateX(mainContentWidth));
  }, [mainContentWidth]);
  const cards = new Array(6).fill(0).map((item, index) => index);

  return (
    <RowContentContainer caret={caret} translateX={translateX}>
      <div className="row-content__subject-info-wrapper">
        <div className="row-content__subject-info-user">
          <div className="row-content__favicon" />
          <div>木曜4超玩</div>
        </div>
        <i className="fas fa-times row-content__subject-info-cancel-icon" />
      </div>
      <div className="row-content__content-wrapper">
        <div className="row-content__card-wrapper">
          {
            cards.map((card) => (
              <div key={card} className="row-content__card">
                <div className="row-content__card-image" />
                <div className="row-content__card-title">
                  {card}
                  《一日系列第一百零九集》史上最離奇!!YouBike修到一半主...
                </div>
              </div>
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
  mainContentWidth: PropTypes.number,
};

RowContent.defaultProps = {
  mainContentWidth: 0,
};

export default RowContent;
