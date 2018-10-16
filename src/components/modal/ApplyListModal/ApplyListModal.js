import React from 'react';
import styles from './ApplyListModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import ApplyList from 'components/market/ApplyList/ApplyList';

const cx = classNames.bind(styles);

const ApplyListModal = ({visible,children,applyListData,onClose,onDeleteApply}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('enroll-modal')}>
        <div className={cx('enroll-box')}>
          <h1 className={cx('enroll-title')}>
            <span className={cx('close')} onClick={onClose}>&times;</span>
              클래스 신청자 리스트
          </h1>
          <div className={cx('enroll-item')}>
            <div className={cx('num')}>
              #
            </div>
            <div className={cx('item')}>
              이름
            </div>
            <div className={cx('item')}>
              닉네임
            </div>
            <div className={cx('item')}>
              전화번호
            </div>
            <div className={cx('item')}>
              이메일
            </div>
            <div className={cx('item')}>
              분야
            </div>
            <div className={cx('item')}>
              경력
            </div>
          </div>
          <ApplyList applyListData={applyListData} onDeleteApply={onDeleteApply}/>
          <button 
            className={cx('enroll-btn')} 
            onClick={onClose}
          >확인
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ApplyListModal;