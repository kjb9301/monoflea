import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageContentsWrapper.scss';
import MyPageItemContainer from 'containers/mypage/MyPageItemContainer';

const cx = classNames.bind(styles);
const MyPageContentsWrapper = () =>{
  return (
    <div className = {cx('wrapper')}>
        <MyPageItemContainer/>
    </div>
  )
}

export default MyPageContentsWrapper;