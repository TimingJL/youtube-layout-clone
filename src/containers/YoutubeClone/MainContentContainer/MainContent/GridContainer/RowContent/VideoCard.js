import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoCardContainer = styled.div`
  .video-card__card-image {
    background: url('https://i.ytimg.com/vi/7OOrJESdggk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGj91hnIV_XBDNtv8wPhoYvywdYg');
    background-size: cover;
    width: 210px;
    height: 117px;
  }
  .video-card__card-title {
    font-size: 14px;
    font-weight: 900;
    padding: 10px 0px;
    padding-right: 24px;
  }
  .video-card__card-owner {
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => props.theme.mainContent.cardTextColor};
  }
`;

const VideoCard = ({
  data,
}) => (
  <VideoCardContainer>
    <div className="video-card__card-image" />
    <div className="video-card__card-title">
      {data}
    《一日系列第一百零九集》史上最離奇!!YouBike修到一半主...
    </div>
    <div className="video-card__card-owner">木曜4超玩</div>
    <div className="video-card__card-owner">觀看次數：93萬次 - 5 天前</div>
  </VideoCardContainer>
);

VideoCard.propTypes = {
  data: PropTypes.any,
};

VideoCard.defaultProps = {
  data: '',
};

export default VideoCard;
