import React from 'react';
import styles from './ClassModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ClassModalWrapper = ({ children, visible }) => {
  if(!visible) return null;
  return (
    <div className={cx('modal-wrapper')}>
      <div className={cx('modal')}>
        {children}
      </div>
    </div>
  );
};

export default ClassModalWrapper;