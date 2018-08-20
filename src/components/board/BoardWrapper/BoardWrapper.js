import React from 'react';
import styles from './BoardWrapper.scss';
import classNames from 'classnames/bind';
import BoardList from 'components/board/BoardList';

const cx = classNames.bind(styles);

const BoardWrapper = () => {
  return (
    <div className={cx('board-wrapper')}>
      <BoardList/>
    </div>
  );
};

export default BoardWrapper;