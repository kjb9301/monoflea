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
      <div className={cx('class-header')}>
        <h1 className={cx('class-title')}><span>ONEDAY<br/> Class</span><br/><span className={cx('class-title-name')}>원데이클래스</span></h1>
        <p className={cx('class-description')}>" 일상의 작은 <strong>소 / 확 / 행</strong><br/>관심 있던 수업을 체험 해보고 나의 취미를 찾아보세요! "</p>
        <div className={cx('class-category')}><ClassCategoryBtnContainer /></div>
      </div>
      <div className={cx('post-btn')}>{userType === 'S' && <Link className={cx('post-btn-link')} to="/classes/post">등록하기</Link>}</div>
      <ClassListContainer />
    </div>
  );
};

export default ClassWrapper;