import React from 'react';
import styles from './NoticeDetail.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoticeDetail = ({noticeDetail}) => {
  const { board_no, user_id, title, content, img_file, view_cnt, reg_date } = noticeDetail;
  return (
    <div className={cx('notice-detail')}>
      <div>{board_no}</div>
      <div>{user_id}</div>
      <div>{title}</div>
      <div dangerouslySetInnerHTML={{ __html:content }} />
      <div>{img_file}</div>
      <div>{view_cnt}</div>
      <div>{reg_date}</div>
    </div>
  );
};

export default NoticeDetail;