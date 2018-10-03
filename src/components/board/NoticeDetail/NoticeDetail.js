import React from 'react';
import styles from './NoticeDetail.scss';
import classNames from 'classnames/bind';
import BoardHeader from 'components/board/common/BoardHeader';

const cx = classNames.bind(styles);

const NoticeDetail = ({noticeDetail, redirectNoticeList}) => {
  const { board_no, user_id, title, content, view_cnt, reg_date } = noticeDetail;
  return (
    <div className={cx('notice-detail')}>
      <BoardHeader />
      <div className={cx('detail-wrap')}>
        <div className={cx('detail-top')}>
          <h3 className={cx('detail-title')}>
            {title}
          </h3>
          <p className={cx('detail-date')}>
            {reg_date}
          </p>
          <p className={cx('detail-view-count')}>
            조회수 : {view_cnt}
          </p>
        </div>
        <div 
          className={cx('detail-content')} 
          dangerouslySetInnerHTML={{ __html:content }} 
        />
      </div>
      <div className={cx('detail-prev-wrap')}>
        <button className={cx('detail-prev-btn')} onClick={redirectNoticeList}>목록으로</button>
      </div>
    </div>
  );
};

export default NoticeDetail;