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
  indicators: true,
  scale: 1,
  arrows: false
}

const imgStlyes = {
  'width': '250px',
  'height': '250px'
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
              <img src={img.class_imgurl} alt={class_name} style={imgStlyes}/>
            </Fragment>
          )
        }
      </div>
    )
  );

  return (
    <ClassModalWrapper  visible={visible}>
      <div className={cx('detail-modal')}>
        <div className={cx('close-box')}>
          <span className={cx('close')} onClick={() => hideModal(class_id)}>&times;</span>
        </div>
        <div className={cx('detail-top')}>
          <span className={cx('classCategory')}>
            {onedayCategory.category_ko_name}
          </span>
          <span className={cx('className')}>
            {class_name}
          </span>
        </div>
        <div className={cx('content-wrapper')}>
          <div className={cx('content-box')}>
            <div className={cx('inner-half-box')}>
              <div className={cx('img-box')}>
                <img src={seller.profile_img} alt={class_name} className={cx('profile-img')}/>
              </div>
            </div>
            <div className={cx('inner-half-box')}>
              <div className={cx('info-box')}>
                <h3 className={cx('info-title')}>모집분야</h3>
                <p className={cx('info-content')}>{onedayCategory.category_ko_name}</p>
              </div>
              <div className={cx('info-box')}>
                <h3 className={cx('info-title')}>셀러명</h3>
                <p className={cx('info-content')}>{seller.user.nickName}</p>
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
            </div>
          </div>
          <div className={cx('content-box', 'margin-top-50')}>
            <div className={cx('inner-half-box')}>
              <Fade {...fadeProperties} className={cx('images')}>
                {images}
              </Fade>
            </div>
            <div className={cx('inner-half-box')}>
              <div className={cx('info-box', 'w-100')}>
                <h3 className={cx('info-title')}>상세설명</h3>
                <p className={cx('info-content', 'line-height-1-6')}>{class_desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('button-wrap', 'margin-top-30')}>
          {
            nickName === seller.user.nickName ?
            <Fragment>
            <button className={cx('classBtn')} onClick={() => toggleEditOnedayClass(class_id)}>수정</button>
            <button className={cx('classBtn')} onClick={() => deleteOnedayClass(class_id)}>삭제</button>
            <button className={cx('classBtn')} onClick={() => getEnrollList(class_id)}>신청자 목록</button>
            </Fragment> :
            onedayRegs[0] ?
            <button 
              className={cx('classBtn')} 
              ref={ref => this.cancelBtn = ref}
              onClick={() => {
                cancelOnedayClass(class_id);
                this.regCnt.innerText = Number(this.regCnt.innerText) - 1;
              }}>취소하기
            </button> :
            <button 
              className={cx('classBtn')}
              ref={ref => this.enrollBtn = ref}
              onClick={() => {
                enrollOnedayClass(class_id);
                this.regCnt.innerText = Number(this.regCnt.innerText) + 1;
              }}>강좌등록
            </button>
          }
        </div>
      </div>
    </ClassModalWrapper>
  )

  // return (
  //   <ClassModalWrapper  visible={visible}> 
  //     { !editing ?
  //       (
  //         <div className={cx('modalForm')}>
  //           <span className={cx('close')} onClick={() => hideModal(class_id)}>&times;</span>
  //           <div className={cx('modalTitle')}>
  //             <span className={cx('classCategory')}>
  //               {onedayCategory.category_ko_name}
  //             </span>
  //             <span className={cx('className')}>
  //               {class_name}
  //             </span>
  //           </div>
  //           <div className={cx('modalInfo')}>
  //             <div className={cx('classProfileImg')}>
  //               <img src={seller.profile_img} alt={class_name}/>
  //             </div>
  //             <div className={cx('classInfo')}>
  //               <div>
  //                 <span>모집분야</span>
  //                 {onedayCategory.category_ko_name}
  //               </div>
  //               <div className={cx('classNickname')}>
  //                 <span>아이디</span>
  //                 {seller.user.nickName}
  //               </div>
  //               <div>
  //                 <span className={cx('classPlace')}>개설장소</span>
  //                 <span className={cx('classPlaceContent')}>{class_place}</span>
  //               </div>
  //               <div>
  //                 <span>주최일</span>
  //                 {event_date}
  //               </div>
  //               <div>
  //                 <span>모집기간</span>
  //                 {recruit_start_date} ~ {recruit_end_date}
  //               </div>
  //               <div className={cx('classRegCnt')}>
  //                 <span>모집인원</span>
  //                 <strong ref={ref => this.regCnt = ref}>{class_reg_cnt}</strong> 
  //                 <em>/</em> 
  //                 <strong>{class_limit_cnt}</strong>
  //               </div>
  //               <div>
  //                 <span>조회수</span>
  //                 {view_cnt}
  //               </div>
  //               <div className={cx('classBtnWrap')}>
  //                 {
  //                   nickName === seller.user.nickName 
  //                   ?
  //                   (
  //                     <div>
  //                       <div className={cx('classBtn')} onClick={() => toggleEditOnedayClass(class_id)}>수정</div>
  //                       <div className={cx('classBtn')} onClick={() => deleteOnedayClass(class_id)}>삭제</div>
  //                       <div className={cx('classBtn')} onClick={() => getEnrollList(class_id)}>신청자 목록</div>
  //                     </div>
  //                   )
  //                   :
  //                   (
                      
  //                     onedayRegs[0] 
  //                     ?                     
  //                     <div 
  //                       className={cx('classBtn')} 
  //                       ref={ref => this.cancelBtn = ref}
  //                       onClick={() => {
  //                         cancelOnedayClass(class_id);
  //                         // this.regCnt.innerText = Number(this.regCnt.innerText) - 1;
  //                       }
  //                     }>취소하기
  //                     </div>
  //                     :
  //                     <div 
  //                       className={cx('classBtn')}
  //                       ref={ref => this.enrollBtn = ref}
  //                       onClick={() => {
  //                         enrollOnedayClass(class_id);
  //                         // this.regCnt.innerText = Number(this.regCnt.innerText) + 1;
  //                       }
  //                     }>강좌등록하기
  //                     </div>
  //                   )
  //                 }
  //               </div>
  //             </div>
  //           </div>
  //           <div className={cx('modalDesc')}>
  //             <div className={cx('modalTitle')}>강좌소개</div>
  //             <div className = {cx('descWrapper')}>
  //               <div className={cx('modalContent')}>{class_desc}</div>
  //               <div className={cx('modalImage')}>
  //                 {/* <div className = {cx('images')}>{images}</div> */}
  //                 {images}
  //               </div>
  //             </div>
  //           </div>
  //         </div> 
  //       )
  //       :
  //       (
  //         <div className={cx('modalForm')}>
  //           <span className={cx('close')} onClick={() => hideModal(class_id)}>&times;</span>
  //           <div className={cx('modalTitle')}>
  //             <span className={cx('classCategory')}>
  //               <select onChange={changeValue} name="class_category_id" defaultValue={onedayCategory.category_ko_name}>
  //                 {categoryList}
  //               </select>
  //             </span>
  //             <input 
  //               type="text"
  //               name="class_name"
  //               className={cx('className')}
  //               value={class_name} 
  //               onChange={changeValue}
  //             />
  //           </div>
  //           <div className={cx('modalInfo')}>
  //             <div className={cx('classProfileImg')}>
  //               <img src={seller.profile_img} alt={class_name}/>
  //             </div>
  //             <div className={cx('classInfo')}>
  //               <div>
  //                 <span>
  //                   모집분야 
  //                 </span>
  //                 {onedayCategory.category_ko_name}
  //               </div>
  //               <div className={cx('classNickname')}>
  //                 <span>
  //                   아이디 
  //                 </span>
  //                 {seller.user.nickName}
  //               </div>
  //               <div>
  //                 <span className={cx('classPlace')}>
  //                   개설장소
  //                 </span>
  //                 <input
  //                   type="text" 
  //                   name="class_place"
  //                   className={cx('classPlaceContent')}
  //                   value={class_place}
  //                   onChange={changeValue}
  //                 />
  //               </div>
  //               <div>
  //                 <span>
  //                   주최일
  //                 </span>
  //                 <input
  //                   type="date" 
  //                   name="event_date"
  //                   value={event_date} 
  //                   onChange={changeValue}
  //                 />
  //               </div>
  //               <div>
  //                 <span>
  //                   모집기간
  //                 </span>
  //                 <input 
  //                   type="date" 
  //                   name="recruit_start_date"
  //                   value={recruit_start_date} 
  //                   onChange={changeValue}
  //                 /> 
  //                   ~ 
  //                 <input 
  //                   type="date" 
  //                   name="recruit_end_date"
  //                   value={recruit_end_date} 
  //                   onChange={changeValue}
  //                 />
  //               </div>
  //               <div>
  //                 <span>
  //                   모집인원 
  //                 </span> 
  //                 <span ref={ref => this.regCnt = ref}>
  //                   {class_reg_cnt}  
  //                 </span>
  //                 /
  //                 <input 
  //                   type="text" 
  //                   name="class_limit_cnt"
  //                   value={class_limit_cnt} 
  //                   onChange={changeValue}
  //                 />
  //               </div>
  //               <div>
  //                 <span>
  //                   조회수 
  //                 </span>
  //                 {view_cnt}
  //               </div>
  //             </div>
  //             {
  //               nickName === seller.user.nickName
  //               ?
  //               (
  //                 <div>
  //                   <div className={cx('classBtn')} onClick={() => updateOnedayClass(class_id)}>수정완료</div>
  //                   <div className={cx('classBtn')} onClick={() => cancelEditClass(class_id)}>취소</div>
  //                 </div>
  //               )
  //               :
  //               (
  //                 onedayRegs[0] 
  //                 ?                     
  //                 <div className={cx('classBtn')} onClick={() => cancelOnedayClass(class_id)}>취소하기</div>
  //                 :
  //                 <div className={cx('classBtn')} onClick={() => enrollOnedayClass(class_id)}>강좌등록하기</div>
  //               )
  //             }
  //           </div>
  //           <div className={cx('modalDesc')}>
  //             상세설명 : 
  //             <textarea name="class_desc" onChange={changeValue} value={class_desc}/>
  //           </div>
  //           <div className={cx('modalImage')}>
  //             {images}
  //           </div>
  //         </div>
  //       )
  //     }
  //   </ClassModalWrapper>
  // )
}

export default ClassDetailModal