import React from 'react';
import styled from 'styled-components';

const RowContentContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.mainContent.borderColor};
  height: 313px;
  display: flex;
  flex-direction: column;
  .row-content__subject-info-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
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
    background: red;
    margin-right: 8px;
  }
  .row-content__card-wrapper {
    height: 240px;
    background: #eee;
  }
`;

const RowContent = () => (
  <RowContentContainer>
    <div className="row-content__subject-info-wrapper">
      <div className="row-content__subject-info-user">
        <div className="row-content__favicon" />
        <div>木曜4超玩</div>
      </div>
      <i className="fas fa-times row-content__subject-info-cancel-icon" />
    </div>
    <div className="row-content__card-wrapper">
      grid
    </div>
  </RowContentContainer>
);

export default RowContent;
