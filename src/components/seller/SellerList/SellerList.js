import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';
import Like from 'components/common/Like'

const cx = classNames.bind(styles)
const viewCnt = {};

const SellerItem =
  ({ user, sellerCategory, seller_desc, 
    profile_img, id, view_cnt , detailData, 
    onLike, sellerLikeCnt, seller, offLike 
  }) => {
  let likeOn = seller.seller_likes.length > 0 ? true : false
  return (
    <div className={cx('seller-list')}>
      <div className={cx('seller-head')}>
        <img alt = "img" src = {profile_img} className={cx('seller-profile-img')}/>
      </div>
      <div className={cx('seller-cnt')}>
        <Like onLike = {onLike} offLike = {offLike} 
          likeOn = {likeOn} like_cnt = {sellerLikeCnt} id = {id}/>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm3 7h-3v2h3v6h-6v2h6v2c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-2h2v-2h-2v-6h8v-2h-8v-2c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v2zm-8 3c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm-9 8c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4z"/></svg> 
        &nbsp;조회수 : 
        <span ref={(ref) => viewCnt[id] = ref }>
          {view_cnt}
        </span>
        </span>
      </div>
      <div 
        className={cx('seller-body')}
        onClick={() => {
          detailData(id)
          viewCnt[id].innerText = parseInt(viewCnt[id].innerText, 10) + 1;
      }}> 
      <div className={cx('seller-title-icon')}><span className={cx('seller-key')}>닉네임 : </span><span className={cx('seller-value')}>{user}</span></div>
      <div className={cx('seller-title-icon')}><span className={cx('seller-key')}> 분야 : </span><span className={cx('seller-value')}>{sellerCategory}</span></div>
      <div className={cx('seller-desc')}>
        <div className={cx('seller-title-icon')}>셀러소개</div>
        {seller_desc}
      </div>
      </div>
    </div>
    );
};

const SellerList = ({ sellerList ,detailData, onLike, offLike }) =>{
  const sellerlist  = sellerList.map(
    (seller) => {
      const { seller_id, user, sellerCategory, seller_desc, profile_img, like_cnt, view_cnt } = seller;
      return (
        <SellerItem
          seller={seller}
          key={seller_id}
          id={seller_id}
          user={user.nickName}
          sellerCategory={sellerCategory.category_ko}
          seller_desc={seller_desc}
          profile_img={profile_img}
          detailData={detailData}
          view_cnt={view_cnt}
          sellerLikeCnt={like_cnt}
          onLike={onLike}
          offLike={offLike}
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