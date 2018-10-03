import React from 'react';
import styles from './NoticeList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import BoardHeader from 'components/board/common/BoardHeader';

const cx = classNames.bind(styles);

const parser = new DOMParser();

const NoticeItem = ({ board_no, user_id, title, content, img_file, reg_date, view_cnt }) => {
  const doc = parser.parseFromString(content, 'text/html');
  let viewContent = doc.querySelector('body').innerText;
  viewContent = viewContent.length > 55 ? viewContent.slice(0, 50) + '...' : viewContent;
  return (
    <Link to={`/boards/notice/${board_no}`}>
      <div className={cx('notice-item')}>
        <h3 className={cx('item-title')}>
          {title}
        </h3>
        <p className={cx('item-content')}>
          {viewContent}
        </p>
        <div className={cx('item-bottom')}>
          <div className={cx('item-view-count')}>
            조회수 : {view_cnt}
          </div>
          <div className={cx('item-date')}>
            {reg_date}
          </div>
        </div>
        <span className={cx('item-circle')}>╉</span>
      </div>
    </Link>
  );
}

const NoticeList = ({ notices, userType }) => {
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
      <BoardHeader />
      <div className={cx('notice-list-wrap')}>
        { userType === 'A' ? 
          <div className={cx('new-notice-wrap')}>
            <Link to="/boards/notice/post" className={cx('new-notice-btn')}>
              공지등록
            </Link>
          </div> :
          null
        }
        {noticeList}
      </div>
    </div>
  );
};

export default NoticeList;