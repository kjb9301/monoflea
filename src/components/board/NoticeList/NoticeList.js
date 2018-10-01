import React from 'react';
import styles from './NoticeList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const parser = new DOMParser();

const NoticeItem = ({ board_no, user_id, title, content, img_file, reg_date, view_cnt }) => {
  const htmlDoc = parser.parseFromString(content, 'text/html');
  // const parsedContent = htmlDoc.querySelector('body').innerHTML;
  const parsedContent = htmlDoc.body;
  console.log(parsedContent.childNodes[0]);
  // console.log(unescape(content));
  return (
    <Link to={`/boards/notice/${board_no}`}>
      <div className={cx('notice')}>
        <div>{board_no}</div>
        <div>{user_id}</div>
        <div>{title}</div>
        {/* <div>{parsedContent}</div> */}
        {/* <div>{JSON.parse(content)}</div> */}
        {
          parsedContent.childNodes
        }
        <div>{img_file}</div>
        <div>{view_cnt}</div>
        <div>{reg_date}</div>
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
      <div className={cx('button-space')}>
        <Link to="/boards/notice/post" className={cx('write-button')}>
          글쓰기
        </Link>
      </div>
      {noticeList}
    </div>
  );
};

export default NoticeList;