import React from 'react';
import styles from './MarketPost.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarketPost = () => {
  return (
    <div className={cx('form')}>
      <input type="text" name=""/>
      <input type="text" name=""/>
      <input type="text" name=""/>
      <input type="text" name=""/>
      <input type="text" name=""/>
      <input type="text" name=""/>
    </div>
  );
};

export default MarketPost;