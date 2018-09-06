import React from 'react';
import styles from './MarketPost.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketPost = ({onChange,onCreate}) => {
  return (
    <div className={cx('form')}>
      <div className={cx('row')}>
        <div className={cx('label-space')}>
          <label htmlFor="poster">포스터</label>
        </div>
        <div className={cx('input-space')}>
          <input type="file" id="poster" name="poster" onChange={onChange}/>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('label-space')}>
          <label htmlFor="name">마켓이름</label>
        </div>
        <div className={cx('input-space')}>
          <input type="text" id="name" name="name" onChange={onChange}/>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('label-space')}>
          <label htmlFor="place">마켓장소</label>
        </div>
        <div className={cx('input-space')}>
          <input type="text" id="place" name="place" onChange={onChange}/>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('label-space')}>
          <label htmlFor="period">시작일</label>
        </div>
        <div className={cx('input-space')}>
          <input type="text" id="period" name="period" onChange={onChange}/>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('label-space')}>
          <label htmlFor="endDate">종료일</label>
        </div>
        <div className={cx('input-space')}>
          <input type="text" id="endDate" name="endDate" onChange={onChange}/>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('label-space')}>
          <label htmlFor="desc">설명</label>
        </div>
        <div className={cx('input-space')}>
        <textarea cols="100" rows="10" id="desc" name="desc" onChange={onChange}></textarea>
        </div>
      </div>
      <div>
        <button className={cx('submit-button')} onClick={onCreate}>등록</button>
      </div>
    </div>
  );
};

export default MarketPost;