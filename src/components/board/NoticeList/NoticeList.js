import React from 'react';
import styles from './NoticeList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NoticeItem = ({ board_no, user_id, title, content, img_file, reg_date, view_cnt }) => {
  return (
    <Link to={`/boards/notice/${board_no}`}>
      <div className={cx('notice-item')}>
        {/* <div>{board_no}</div>
        <div>{user_id}</div> */}
        <div className={cx('item-title')}>{title}</div>
        {/* <div>{parsedContent}</div> */}
        {/* <div>{JSON.parse(content)}</div> */}
        {
          // <div dangerouslySetInnerHTML={{ __html: content }} />
        }
        <div>{img_file}</div>
        <div>{view_cnt}</div>
        <div>{reg_date}</div>
        <span className={cx('item-circle')}>╉</span>
      </div>
    </Link>
  );
}

const NoticeList = ({ notices }) => {
  const noticeList = notices.map(notice => {
    const { board_no, user_id, title, content, img_file, reg_date, view_cnt } = notice;
    return (
      <NoticeItem
        key={board_no}
        board_no={board_no}
        user_id={user_id}
        title={title}
        content={content}
        img_file={img_file}
        reg_date={reg_date}
        view_cnt={view_cnt}
      />
    )
  });

  return (
    <div className={cx('notice-wrap')}>
      <div className={cx('notice-title-wrap')}>
        <h3 className={cx('notice-title')}>Notification</h3>
        <div className={cx('notice-alert')}>
          <h4 className={cx('alert-title')}>공지사항</h4>
          <p className={cx('alert-info')}>MONOFLEA의 소식을 전해드립니다.</p>
        </div>
      </div>
      <div className={cx('notice-list-wrap')}>
        <div className={cx('new-notice-wrap')}>
          <Link to="/boards/notice/post" className={cx('new-notice-btn')}>
            공지등록
          </Link>
        </div>
        {noticeList}
      </div>
    </div>
  );
};

export default NoticeList;