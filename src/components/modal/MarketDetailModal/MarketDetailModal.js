import React from 'react';
import './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = () => {
  return (
    <ModalWrapper>
      <div className={cx('question')}>
        <div className={cx('title')}>타이틀</div>
        <div className={cx('description')}>내용내용</div>
      </div>
      <div className={cx('options')}>
        <Button>닫기</Button>
      </div>
    </ModalWrapper>
  );
};

export default MarketDetailModal;