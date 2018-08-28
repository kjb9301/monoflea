import React from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({visible,marketDetail}) => {
  const {market_name,market_place,market_poster,market_desc,market_period,end_date} = marketDetail;
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('question')}>
        <div className={cx('title')}>{market_poster}</div>
        <div className={cx('description')}>{market_name}</div>
        <div className={cx('description')}>{market_place}</div>
        <div className={cx('description')}>{market_desc}</div>
        <div className={cx('description')}>{market_period} ~ {end_date}</div>
      </div>
      <div className={cx('options')}>
      </div>
    </ModalWrapper>
  );
};

export default MarketDetailModal;