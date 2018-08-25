import React from 'react';
import styles from './NoticePost.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoticePost = () => {
  return (
    <div className={cx('post-wrap')}>
      게시글 작성
    </div>
  );
};

export default NoticePost;