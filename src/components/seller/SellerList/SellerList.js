import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerList.scss';
import Like from 'components/common/Like'

const cx = classNames.bind(styles)
const viewCnt = {};

const SellerItem = ({user, sellerCategory, seller_desc,profile_img, id, view_cnt,
                    onModal,  detailData, onLike, sellerLikeCnt, seller, offLike}) =>{
  let likeOn = seller.seller_likes.length > 0 ? true : false
  return (
    <div className={cx('seller-list')}>
      <div className={cx('seller-head')}>
        <img alt = "img" src = {profile_img} />
      </div>
      <div className={cx('seller-cnt')}>
        <Like onLike = {onLike} offLike = {offLike} 
          likeOn = {likeOn} like_cnt = {sellerLikeCnt} id = {id}/>
        <span ref={(ref) => viewCnt[id] = ref }><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm3 7h-3v2h3v6h-6v2h6v2c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-2h2v-2h-2v-6h8v-2h-8v-2c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v2zm-8 3c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm-9 8c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4z"/></svg>
          조회수 : {view_cnt}</span>
      </div>
      <div className={cx('seller-body')} onClick = {() => {onModal()
                                                           detailData(id)
                                                           viewCnt[id].innerText = parseInt(viewCnt[id].innerText) + 1;
                                                  }}> 
        <div><span className={cx('seller-key')}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24"><path d="M1.341 6.502c1.11-2.157 2.877-3.984 5.162-5.16l.766 1.848c-1.779.954-3.169 2.393-4.074 4.081l-1.854-.769zm5.93 14.302c-1.688-.904-3.126-2.294-4.08-4.074l-1.848.765c1.175 2.286 3.002 4.054 5.16 5.165l.768-1.856zm-4.845-5.921c-.584-1.932-.549-3.932.005-5.765l-1.856-.768c-.739 2.311-.782 4.852.003 7.299l1.848-.766zm5.925-14.306l.766 1.848c1.932-.583 3.933-.549 5.765.005l.77-1.855c-2.313-.74-4.853-.782-7.301.002zm8.378 2.619c1.688.905 3.126 2.294 4.079 4.073l1.848-.766c-1.176-2.285-3.002-4.052-5.159-5.163l-.768 1.856zm4.845 5.919c.584 1.933.549 3.933-.005 5.766l1.855.769c.74-2.311.782-4.853-.003-7.301l-1.847.766zm-.77 7.614c-.904 1.688-2.294 3.126-4.072 4.08l.766 1.848c2.285-1.176 4.052-3.003 5.162-5.16l-1.856-.768zm-5.92 4.845c-1.933.584-3.933.549-5.766-.005l-.77 1.856c2.312.739 4.853.782 7.301-.002l-.765-1.849z"/></svg> 닉네임 : </span><span className={cx('seller-value')}>{user}</span></div>
        <div><span className={cx('seller-key')}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24"><path d="M1.341 6.502c1.11-2.157 2.877-3.984 5.162-5.16l.766 1.848c-1.779.954-3.169 2.393-4.074 4.081l-1.854-.769zm5.93 14.302c-1.688-.904-3.126-2.294-4.08-4.074l-1.848.765c1.175 2.286 3.002 4.054 5.16 5.165l.768-1.856zm-4.845-5.921c-.584-1.932-.549-3.932.005-5.765l-1.856-.768c-.739 2.311-.782 4.852.003 7.299l1.848-.766zm5.925-14.306l.766 1.848c1.932-.583 3.933-.549 5.765.005l.77-1.855c-2.313-.74-4.853-.782-7.301.002zm8.378 2.619c1.688.905 3.126 2.294 4.079 4.073l1.848-.766c-1.176-2.285-3.002-4.052-5.159-5.163l-.768 1.856zm4.845 5.919c.584 1.933.549 3.933-.005 5.766l1.855.769c.74-2.311.782-4.853-.003-7.301l-1.847.766zm-.77 7.614c-.904 1.688-2.294 3.126-4.072 4.08l.766 1.848c2.285-1.176 4.052-3.003 5.162-5.16l-1.856-.768zm-5.92 4.845c-1.933.584-3.933.549-5.766-.005l-.77 1.856c2.312.739 4.853.782 7.301-.002l-.765-1.849z"/></svg> 분야 : </span><span className={cx('seller-value')}>{sellerCategory}</span></div>
        <div className={cx('seller-desc')}>{seller_desc}</div>
      </div>
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