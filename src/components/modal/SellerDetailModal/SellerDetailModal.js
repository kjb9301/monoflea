import React from 'react';
import styles from './SellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Like from '../../common/Like'
import { GoHeart } from "react-icons/go";
const cx = classNames.bind(styles);

const SellerDetailModal = ({visible, sellerDetailData, onChange, onClose,editTF,onUpdate, onEdit, onOff, onCancel,likeUp}) => {
   const {career, sns, seller_desc, profile_img, user, seller_images, sellerCategory,seller_id } = sellerDetailData;
   const { nickName } = user.nickName;
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
      { editTF ? 
        <div className={cx('modalForm')}>
            <div className={cx('close')} onClick={onClose}><span>&times;</span></div>
              <div className={cx('wrapper')}>
                <div className={cx('profile')}> <img src = {profile_img}/> </div>
                  <div className={cx('desc')}>
                    <div className={cx('info')}>
                      <div>이름 : {nickName} </div>
                      <div>분야 : {category_ko}</div>
                      <div>경력 : {career}년  <br/> SNS : <input name='sns' value = {sns} onChange = {onChange}/> </div>
                        자기소개 : <textarea name='seller_desc' value = {seller_desc} onChange = {onChange}/>
                        <div className = {cx('radio')}> 공개여부 :
                          공개 <input type ='radio' name = 'show_TF' value = 'true' defaultChecked ='true'  onChange = {onOff} />
                          비공개 <input type ='radio' name = 'show_TF' value = 'false'  onChange = {onOff}/>
                        </div>
                        <div> <GoHeart/> 좋아요  </div> 
                    </div>
                </div>
              </div>
            <div className = {cx('seller_img')}> {imgList} </div>
          <button onClick = {() => onUpdate(seller_id)}> 저장 </button>
          <button onClick = { () => {onEdit() 
                             onCancel(seller_id)}}> 취소</button>
        </div>
    :
        <div className={cx('modalForm')}>
          <div className={cx('close')} onClick={onClose}><span>&times;</span></div>
            <div className={cx('wrapper')}>
              <div className={cx('profile')}> <img src = {profile_img}/> </div>
              <div className={cx('desc')}>
                  <div className={cx('info')}>
                    <div>이름 : {nickName} </div>
                    <div>분야 : {category_ko}</div>
                    <div>경력 : {career}년  <br/> SNS : {sns} </div>
                    자기소개 : {seller_desc}
                    <div className = {cx('like')}> <GoHeart className= {cx('heart')} onClick = {likeUp}/> 좋아요  </div> 
                  </div>
                </div>
              </div>
          <div className = {cx('seller_img')}> {imgList} </div>
          <button onClick = {onEdit}> 수정</button>
        {/* <Button toGetData = {onModal}> 수정</Button> */}
        </div> 
    }
    </ModalWrapper>

  )
}

export default SellerDetailModal