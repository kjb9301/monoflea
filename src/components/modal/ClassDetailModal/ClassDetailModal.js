import React from 'react';
import styles from './ClassDetailModal.scss';
import classNames from 'classnames/bind';
import ClassModalWrapper from './ClassModalWrapper/ClassModalWrapper';
const cx = classNames.bind(styles);



const ClassDetailModal = ({ visible, classDetail, hideModal, nickName, deleteOnedayClass, updateOnedayClass, changeValue, editing }) => {
  const { 
    class_category_id, class_desc, class_id, class_limit_cnt, class_name, class_place,
    class_reg_cnt, onedayCategory, onedayImages, reg_date, recruit_start_date, 
    recruit_end_date, view_cnt, event_date, seller, seller_id
   } = classDetail;

  if(!seller) return null;

  const images = onedayImages.map(img => 
    <img key={img.class_img_id} src={img.class_imgurl}/>
  );  
  return (
    <ClassModalWrapper  visible={visible}> 
      { !editing ?
        (
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={hideModal}>&times;</span>
            <div className={cx('modalTitle')}>
              <span className={cx('classCategory')}>{onedayCategory.category_ko_name}</span>
              <span className={cx('className')}>{class_name}</span>
            </div>
            <div className={cx('modalInfo')}>
              <div className={cx('classProfileImg')}>
                <img src={seller.profile_img} />
              </div>
              <div className={cx('classInfo')}>
                <div><span>모집분야</span>{onedayCategory.category_ko_name}</div>
                <div className={cx('classNickname')}><span>아이디</span>{seller.user.nickName}</div>
                <div><span className={cx('classPlace')}>개설장소</span><span className={cx('classPlaceContent')}>{class_place}</span></div>
                <div><span>주최일</span>{event_date}</div>
                <div><span>모집기간</span>{recruit_start_date} ~ {recruit_end_date}</div>
                <div><span>모집인원</span>{class_reg_cnt} / {class_limit_cnt}</div>
                <div><span>조회수</span>{view_cnt}</div>
              </div>
              {
                nickName === seller.user.nickName 
                ?
                (
                  <div>
                    <div className={cx('classBtn')} onClick={() => updateOnedayClass(class_id)}>수정</div>
                    <div className={cx('classBtn')} onClick={() => deleteOnedayClass(class_id)}>삭제</div>
                  </div>
                )
                :
                (
                  <div className={cx('classBtn')}>강좌등록하기</div>
                )
              }
            </div>
            <div className={cx('modalDesc')}>상세설명 : {class_desc}</div>
            <div className={cx('modalImage')}>
              {images}
            </div>
          </div> 
        )
        :
        (
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={hideModal}>&times;</span>
            <div className={cx('modalTitle')}>
              <span className={cx('classCategory')}>{onedayCategory.category_ko_name}</span>
              <input 
                type="text"
                name="class_name"
                className={cx('className')}
                value={class_name} 
                onChange={changeValue}
              />
            </div>
            <div className={cx('modalInfo')}>
              <div className={cx('classProfileImg')}>
                <img src={seller.profile_img} />
              </div>
              <div className={cx('classInfo')}>
                <div>
                  <span>
                    모집분야 {onedayCategory.category_ko_name}
                  </span>
                </div>
                <div className={cx('classNickname')}>
                  <span>
                    아이디 {seller.user.nickName}
                  </span>
                </div>
                <div>
                  <span className={cx('classPlace')}>
                    개설장소
                  </span>
                  <input 
                    type="text" 
                    name="class_place"
                    className={cx('classPlaceContent')}
                    value={class_place}
                    onChange={changeValue}
                  />
                </div>
                <div>
                  <span>
                    주최일
                  </span>
                  <input
                    type="date" 
                    name="event_date"
                    value={event_date} 
                    onChange={changeValue}
                  />
                </div>
                <div>
                  <span>
                    모집기간
                  </span>
                  <input 
                    type="date" 
                    name="recruit_start_date"
                    value={recruit_start_date} 
                    onChange={changeValue}
                  /> 
                    ~ 
                  <input 
                    type="date" 
                    name="recruit_end_date"
                    value={recruit_end_date} 
                    onChange={changeValue}
                  />
                </div>
                <div>
                  <span>
                    모집인원 {class_reg_cnt} / 
                  </span> 
                  <input 
                    type="text" 
                    name="class_limit_cnt"
                    value={class_limit_cnt} 
                    onChange={changeValue}
                  />
                </div>
                <div>
                  <span>
                    조회수 {view_cnt}
                  </span>
                </div>
              </div>
              {
                nickName === seller.user.nickName 
                ?
                (
                  <div>
                    <div className={cx('classBtn')} onClick={() => deleteOnedayClass(class_id)}>수정</div>
                    <div className={cx('classBtn')} onClick={() => deleteOnedayClass(class_id)}>삭제</div>
                  </div>
                )
                :
                (
                  <div className={cx('classBtn')}>강좌등록하기</div>
                )
              }
            </div>
            <div className={cx('modalDesc')}>
              상세설명 : 
              <textarea name="class_desc" onChange={changeValue} value={class_desc}/>
            </div>
            <div className={cx('modalImage')}>
              {images}
            </div>
          </div> 
        )
      }
    </ClassModalWrapper>
  )
}

export default ClassDetailModal