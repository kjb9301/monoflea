import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageWrapper.scss';
import MyPageHeader from 'components/mypage/MyPageHeader';
import MyPageNav from 'components/mypage/MyPageNav';
const cx = classNames.bind(styles);

const MypageWrapper = () => {
  return (
    <div className = {cx("total-wrapper")}> 
      <MyPageHeader/>
      <MyPageNav/>
    </div>
  )
}

export default MypageWrapper;