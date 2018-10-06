import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageContentsWrapper.scss';
import MyPageItemWrapper from '../MyPageItemWrapper/MyPageItemWrapper';

const cx = classNames.bind(styles);
const MyPageContentsWrapper = () =>{
  return (
    <div className = {cx('wrapper')}>
      <MyPageItemWrapper/>
    </div>
  )
}

export default MyPageContentsWrapper;