import React from 'react';
import styles from './ClassDetailModal.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from './ClassModalWrapper/ClassModalWrapper';
const cx = classNames.bind(styles);



const ClassDetailModal = ({visible, classDetail, onCancel}) => {
  const { class_id, seller_id, class_name, class_desc, class_place, class_limit_cnt, class_reg_cnt, reg_date, onedayImages, onedayCategory, seller } = classDetail;

  // if(!user) return null;
  if(!seller) return null;

  const imageList = onedayImages.map(
    (onedayImage, index) => {
      return <img src={onedayImage.class_imgurl} key={index} />
    }
  );

  const categoryName = onedayCategory.category_ko_name;
  // const { sell_id }
  // profileImg = {seller.profile_img}
  // nickName = {seller.user.nickName}
  

  return (
    <ClassModalWrapper  visible={visible}  > 

      <div className={cx('modalForm')}>
        <span className={cx('close')} onClick={onCancel}>&times;</span>

        <div className={cx('modalTitle')}>
          <span className={cx('classCategory')}>{onedayCategory.category_ko_name}</span>
          <span className={cx('className')}>{class_name}</span>
        </div>

        <div className={cx('modalInfo')}>
          <div className={cx('classProfileImg')}><img src={seller.profile_img} /></div>
          <div className={cx('classInfo')}>
            <div><span>모집분야</span>{onedayCategory.category_ko_name}</div>
            <div className={cx('classNickname')}><span>아이디</span>{seller.user.nickName}</div>
            <div><span className={cx('classPlace')}>개설장소</span><span className={cx('classPlaceContent')}>{class_place}</span></div>
            <div><span>개설일자</span>{reg_date}</div>
            <div><span>모집기간</span>{reg_date}</div>
            <div><span>모집인원</span>{class_limit_cnt}</div>
            <div><span>등록인원</span>{class_reg_cnt}</div>
          </div>
          <div className={cx('classBtn')}><button >강좌등록하기</button></div>
        </div>

        <div className={cx('modalDesc')}>상세설명 {class_desc}</div>

        <div className={cx('modalImage')}>
          {imageList}
        </div>

      </div>
    
    </ClassModalWrapper>
  )
}

export default ClassDetailModal