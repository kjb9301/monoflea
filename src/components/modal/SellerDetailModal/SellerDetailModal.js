import React from 'react';
import styles from './SellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Like from '../../common/Like'
import { GoHeart } from "react-icons/go";
const cx = classNames.bind(styles);

const SellerDetailModal = ({visible, sellerDetailData,  onClose, loggedNickName,  likeUp}) => {
   const {career, sns, seller_desc, profile_img, user, seller_images, sellerCategory ,view_cnt} = sellerDetailData;
   const { nickName } = user.nickName;
   const On = loggedNickName !== nickName ? true : false
   let  { imgUrl }  = seller_images; 
   const { category_ko } = sellerCategory.category_ko
  if( !user || !imgUrl ) return null;
    const imgList = imgUrl.map(
      (imgItem, idx) => {
        const { imgUrl } = imgItem;
        return <img src = {imgUrl}
                key = {idx}
                />
      }
    )
  return (
    <ModalWrapper  visible = {visible} > 
     
      <div className={cx('modalForm')}>
        <div className={cx('wrapper')}>
          <div className={cx('profile')}>
            <img src = {profile_img}/>
            <div className = {cx('like')}>
              <span><GoHeart className= {cx('heart')} onClick = {likeUp}/> 좋아요</span>
              <span>조회수  : {view_cnt}</span>
            </div>
          </div>

          <div className={cx('desc')}>
            <div className={cx('info')}>
              <div><span>이름 :</span>{nickName}</div>
              <div><span>분야 :</span>{category_ko}</div>
              <div><span>경력 :</span>{career}년</div>
              <div><span>SNS :</span>{sns}</div>
            </div>
            <div className={cx('desc-text')}>{seller_desc}</div>
          </div>
        </div>

        <div className = {cx('seller_img')}> {imgList} </div>
        <div className={cx('close')} onClick={onClose}><span>&times;</span></div>
      </div> 
    
    
    </ModalWrapper>

  )
}

export default SellerDetailModal