import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';


const cx = classNames.bind(styles)

const SellerItem = ({user, sellerCategory, seller_desc, profile_img, id, onModal}) =>{
  return (
    <div className = {cx('seller-item')} onClick = {() => onModal(id)}>
      <div className = {cx('seller-item-top')}>
        <img className = {cx('seller-img')} src= {profile_img}/>
      </div>
      <div className = {cx('seller-item-bottom')}>
        <div className = {cx('bot-inner-top')}>
          <p className = {cx('item-left')}>
            닉네임 {user.nickName}
          </p>
        </div>
        <div className = {cx('bot-inner-bot')}>
          <div className = {cx('item-left')}>
            <p className = {cx('block-to-inline')}>분야  : {sellerCategory.category_ko}</p><br/>
          </div>
          <p>
            셀러소개 : {seller_desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const SellerList = ({sellers, onModal}) =>{
  const sellerlist  = sellers.map(
    (seller) => {
      const { seller_id, user, sellerCategory, seller_desc, profile_img} = seller;
      
      return(
        <SellerItem
          key = {seller_id}
          id = {seller_id}
          user = {user}
          sellerCategory ={sellerCategory}
          seller_desc = {seller_desc}
          profile_img = {profile_img}
          onModal = { onModal }
        />
      )
    }
  );
  return (
    <div className = {cx('wrapper')}>
      {sellerlist}
    </div>
  )
}
export default SellerList;