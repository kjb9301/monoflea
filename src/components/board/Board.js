import React from 'react';
import styles from './Board.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Board = () => {
  return (
    <div className={cx('board')}>

      <div className={cx('board-intro')}>
        <div className={cx('board-intro-head')}><span>Board</span><br/><span className={cx('board-intro-subtitle')}>Monoflea</span></div>
        <div className={cx('board-intro-body')}>
          "플리마켓과 원데이 클래스에 대해서 자유롭게 이야기를 나눠요"
        </div>

        <div className={cx('board-menu-wrap')}>
          <div className={cx('board-menu')}>
              <Link
                className={cx('board-item','board-free')} 
                to="/boards/free"><span><strong>자유게시판</strong></span>
              </Link>
              <Link
                className={cx('board-item','board-market')}
                to="/boards/market">
                <span className={cx('board-name')}><strong>마켓게시판</strong></span>
              </Link>
              <Link 
                className={cx('board-item','board-seller')}
                to="/boards/seller">
                <span className={cx('board-name')}><strong>셀러게시판</strong></span>
              </Link>
              <Link
                className={cx('board-item','board-notice')}
                to="/boards/notice">
                <span className={cx('board-name')}><strong>공지사항</strong></span>
              </Link>
              <Link
                className={cx('board-item','board-qna')}
                to="/boards/question">
                <span className={cx('board-name')}><strong>Q&A</strong></span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;