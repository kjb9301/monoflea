import React from 'react';
import styles from './Board.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Board = () => {
  return (
    <div className={cx('board-wrap')}>
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
  );
};

export default Board;