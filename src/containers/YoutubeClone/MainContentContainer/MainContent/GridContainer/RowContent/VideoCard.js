import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getRandom } from 'utils/sampling';

const VideoCardContainer = styled.div`
  .video-card__card-image {
    background: url(${(props) => props.thumbnail});
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
  channelTitle,
}) => {
  const { t } = useTranslation('mainContent');
  // debugger;
  return (
    <VideoCardContainer thumbnail={data.get('thumbnail')}>
      <div className="video-card__card-image" />
      <div className="video-card__card-title">
        {data.get('title').substr(0, 25)}
        <span>...</span>
      </div>
      <div className="video-card__card-owner">{channelTitle}</div>
      <div className="video-card__card-owner">
        {t('view', { count: getRandom(100, 9999) })}
        {' '}
        -
        {' '}
        {t('day', { count: getRandom(1, 20) })}
      </div>
    </VideoCardContainer>
  );
};

VideoCard.propTypes = {
  data: PropTypes.any,
  channelTitle: PropTypes.string,
};

VideoCard.defaultProps = {
  data: '',
  channelTitle: '',
};

export default VideoCard;
