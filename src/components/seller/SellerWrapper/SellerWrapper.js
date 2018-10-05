import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerWrapper.scss';
import SellersListContainer from 'containers/seller/SellersListContainer';
import CategoryButton from 'containers/seller/CategoryButton';
import SellerOneData from 'containers/seller/SellerOneData';
import LoginedSellerDetailContainer from 'containers/seller/LoginedSellerDetailContainer';

const cx = classNames.bind(styles)

const SellerWrapper = () =>{
  return (
    <div className={cx('wrapper')}>
      <div className={cx('seller-header')}>
        <h1 className={cx('seller-title')}><span>Seller<br/></span><span className={cx('seller-subtitle')}>Information</span><br/><span className={cx('seller-title-name')}>셀러정보</span></h1>
        <p className={cx('seller-description')}>"플리마켓에 생명력을 불어 넣어줄<br/> 순수 예술 창작 활동가들을 <strong>모/노/플/리</strong>에서 미리 만나보세요."</p>
        <div className={cx('seller-category')}><CategoryButton/></div>
      </div>
      <div className = {cx('btns')}>
        <div className={cx('btns-link')}>
          <SellerOneData/>
        </div>
      </div>
      <SellersListContainer/>
      {/* <LoginedSellerDetailContainer/> */}
    </div>
  )
}

export default SellerWrapper;