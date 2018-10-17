import React from 'react';
import styles from './SellerModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SellerModalWrapper = ({ children, visible }) => {
  if(!visible) return null;
  return (
    <div className={cx('modal-wrapper')}>
      <div className={cx('modal')}>
        {children}
      </div>
    </div>
  );
};

export default SellerModalWrapper;