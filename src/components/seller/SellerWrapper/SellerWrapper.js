import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerWrapper.scss';
import SellersListContainer from 'containers/seller/SellersListContainer';
import SellerOneData from 'containers/seller/SellerOneData';

const cx = classNames.bind(styles)

const SellerWrapper = () =>{
  return (
    <div className={cx('wrapper')}>
      <div className={cx('seller-header')}>
        <div className = {cx('seller-sub-wrapper')}>
          <div className = {cx('seller-title')}>셀러정보</div>
          <div className={cx('seller-sub')}><br/>"플리마켓에 생명력을 불어 넣어줄 순수 예술 창작 활동가들을 모노플리에서 미리 만나보세요."</div>
        </div>
      </div>
      <div className = {cx('btns')}>
        <div className={cx('btns-link')}>
          <SellerOneData/>
        </div>
      </div>
      <div className={cx('sellerlist-wrap')}><SellersListContainer/></div>
    </div>
  )
}

export default SellerWrapper;