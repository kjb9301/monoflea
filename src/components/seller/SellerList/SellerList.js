import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';


const cx = classNames.bind(styles)

const SellerItem = ({nickname, category, sns, career, seller_desc, profile_img, }) =>{
  return (
    <div className = {cx('seller-item')}>
      <div className = {cx('seller-item-top')}>
        <img className = {cx('seller-img')} src= {profile_img}/>
      </div>
      <div className = {cx('seller-item-bottom')}>
        <div className = {cx('bot-inner-top')}>
          <p className = {cx('item-left')}>
            닉네임 {nickname}
          </p>
        </div>
        <div className = {cx('bot-inner-bot')}>
          <div className = {cx('item-left')}>
            <p className = {cx('block-to-inline')}>분야  : {category}</p><br/>
            <p className = {cx('block-to-inline')}>경력 : {career}년</p><br/>
            <p className = {cx('block-to-inline')}>facebook : {sns}</p><br/>
          </div>
          <p>
            셀러소개 : {seller_desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const SellerList = ({sellers}) =>{
  const sellerlist  = sellers.map(
    (seller) => {
      const { seller_id, nickname, category, category_id, sns, career, seller_desc, profile_img} = seller;
      
      return(
        <SellerItem
          key = {seller_id}
          nickname = {nickname}
          category ={category}
          category_id = {category_id}
          sns = {sns}
          career = {career}
          seller_desc = {seller_desc}
          profile_img = {profile_img}
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