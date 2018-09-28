import React from 'react';
import styles from './NoticePost.scss';
import classNames from 'classnames/bind';
import EditorMarkdown from 'components/common/EditorMarkdown';

const cx = classNames.bind(styles);

const NoticePost = ({ handleInputTitle, createNewPost }) => {
  return (
    <div className={cx('post-wrap')}>
      <div className={cx('post-title')}>
        <input 
          autoFocus 
          placeholder="제목을 입력하세요..."
          name="title"
          onChange={handleInputTitle}
        />
      </div>
      <EditorMarkdown />
      <div className={cx('post-btn-wrap')}>
        <span className={cx('post-btn')} onClick={createNewPost}>작성</span>
      </div>
    </div>
  );
};

export default NoticePost;