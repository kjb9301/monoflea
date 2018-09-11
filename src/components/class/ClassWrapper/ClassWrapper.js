import React from 'react';
import styles from './ClassWrapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ClassCategoryBtnContainer from 'containers/class/ClassCategoryBtnContainer';
import ClassListContainer from 'containers/class/ClassListContainer';

const cx = classNames.bind(styles);

const ClassWrapper = ({ userType }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('itemlist')}>
        <div className={cx('itemlist-inner', 'inner')}>
          <div className={cx('post-wrap')}>
            {userType === 'S' && <Link className={cx('post-btn')} to="/classes/post">등록하기</Link>}
          </div>
          <div className={cx('itemlist-title')}><h2>Oneday Class List</h2></div>
          <div className={cx('category-list')}>
            <ClassCategoryBtnContainer />
          </div>
          <div className={cx('itemlist-box')}>
            <ClassListContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassWrapper;