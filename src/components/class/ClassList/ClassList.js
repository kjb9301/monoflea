import React from 'react';
import styles from './ClassList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const ClassItem = ({name,place,poster,period,end,reg}) => {
  return (
    <div className={cx('market-item')}>
      <div className={cx('market-item-top')}>
        <p>{poster}</p>
      </div>
      <div className={cx('market-item-bottom')}>
        <div className={cx('bot-inner-top')}>
          <p className={cx('item-left')}>
            {name}
          </p>
          <p className={cx('item-right')}>
            {place}
          </p>
        </div>
        <div className={cx('bot-inner-bot')}>
          <div className={cx('item-left')}>
            <p className={cx('block-to-inline')}>{period}</p>
            <p className={cx('block-to-inline')}>{end}</p>
          </div>
          <p className={cx('item-right')}>
            {reg}
          </p>
        </div>
      </div>
    </div>
  );
};

const ClassList = ({markets}) => {
  const classList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date,reg_date} = market;
      return (
        <ClassItem
          key={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          reg={reg_date}
        />
      )
    }
  );
  
  const bestClassList = markets.slice(0,4).map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date,reg_date} = market;
      return (
        <ClassItem
          key={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          reg={reg_date}
        />
      )
    }
  ); 
 
  return (
    <div className={cx('wrapper')}>
      <div className={cx('visual')}>
        <div className={cx('inner')}>
          <h1>Oneday Class</h1>
          <p>"일상의 작은 소확행 관심 있던 수업을 체험 해보고 나의 취미를 찾아보세요"</p>
        </div>
      </div>

      <div className={cx('best-itemlist')}>
        <div className={cx('inner')}>
          <h2>Best Oneday Class</h2>
          {bestClassList}
        </div>
      </div>

      <div className={cx('itemlist')}>
        <div className={cx('inner')}>
          <h2>Oneday Class List</h2>
          {classList}
        </div>
      </div>
    </div>
  )
}

export default ClassList;