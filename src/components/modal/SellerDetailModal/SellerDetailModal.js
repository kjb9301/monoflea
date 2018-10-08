import React from 'react';
import styles from './SellerDetailModal.1.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Like from 'components/common/Like'
const cx = classNames.bind(styles);

const SellerDetailModal = ({visible, sellerDetailData, onLike,offLike, onClose, loggedNickName,  likeUp}) => {
   const {career, sns, seller_desc, profile_img, user, seller_id, like_cnt,
           seller_images,seller_likes, sellerCategory ,view_cnt} = sellerDetailData;
   const { nickName } = user.nickName;
   let  { imgUrl }  = seller_images; 
   const { category_ko } = sellerCategory.category_ko
   console.log(seller_likes);
  let likeOn = sellerDetailData.seller_likes.length > 0 ? true : false

  if( !user || !imgUrl ) return null;
    const imgList = imgUrl.map(
      (imgItem, idx) => {
        const { imgUrl } = imgItem;
        return <img src = {imgUrl}
                key = {idx}
                alt={nickName}
              />
      }
    )
  return (
    <ModalWrapper  visible = {visible} onClose = {onClose}> 
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR|Open+Sans" rel="stylesheet"/>
     
      <div className={cx('modalForm')} onClick={onClose}>
        <div className={cx('wrapper')}>
          <div className={cx('profile')}>
            <img src = {profile_img} alt={nickName}/>
            <div className={cx('nickName')}>{nickName}</div>
            <div className = {cx('like')}>
              <span><Like onLike = {onLike} offLike = {offLike} 
              likeOn = {likeOn} like_cnt = {like_cnt} id = {seller_id}/> </span>
              <span>조회수  : {view_cnt}</span>
            </div>
          </div>
          <div className={cx('desc')}>
            <div className={cx('info')}>
              
              <div><span>분야 :</span>{category_ko}</div>
              <div><span>경력 :</span>{career}년</div>
              <div><span>SNS :</span>{sns}</div>
            </div>
            <div className={cx('desc-text')}>{seller_desc}</div>
          </div>
        </div>
        <div className = {cx('seller_img')}> <div className = {cx('images')}>{imgList}</div> </div>
        {/* <div className={cx('close')} onClick={onClose}><span>&times;</span></div> */}
      </div> 
    </ModalWrapper>

  )
}

export default SellerDetailModal