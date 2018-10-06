import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageWrapper.scss';
import MyPageHeader from 'components/mypage/MyPageHeader';
import MyPageContentsWrapper from 'components/mypage/MyPageContentsWrapper';
import MyPageNavContainer from 'containers/mypage/MyPageNavContainer';
const cx = classNames.bind(styles);

const MypageWrapper = () => {
  return (
    <div className = {cx("total-wrapper")}> 
      <MyPageHeader/>
      <MyPageNavContainer/>
      <MyPageContentsWrapper/>
    </div>
  )
}

export default MypageWrapper;