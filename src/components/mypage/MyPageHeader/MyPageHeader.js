import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageHeader.scss';

const cx = classNames.bind(styles);

const MyPageHeader = () => {
  return (
    <div className = {cx("header")}>
      <img className = {cx("header-image")}src = "http://getwallpapers.com/wallpaper/full/b/3/d/770013-download-free-rainy-day-background-1920x1080.jpg"/>
      <div className = {cx("profile-image-container")}>
        <img className = {cx("profile-image")}src = "http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" /> 
      </div>
      <div className = {cx("nickName")}>nickName : user63</div>
    </div>
  )
}

export default MyPageHeader;