import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerWrapper.scss';
import SellersListContainer from '../../../containers/seller/SellersListContainer';
import CategoryButton from '../../../containers/seller/CategoryButton';
import SellerOneData from '../../../containers/seller/SellerOneData';
import LoginedSellerDetailContainer from '../../../containers/seller/LoginedSellerDetailContainer';

const cx = classNames.bind(styles)

const SellerWrapper = () =>{

  return (
    <div className = {cx('wrapper')}>
      <div className = {cx('btns')}><CategoryButton/> <SellerOneData/></div>
      <LoginedSellerDetailContainer/>
      <div className = {cx('sellers-list')}><SellersListContainer/></div>
    </div>
  )
}

export default SellerWrapper;