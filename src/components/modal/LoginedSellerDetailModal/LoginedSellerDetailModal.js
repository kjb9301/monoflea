import React, { Fragment } from 'react';
import styles from './LoginedSellerDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { GoHeart } from "react-icons/go";
// import ImageGallery from 'react-image-gallery';
import { Fade } from 'react-slideshow-image';

const cx = classNames.bind(styles);

const fadeProperties = {
  duration: 1500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 1,
  arrows: true
}

const imgStlyes = {
  'width': '100%',
  'minWidth': '440px',
  'maxHeight': '420px'
}

const LoginedSellerDetailModal 
  = ({ visible, user_seller_id, oneSellerData, onChange, loggedNickName, onClose, editTF, onUpdate, onEdit, onCancel, likeUp }) => {
  const {career, sns, seller_desc, profile_img, user, seller_images, sellerCategory,seller_id ,show_TF, view_cnt} = oneSellerData;
  
  const { nickName } = user.nickName;
  let  { imgUrl }  = seller_images; 
  const { category_ko } = sellerCategory.category_ko;

  if( !user || !imgUrl ) return null;
    const imgList = imgUrl.map(
      (imgItem, idx) => {
        const { imgUrl } = imgItem;
        return <img 
                src={imgUrl}
                key={idx}
                alt={nickName}
                style={imgStlyes}
              />
      }
    )
 return (
  <ModalWrapper  visible = {visible}> 
    <div className={cx('modalForm')}>
        <div className={cx('close-wrap')}>
          <span 
            onClick={onClose}
            className={cx('close')}
          >&times;
          </span>
        </div>
        <div className={cx('wrapper')}>
          <div className={cx('profile')}>
            <div className={cx('profile-img-wrap')}>
              <img 
                src={profile_img}
                alt={nickName}
                className={cx('profile-img')}
              />
            </div>
            <h3 className={cx('nickName')}>{nickName}</h3>
            <div className = {cx('like')}>
              {/* <div>
                <Like 
                  onLike={onLike} offLike={offLike} 
                  likeOn={likeOn} like_cnt={like_cnt} id={seller_id}
                /> 
              </div> */}
              <div>
                조회수 : {view_cnt}
              </div>
            </div>
          </div>
          <div className={cx('desc')}>
            <div className={cx('info')}>
              <div>
                <span className={('title-weight')}>분야 : {category_ko}</span>
              </div>
              <div>
                <span className={('title-weight')}>경력 : </span>{career}년
              </div>
              <div>
                <span className={('title-weight')}>SNS : </span>{sns}
              </div>
            </div>
            <h3 className={cx('desc-title', 'title-weight')}>셀러 소개</h3>
            <p className={cx('desc-text')}>{seller_desc}</p>
          </div>
        </div>
        <div className={cx('wrapper')}>
          <Fade {...fadeProperties} className={cx('images')}>
            {imgList}
          </Fade>
        </div>
        {
          user_seller_id === seller_id ?
            <div className={cx('button-wrap')}>
              {
                !editTF ?
                  <Fragment>
                    <button className={cx('sellerBtn')} onClick={onUpdate}>수정</button>
                    <button className={cx('sellerBtn')}>삭제</button>
                  </Fragment>
                :
                  <Fragment>
                    <button className={cx('sellerBtn')}>완료</button>
                    <button className={cx('sellerBtn')}>취소</button>
                  </Fragment>
              }
              
            </div>
            :
            <Fragment></Fragment>
        }
      </div>
  </ModalWrapper>

 )
}

export default LoginedSellerDetailModal