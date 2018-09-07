import React from 'react';
import styles from './ClassWrapper.scss';
import classNames from 'classnames/bind';
import ClassCategoryBtnContainer from 'containers/class/ClassCategoryBtnContainer';
import ClassListContainer from 'containers/class/ClassListContainer';

const cx = classNames.bind(styles);

const ClassWrapper = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('itemlist')}>
        <div className={cx('itemlist-inner', 'inner')}>
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