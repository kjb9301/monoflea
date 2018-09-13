import React from 'react';
import styles from './ApplyListModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import ApplyList from 'components/market/ApplyList/ApplyList';

const cx = classNames.bind(styles);

const ApplyListModal = ({visible,children,applyListData}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('applyForm')}>
        <h1>신청자 관리</h1>
        <div className={cx('content')}>
          <ApplyList applyListData={applyListData}/>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ApplyListModal;