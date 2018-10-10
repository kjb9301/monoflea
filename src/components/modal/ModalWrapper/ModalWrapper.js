import React from 'react';
import styles from './ModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ModalWrapper = ({ children, visible,onClose }) => {
  if(!visible) return null;
  return (

    <div className={cx('modal-wrapper')} >
      <div className={cx('modal')} onClick = {onClose}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;