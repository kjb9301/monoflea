import React from 'react';
import styles from './Loading.scss';
import classNames from 'classnames/bind';
import Spinner from './loading.gif';

const cx = classNames.bind(styles);

const Loading = () => {
  return (
    <div className={cx('loading-background')}>
      <img className={cx('loading-spinner')} src={Spinner} alt='loading'/>
    </div>
  )
}

export default Loading;