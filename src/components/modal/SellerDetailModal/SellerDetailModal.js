import React from 'react';
import styles from './SellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
const cx = classNames.bind(styles);



const SellerDetailModal = ({visible, sellerDetail, onCancel}) => {
  const {career, sns, seller_desc, profile_img, user, sellerCategory } = sellerDetail;
  if(!user) return null;
  return (
  <ModalWrapper  visible={visible}  > 
      <div className={cx('modalForm')}>
        <div className={cx('close')} onClick={onCancel}>&times;</div>
        <div className={cx('wrapper')}>
          <div className={cx('poster')} src = {profile_img}></div>
          <div className={cx('info')}>
            <div>분야 : {sellerCategory.category_ko}</div>
            <div>이름 : {user.nickName}</div>
            <div>경력 : {career}년  SNS : {sns} </div>
          </div>
          <div className={cx('desc')}>자기소개 : {seller_desc}</div>
        </div>
      </div>
  </ModalWrapper>
  )
}

export default SellerDetailModal