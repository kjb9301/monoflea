import React from 'react';
import styles from './BoardHeader.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BoardHeader = () => {
  return (
    <div className={cx('notice-title-wrap')}>
      <h3 className={cx('notice-title')}>Notification</h3>
      <div className={cx('notice-alert')}>
        <h4 className={cx('alert-title')}>공지사항</h4>
        <p className={cx('alert-info')}>MONOFLEA의 소식을 전해드립니다.</p>
      </div>
  </div>
  );
}

export default BoardHeader;