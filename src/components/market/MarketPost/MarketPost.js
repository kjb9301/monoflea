import React from 'react';
import styles from './MarketPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MarketPost = ({onChange,onCreate}) => {
  return (
     <div className={cx('form')}>
     <h1 className={cx('title')}>
       마켓 등록
     </h1>
     <div className={cx('content-wrap')}>
       <div className={cx('input-box')}>
         <input type='text' name='name' placeholder='마켓 이름을 입력해주세요!' onChange={onChange}/>
       </div>
       <div className={cx('input-box')}>
         <input type='text' name='place' placeholder='마켓 주최 장소를 입력해주세요!' onChange={onChange}/>
       </div>
       <div className={cx('input-box')}>
         <div>
           <label htmlFor='period'>마켓 주최 기간 입력해주세요!</label>
         </div>
         <input className={cx('period')} type='date' name='startDate' onChange={onChange}/>
          <input className={cx('period')} type='date' name='endDate' onChange={onChange}/>
       </div>
       <div className={cx('input-box')}>
         <div>
           <label htmlFor='sellerLimitCnt'>셀러 모집 인원을 설정하세요!</label>
         </div>
         <input type="number" name="sellerLimitCnt" onChange={onChange}/>
       </div>
       <div className={cx('input-box')}>
          <div>
            <label htmlFor='period'>셀러 모집 기간을 입력해주세요!</label>
          </div>
          <input className={cx('period')} type='date' name='regStartDate' onChange={onChange}/>
          <input className={cx('period')} type='date' name='regEndDate' onChange={onChange}/>
       </div>
       <div className={cx('input-box')}>
         <textarea name="desc" rows="20" cols="50" placeholder="마켓에 대한 상세한 설명을 적어주세요! 최소 350자 이상" onChange={onChange}/>
       </div>
       <div className={cx('input-box')}>
         <div>
           <label htmlFor='poster'>마켓 관련 포스터를 업로드해주세요!</label>
         </div>
         <input type="file" name="poster" onChange={onChange}/>
       </div>
       <div className={cx('btn-box')}>
         <button className={cx('submit-btn')} onClick={onCreate}>등록</button>
         <Link className={cx('cancel-btn')} to="/markets/recruitment">취소</Link>
       </div>
     </div>
   </div>

  );
};

export default MarketPost;