import React from 'react';
import styled from 'styled-components';
import { fromJS } from 'immutable';
import { useTranslation } from 'react-i18next';
import Header from 'components/Menu/Header';

const PreviewImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 86px;
  height: 52px;
  margin: 0px 16px;
`;

const RowContainer = styled.div`
  display: flex;
  font-size: 14px;
  padding: 16px 16px 16px 0px;
  height: 80px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.dropdown.itemHoverBackground};
    .row-wrappper__menu-icon {
      display: flex;
    }
  }
  .row-wrappper__image {
    width: 48px;
    height: 48px;
    margin: 0px 16px;
    background-size: cover;
  }
  .row-wrappper__title-wrapper {
    width: 234px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .row-wrappper__title {
    font-weight: 500;
    line-height: 26px;
    color: ${(props) => props.theme.dropdown.color};
  }
  .row-wrappper__date {
    color: #606060;
    font-size: 13px;
    color: ${(props) => props.theme.dropdown.dateColor};
  }
  .row-wrappper__preview-image {
    width: 86px;
    margin: 0px 16px;
  }
  .row-wrappper__menu-icon-wrapper {
    width: 40px;
    padding: 6px 0px;
    display: flex;
    justify-content: center;
  }
  .row-wrappper__menu-icon {
    display: none;
    color: ${(props) => props.theme.dropdown.dateColor};
  }
`;

const IMGAE_URL = 'https://lh5.googleusercontent.com/-HxdAXDevCOM/AAAAAAAAAAI/AAAAAAAAAAA/cbt3vRJ_Bzc/s96-c-mo/photo.jpg';
const menuData = fromJS([
  {
    id: 0,
    imgUrl: IMGAE_URL,
    title: '六角學院上传了新视频：JavaScript 原型鍊與建構式',
    previewImage: 'https://i.ytimg.com/vi/wdlbWhlftAY/hqdefault.jpg',
    date: '2019年7月2日',
  },
  {
    id: 1,
    imgUrl: IMGAE_URL,
    title: '六角學院上传了新视频：設計師業界必備知識',
    previewImage: 'https://i.ytimg.com/vi/fvP0goBGpOw/hqdefault.jpg',
    date: '2019年6月25日',
  },
  {
    id: 2,
    imgUrl: IMGAE_URL,
    title: '六角學院上传了新视频：如何自學一項技能',
    previewImage: 'https://i.ytimg.com/vi/GinrIVgeXNs/hqdefault.jpg',
    date: '2019年6月24日',
  },
]);

const MenuContent = () => {
  const { t } = useTranslation('dropdown');
  return (
    <>
      <Header
        title={t('notifications')}
        button={<div className="fas fa-cog" />}
      />
      {
        menuData.map((data) => (
          <RowContainer key={data.get('id')}>
            <div>
              <img src={data.get('imgUrl')} className="row-wrappper__image" alt="" />
            </div>
            <div className="row-wrappper__title-wrapper">
              <div className="row-wrappper__title">{data.get('title')}</div>
              <div className="row-wrappper__date">{data.get('date')}</div>
            </div>
            <PreviewImage src={data.get('previewImage')} />
            <div className="row-wrappper__menu-icon-wrapper">
              <i className="fas fa-ellipsis-v row-wrappper__menu-icon" />
            </div>
          </RowContainer>
        ))
      }
    </>
  );
};

export default MenuContent;
