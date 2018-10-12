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
        <div className = {cx('class-sub-wrapper')}>
            <div className = {cx('class-title')}>원데이클래스</div>
            <div className = {cx("class-subtitle")}><br/>" 일상에서 힐링을관심 있던 수업을 체험 해보고 나의 취미를 찾아보세요! "</div>
        </div>
        {/* <div className={cx('class-category')}>
          <ClassCategoryBtnContainer />
        </div> */}
      </div>
      <div className={cx('post-btn')}>
        {userType === 'S' && <Link className={cx('post-btn-link')} to="/classes/post">등록하기</Link>}
        </div>
      <div className={cx('classlist-wrap')}><ClassListContainer /></div>
    </div>
  );
};

export default ClassWrapper;