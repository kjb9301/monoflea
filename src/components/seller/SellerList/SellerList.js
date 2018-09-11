import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';


const cx = classNames.bind(styles)

const SellerItem = ({user, sellerCategory, seller_desc,profile_img, id, onModal,detailData}) =>{
  return (
    <figure onClick = {() => {onModal()
                              detailData(id)}}>
      <img src = {profile_img}/>
        <figcaption> 
          <p>닉네임  : {user} </p>
          <div>
            분야 :  {sellerCategory} <br/>  
            {seller_desc}
          </div>
      </figcaption>
    </figure>
  );
};

const SellerList = ({sellerList, onModal,detailData}) =>{
  const sellerlist  = sellerList.map(
    (seller) => {
      const { seller_id, user, sellerCategory, seller_desc, profile_img} = seller;
      return(
        <SellerItem
          key = {seller_id}
          id = {seller_id}
          user = {user.nickName}
          sellerCategory ={sellerCategory.category_ko}
          seller_desc = {seller_desc}
          profile_img = {profile_img}
          onModal = { onModal }
          detailData = {detailData}
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