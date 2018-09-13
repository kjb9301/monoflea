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

        <div className={cx('board-menu')}>
          <Link 
            className={cx('board-item')} 
            to="/boards/notice">
            <span className={cx('board-name')}>공지사항</span>
          </Link>
          <Link 
            className={cx('board-item')}
            to="/boards/free">
            <span className={cx('board-name')}>자유게시판</span>
          </Link>
          <Link 
            className={cx('board-item')} 
            to="/boards/market">
            <span className={cx('board-name')}>마켓게시판</span>
          </Link>
          <Link 
            className={cx('board-item')} 
            to="/boards/seller">
            <span className={cx('board-name')}>셀러게시판</span>
          </Link>
          <Link 
            className={cx('board-item')} 
            to="/boards/question">
            <span className={cx('board-name')}>Q&A</span>
          </Link>
        </div>

      </div>


    </div>
  );
};

export default Board;