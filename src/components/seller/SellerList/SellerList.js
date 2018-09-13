import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';
import { GoHeart } from "react-icons/go";
import Like from 'components/common/Like'
import { SSL_OP_NO_TICKET } from 'constants';

const cx = classNames.bind(styles)

const SellerItem = ({user, sellerCategory, seller_desc,profile_img, id, onModal,detailData, likeUp, like_cnt ,isLogged}) =>{
  return (
    <figure >
      <img alt = "img" src = {profile_img} />
        <figcaption onClick = {() => {onModal()
                                      detailData(id)
                                    }}> 
          <p>닉네임  : {user} </p>
          <div>
            분야 :  {sellerCategory} <br/>  
            {seller_desc}
          </div>
          {/* <div className = {cx('like')}> <GoHeart onClick = {likeUp} className= {cx('heart')}  /> 좋아요 {like_cnt}개  </div> */}
      </figcaption>
    </figure>
  );
};

const SellerList = ({sellerList, onModal,detailData, handleLike, getLoginData}) =>{
  const sellerlist  = sellerList.map(
    (seller) => {
      const { seller_id, user, sellerCategory, seller_desc, profile_img, like_cnt} = seller;
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
          like_cnt = { like_cnt }
          likeUp = {handleLike}
          isLogged = {getLoginData}
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