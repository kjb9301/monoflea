import React, { Fragment } from 'react';
import styles from './ClassDetailModal.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from './ClassModalWrapper/ClassModalWrapper';
import { Fade } from 'react-slideshow-image';

const cx = classNames.bind(styles);

const fadeProperties = {
  duration: 1500,
  transitionDuration: 500,
  infinite: true,
  // indicators: true,
  scale: 1,
  arrows: false
}

const imgStlyes = {
  'width': '650px',
  'height': '650px'
}

const ClassDetailModal = 
  ({ visible, getEnrollList, classDetail, hideModal, nickName, 
     deleteOnedayClass, toggleEditOnedayClass, changeValue, editing, cancelEditClass, 
     updateOnedayClass, categories, enrollOnedayClass, cancelOnedayClass }) => {

  const { 
    class_desc, class_id, class_limit_cnt, class_name, class_place,
    class_reg_cnt, onedayCategory, onedayImages, recruit_start_date, 
    recruit_end_date, view_cnt, event_date, seller, onedayRegs
   } = classDetail;

   const categoryList = categories.map(category => (
    <option key={category.class_category_id} value={category.class_category_id}>
      {category.category_ko_name}
    </option>
   ));
   
  if(!seller) return null;

  const images = onedayImages.map((img, idx) => (
      <div key={img.class_img_id} className={cx('img-box')}>
        {
          nickName === seller.user.nickName && editing ? 
          (
            <Fragment>
              <div className={cx('img-btn')}>
                <span>이미지변경 <input type="file" onChange={changeValue} name={img.class_img_id}/></span>
                <span>&times;</span>
              </div>
              <img src={img.class_imgurl} alt={class_name}/>
            </Fragment>
          )
          :
          (
            <Fragment>
              <img src={img.class_imgurl} alt={class_name} className={cx('img-style')}/>
            </Fragment>
          )
        }
      </div>
    )
  );

  return (
    <ClassModalWrapper  visible={visible}>
      <div className={cx('detail-modal')}>
        <div className={cx('close-box')} onClick={() => hideModal(class_id)}>
          &times;
        </div>
        <div className={cx('w-60', 'd-inline-block')}>
          <div className={cx('content-box')}>
            <Fade {...fadeProperties} className={cx('images')}>
              {images}
            </Fade>
          </div>
        </div>
        <div className={cx('w-40', 'd-inline-block', 'p-20', 'text-left', 'right')}>
          <div className={cx('detail-top')}>
            <div className={cx('img-box')}>
              <img src={seller.profile_img} alt={class_name} className={cx('profile-img')}/>
            </div>
            <div className={cx('profile-content')}>
              <p className={cx('fs-15', 'fw-bold')}>{onedayCategory.category_ko_name}</p>
              <p className={cx('fs-13', 'fc-gray')}>{seller.user.nickName}</p>
            </div>
            {onedayRegs[0] ?
            <button 
              className={cx('classBtn')} 
              ref={ref => this.cancelBtn = ref}
              onClick={() => {
                cancelOnedayClass(class_id);
                this.regCnt.innerText = Number(this.regCnt.innerText) - 1;
              }}>강좌취소
            </button> :
            <button 
              className={cx('classBtn')}
              ref={ref => this.enrollBtn = ref}
              onClick={() => {
                enrollOnedayClass(class_id);
                this.regCnt.innerText = Number(this.regCnt.innerText) + 1;
              }}>강좌신청
            </button>}
          </div>
          <div className={cx('content-wrapper')}>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>모집분야</h3>
              <p className={cx('info-content')}>{onedayCategory.category_ko_name}</p>
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>클래스이름</h3>
              <p className={cx('info-content')}>{class_name}</p>
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>개설장소</h3>
              <p className={cx('info-content')}>{class_place}</p>
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>주최일</h3>
              <p className={cx('info-content')}>{event_date}</p>
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>모집기간</h3>
              <p className={cx('info-content')}>{recruit_start_date} ~ {recruit_end_date}</p>
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>모집인원</h3>
              <p className={cx('info-content')}>
                <span ref={ref => this.regCnt = ref}>{class_reg_cnt}</span> / {class_limit_cnt}
              </p>
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>조회수</h3>
              <p className={cx('info-content')}>{view_cnt}</p>
            </div>
            <div className={cx('detail-wrap')}>
              <h3 className={cx('info-title')}>상세설명</h3>
              <p className={cx('info-content', 'line-height-1-6')}>{class_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </ClassModalWrapper>
  )
}

export default ClassDetailModal