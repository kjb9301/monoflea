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
    <div className = {cx('seller-list')}>
      <img alt = "img" src = {profile_img} />
      <div className={cx('seller-body')} onClick = {() => {onModal()
                                    detailData(id)
                                  }}> 
        <div>닉네임  : {user} </div>
        <div>분야 :  {sellerCategory}</div>
        <div className={cx('seller-desc')}>{seller_desc}</div>
      </div>
      <Like onLike ={()=> {onLike(id,seller,likeOn)}  } like_cnt = {sellerLikeCnt} likeOn = {likeOn}/>
    </div>

    // <figure >
    //   <img alt = "img" src = {profile_img} />
    //     <figcaption onClick = {() => {onModal()
    //                                   detailData(id)
    //                                 }}> 
    //       <div>
    //         <p>닉네임  : {user} </p>
    //         <div>
    //           분야 :  {sellerCategory} <br/>  
    //           {seller_desc}
    //           </div>
    //       </div>
    //   </figcaption>
    //   <Like onLike ={()=> {onLike(id,seller,likeOn)}  } like_cnt = {sellerLikeCnt} likeOn = {likeOn}/>
    // </figure>
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
    <div className = {cx('seller-wrapper')}>
      {sellerlist}
    </div>
  )
}
export default SellerList;