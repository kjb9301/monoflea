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

    // 10월 2일 수정
    // <div>
    //   <div className={cx('gray-background')}/>
    //   <div className={cx('modal-wrapper')}>
    //     <div className={cx('modal')}>
    //       {children}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ModalWrapper;