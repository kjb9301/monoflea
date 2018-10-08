import React from 'react';
import styles from './SellerDetailModal.1.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Like from 'components/common/Like'
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

const SellerDetailModal = ({visible, sellerDetailData, onLike,offLike, onClose, loggedNickName,  likeUp}) => {
   const {career, sns, seller_desc, profile_img, user, seller_id, like_cnt,
           seller_images, seller_likes, sellerCategory ,view_cnt} = sellerDetailData;
   const { nickName } = user.nickName;
   let  { imgUrl }  = seller_images; 
   const { category_ko } = sellerCategory.category_ko
  let likeOn = sellerDetailData.seller_likes.length > 0 ? true : false

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
    <ModalWrapper visible={visible}>
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
              <div>
                <Like 
                  onLike={onLike} offLike={offLike} 
                  likeOn={likeOn} like_cnt={like_cnt} id={seller_id}
                /> 
              </div>
              <div>
                조회수 : {view_cnt}
              </div>
            </div>
          </div>
          <div className={cx('desc')}>
            <div className={cx('info')}>
              <div>
                <span className={('title-weight')}>분야 : </span>{category_ko}
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
      </div>
    </ModalWrapper>

  )
}

export default SellerDetailModal