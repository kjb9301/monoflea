import React from 'react';
import styles from './ClassWrapper.scss';
import classNames from 'classnames/bind';
import ClassList from 'components/class/ClassList';
import ClassCategoryBtn from 'components/class/ClassCategoryBtn';

const cx = classNames.bind(styles);

const ClassWrapper = ({ classList, categories, getSpecificClassList }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('itemlist')}>
        <div className={cx('itemlist-inner', 'inner')}>
          <div className={cx('itemlist-title')}><h2>Oneday Class List</h2></div>
          <div className={cx('category-list')}>
            <ClassCategoryBtn 
              categories={categories} 
              getSpecificClassList={getSpecificClassList}
            />
          </div>
          <div className={cx('itemlist-box')}>
            <ClassList classList={classList}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassWrapper;