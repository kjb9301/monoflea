import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';
import { GoHeart } from "react-icons/go";
import Like from 'components/common/Like'

const cx = classNames.bind(styles)

const SellerItem = ({user, sellerCategory, seller_desc,profile_img, id, 
                    onModal,detailData, onLike,sellerLikeCnt,seller}) =>{
  let likeOn = seller.seller_likes.length > 0 ? true : false
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
      </figcaption>
      <Like onLike ={()=> {onLike(id,seller,likeOn)}  } like_cnt = {sellerLikeCnt} likeOn = {likeOn}/>
    </figure>
  );
};

const SellerList = ({sellerList, onModal,detailData,UILikeCnt, onLike, getLoginData, }) =>{
  const sellerlist  = sellerList.map(
    (seller) => {
      const { seller_id, user, sellerCategory, seller_desc, profile_img, like_cnt} = seller;
      return(
        
        <SellerItem
          seller = {seller}
          key = {seller_id}
          id = {seller_id}
          user = {user.nickName}
          sellerCategory ={sellerCategory.category_ko}
          seller_desc = {seller_desc}
          profile_img = {profile_img}
          onModal = { onModal }
          detailData = {detailData}
          // UILikeCnt = { UILikeCnt }
          sellerLikeCnt = {like_cnt}
          onLike = {onLike}
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