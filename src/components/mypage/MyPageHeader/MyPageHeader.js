import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageHeader.scss';

const cx = classNames.bind(styles);

const MyPageHeader = ({nickName}) => {
  return (
    <div className = {cx("header")}>
      <div className = {cx("profile-image-container")}>
        <img className = {cx("profile-image")}src = "http://www.worldhotel.co.kr/main/img/avatar/avatar1.png" /> 
      </div>
      <div className = {cx("nickName")}>{nickName}</div>
    </div>
  )
}

export default MyPageHeader;