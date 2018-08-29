import React from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({visible,marketDetail,onCancel}) => {
  const {market_name,market_place,market_poster,market_desc,market_period,end_date} = marketDetail;
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('modalForm')}>
        <div className={cx('close')} onClick={onCancel}>&times;</div>
        <div className={cx('wrapper')}>
          <div className={cx('poster')}>{market_poster}</div>
          <div className={cx('info')}>
            <div>{market_name}</div>
            <div>{market_place}</div>
            <div>{market_period} ~ {end_date}</div>
          </div>
          <div className={cx('desc')}>{market_desc}</div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MarketDetailModal;