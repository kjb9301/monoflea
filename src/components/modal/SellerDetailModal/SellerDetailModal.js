import React from 'react';
import styles from './SellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Button from '../../common/Button'

const cx = classNames.bind(styles);

const SellerDetailModal = ({visible, sellerDetailData, onCancel}) => {
   const {career, sns, seller_desc, profile_img, user, seller_images, sellerCategory } = sellerDetailData;
   const { nickName } = user.nickName;
   const { imgUrl } = seller_images; 
   const { category_ko } = sellerCategory.category_ko
  if(!user || !imgUrl) return null;

  const imgList = imgUrl.map(
    (imgItem, idx) => {
      const { imgUrl } = imgItem;
      return <img src = {imgUrl}
              key = {idx}
              />
    }
  )
 console.log(imgList)
  return (
  <ModalWrapper  visible = {visible} > 
      <div className={cx('modalForm')}>
        <div className={cx('close')} onClick={onCancel}><span>&times;</span></div>
        <div className={cx('wrapper')}>
          <div className={cx('profile')}> <img src = {profile_img}/> </div>
          <div className={cx('desc')}>
            <div className={cx('info')}>
              <div>이름 : {nickName} </div>
              <div>분야 : {category_ko}</div>
              <div>경력 : {career}년  <br/> SNS : {sns} </div>
              자기소개 : {seller_desc}
            </div>
          </div>
        </div>
        <div className = {cx('seller_img')}> {imgList} </div>
        {/* <Button toGetData = {onModal}> 수정</Button> */}
      </div>
  </ModalWrapper>
  )
}

export default SellerDetailModal