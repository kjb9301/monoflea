import React from 'react';
import styles from './ApplyListModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import ApplyList from 'components/market/ApplyList/ApplyList';

const cx = classNames.bind(styles);

const ApplyListModal = ({visible,children,applyListData,onClose,onDeleteApply}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('applyForm')}>
        <div className={cx('close')} onClick={onClose}>&times;</div>
        <div>
          <h3>신청자 관리</h3>
        </div>
        <div className={cx('content')}>
          <ApplyList applyListData={applyListData} onDeleteApply={onDeleteApply}/>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ApplyListModal;