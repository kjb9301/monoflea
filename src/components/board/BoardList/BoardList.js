import React from 'react';
import styles from './BoardList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BoardItem = ({ board_no, user_id, title, content, img_file, reg_date, view_cnt }) => {
  return (
    <div>
      <div>{board_no}</div>
      <div>{user_id}</div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{img_file}</div>
      <div>{view_cnt}</div>
      <div>{reg_date}</div>
    </div>
  );
}

const BoardList = ({ notices }) => {
  const noticeList = notices.map(notice => {
    const { board_no, user_id, title, content, img_file, reg_date, view_cnt } = notice;
    return (
      <BoardItem
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
    <div>
      {noticeList}
    </div>
  );
};

export default BoardList;