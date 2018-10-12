import React from 'react';
import styles from './MarketRegWrapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import MarketRegListContainer from 'containers/market/MarketRegListContainer';

const cx = classNames.bind(styles);

const MarketRegWrapper = ({ userType }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('market-header')}>
        <div className = {cx('market-sub-wrapper')}>
          <div className={cx('market-title')}>마켓등록/셀러모집</div>
          <div className={cx('market-description')}><br/>"모/노/플/리에서 전국의 모든 플리마켓에 참여해 보세요."</div>
        </div>
      </div>
      <div className={cx('post-btn')}>
        {userType === 'H' && <Link className={cx('post-btn-link')} to="/markets/registration">마켓등록</Link>}
      </div>
      <MarketRegListContainer />
    </div>  
  );
};

export default MarketRegWrapper;