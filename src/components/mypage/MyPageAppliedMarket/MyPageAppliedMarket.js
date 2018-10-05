import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageAppliedMarket.scss';

const cx = classNames.bind(styles);

const MyPageAppliedMarket = () => {
  return (
    <div className = {cx('detail-info-wrapper')}>
      <div className = {cx('detail-info')}>
      <div className = {cx("item-reg")}>2018-10-01 ~ 2018.10.07</div>
        <div className = {cx("item-host")}> </div>
        <div className = {cx("item-like_cnt")}> 좋아요 : 10개</div>
        <div className = {cx("item-category")}>카테고리 : 생활</div>
        <div className = {cx("item-price")}> 가격 : 1,000,000원 </div>
      </div>
    </div>
  )
}

export default MyPageAppliedMarket;