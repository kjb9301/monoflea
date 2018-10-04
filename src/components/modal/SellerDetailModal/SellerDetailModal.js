import React from 'react';
import styles from './SellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { GoHeart } from "react-icons/go";
const cx = classNames.bind(styles);

const SellerDetailModal = ({visible, sellerDetailData,  onClose, loggedNickName,  likeUp}) => {
   const {career, sns, seller_desc, profile_img, user, seller_images, sellerCategory ,view_cnt} = sellerDetailData;
   const { nickName } = user.nickName;
  //  const On = loggedNickName !== nickName ? true : false
   let  { imgUrl }  = seller_images; 
   const { category_ko } = sellerCategory.category_ko
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
    <ModalWrapper  visible = {visible} > 
     
      <div className={cx('modalForm')}>
        <div className={cx('close')} onClick={onClose}><span>&times;</span></div>
          <div className={cx('wrapper')}>
            <div className={cx('profile')}> <img src = {profile_img} alt={nickName}/> </div>
            <div className={cx('desc')}>
                <div className={cx('info')}>
                  <div>이름 : {nickName} </div>
                  <div>분야 : {category_ko}</div>
                  <div>경력 : {career}년  <br/> SNS : {sns} </div>
                  ab자기소개 : 200자 ddd<br/> {seller_desc}
                  <div>조회수  : {view_cnt}</div>
                  <div className = {cx('like')}> <GoHeart className= {cx('heart')} onClick = {likeUp}/> 좋아요  </div> 
                
                </div>
              </div>
            </div>
        <div className = {cx('seller_img')}> {imgList} </div>
      </div> 
    
    
    </ModalWrapper>

  )
}

export default SellerDetailModal