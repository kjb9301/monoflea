import React from 'react';
import styles from './NoticePost.scss';
import classNames from 'classnames/bind';
import EditorMarkdown from 'components/common/EditorMarkdown';
import BoardHeader from 'components/board/common/BoardHeader';

const cx = classNames.bind(styles);

const NoticePost = ({ handleInputTitle, createNewPost, redirectNoticeList }) => {
  return (
    <div className={cx('notice-detail')}>
      <BoardHeader />
      <div className={cx('detail-wrap')}>
        <div className={cx('detail-top')}>
          <div className={cx('detail-title')}>
            <input 
              className={cx('title-input')}
              autoFocus 
              placeholder="제목을 입력하세요..."
              name="title"
              onChange={handleInputTitle}
            />
          </div>
        </div>
        <div className={cx('detail-content')}>
        <EditorMarkdown />
        </div>
      </div>
      <div className={cx('detail-prev-wrap')}>
        <button className={cx('save-post-btn')} onClick={createNewPost}>작성하기</button>
        <button className={cx('prev-btn')} onClick={redirectNoticeList}>목록으로</button>
      </div>
    </div>


    // <div className={cx('post-wrap')}>
    //   <div className={cx('post-title')}>
    //     <input 
    //       autoFocus 
    //       placeholder="제목을 입력하세요..."
    //       name="title"
    //       onChange={handleInputTitle}
    //     />
    //   </div>
    //   <EditorMarkdown />
    //   <div className={cx('post-btn-wrap')}>
    //     <span className={cx('post-btn')} onClick={createNewPost}>작성</span>
    //   </div>
    // </div>
  );
};

export default NoticePost;