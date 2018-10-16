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
    <option 
      key={category.class_category_id} 
      value={category.class_category_id}
    >{category.category_ko_name}
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
            <div className={cx('class-btn-box')}>
            {
              seller.user.nickName === nickName ?
                (
                  !editing ? 
                  <Fragment>
                  <button 
                    className={cx('classBtn')} 
                    onClick={() => {
                      toggleEditOnedayClass(class_id);
                    }}>수정
                  </button>
                  <button 
                    className={cx('classBtn')} 
                    onClick={() => {
                      deleteOnedayClass(class_id);
                    }}>삭제
                  </button>
                  <button 
                    className={cx('classBtn')} 
                    onClick={() => {
                      getEnrollList(class_id);
                    }}>신청자목록
                  </button> 
                  </Fragment> :                  
                  <Fragment>
                  <button 
                    className={cx('classBtn')} 
                    onClick={() => {
                      updateOnedayClass(class_id);
                    }}>완료
                  </button>
                  <button 
                    className={cx('classBtn')} 
                    onClick={() => {
                      cancelEditClass(class_id);
                    }}>취소
                  </button>
                  </Fragment>
                  ) : 

              onedayRegs[0] ?
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
              </button>
            }
            </div>
          </div>
          <div className={cx('content-wrapper')}>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>모집분야</h3>
              {
                !editing ? 
                <p className={cx('info-content')}>{onedayCategory.category_ko_name}</p> :
                <select 
                  className={cx('info-content')}
                  value={onedayCategory.class_category_id}
                  name='class_category_id'
                  onChange={changeValue}
                >{categoryList}
                </select>
              }
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>클래스이름</h3>
              {
                !editing ?
                <p className={cx('info-content')}>{class_name}</p> :
                <input 
                  className={cx('info-content')} 
                  value={class_name} 
                  name='class_name' 
                  onChange={changeValue}
                />
              }
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>개설장소</h3>
              {
                !editing ?
                <p className={cx('info-content')}>{class_place}</p> :
                <input 
                  className={cx('info-content')} 
                  value={class_place} 
                  name='class_place' 
                  onChange={changeValue}
                />
              }
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>주최일</h3>
              {
                !editing ?
                <p className={cx('info-content')}>{event_date}</p> :
                <input 
                  type='date'
                  className={cx('info-content')} 
                  value={event_date} 
                  name='event_date' 
                  onChange={changeValue}
                />
              }
            </div>
            <div className={cx('info-box', 'w-100')}>
              <h3 className={cx('info-title')}>모집기간</h3>              
              {
                !editing ?
                <p className={cx('info-content')}>{recruit_start_date} ~ {recruit_end_date}</p> :
                <div className={cx('info-content')}>
                  <input
                    type='date'
                    className={cx('info-content', 'inner-box')} 
                    value={recruit_start_date} 
                    name='recruit_start_date' 
                    onChange={changeValue}
                  />
                  ~ 
                  <input 
                    type='date'
                    className={cx('info-content', 'inner-box')} 
                    value={recruit_end_date} 
                    name='recruit_end_date' 
                    onChange={changeValue}
                  />
                </div>
              }              
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>모집인원</h3>
              {
                !editing ? 
                <p className={cx('info-content')}>
                  <span ref={ref => this.regCnt = ref}>{class_reg_cnt}</span> / {class_limit_cnt}
                </p> :
                <p className={cx('info-content')}>
                  <span ref={ref => this.regCnt = ref}>{class_reg_cnt}</span>
                   / 
                  <input 
                    type='number'
                    className={cx('info-content', 'inner-box')} 
                    value={class_limit_cnt} 
                    name='class_limit_cnt' 
                    onChange={changeValue}
                  />
                </p>
              }
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>조회수</h3>
              <p className={cx('info-content')}>{view_cnt}</p>
            </div>
            <div className={cx('detail-wrap')}>
              <h3 className={cx('info-title')}>상세설명</h3>
              {
                !editing ?
                <p className={cx('info-content', 'line-height-1-6')}>{class_desc}</p> :
                <textarea 
                  className={cx('info-content', 'w-100')} 
                  name='class_desc' 
                  rows='5' 
                  value={class_desc}
                  onChange={changeValue}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </ClassModalWrapper>
  )
}

export default ClassDetailModal