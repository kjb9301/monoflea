import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';
import Like from 'components/common/Like'

const cx = classNames.bind(styles)

const SellerItem = ({user, sellerCategory, seller_desc,profile_img, id, view_cnt,
                    onModal,  detailData, onLike, sellerLikeCnt, seller, offLike}) =>{
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
      <Like onLike = {onLike} offLike = {offLike} view_cnt = {view_cnt}
            likeOn = {likeOn} like_cnt = {sellerLikeCnt} id = {id}/>
    </div>
    );
};

const SellerList = ({sellerList, onModal,detailData, onLike, offLike }) =>{
  const sellerlist  = sellerList.map(
    (seller) => {
      const { seller_id, user, sellerCategory, seller_desc, profile_img, like_cnt, view_cnt} = seller;
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
          view_cnt = {view_cnt}
          sellerLikeCnt = {like_cnt}
          onLike = {onLike}
          offLike ={offLike}
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