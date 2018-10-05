import React from 'react';
import classNames  from 'classnames/bind';
import styles from './MyPageItemWrapper.scss';
import MyPageAppliedMarket from '../MyPageAppliedMarket/MyPageAppliedMarket';

const cx = classNames.bind(styles);

const MyPageItemWrapper = () => {
  return (
    <div className = {cx('item-wrapper')}>
      <div className = {cx('item-image')}></div>
      <div className = {cx('item-detail')}>
          <div className = {cx('item-title')}><h1>좀찍혀보라</h1></div>
          {/* <div className = {cx('detail-info-wrapper')}>
            
          </div> */}
          <MyPageAppliedMarket/>
      </div>
    </div>
  )
}
export default MyPageItemWrapper;