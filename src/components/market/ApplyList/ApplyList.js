import React from 'react';
import styles from './ApplyList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Apply = ({name,tel,category}) => {

  return (
    <div className={cx('apply-item')}>
      <input className={cx('tick')} type="checkbox" readOnly/>
      <div className={cx('text')}>
        <p>{name}</p>
        <p>{tel}</p>
        <p>{category}</p>
      </div>
      <div className={cx('delete')}>[지우기]</div>
    </div>
  );
};

 const ApplyList = ({applyListData}) => {
  if(!applyListData) return null;
  const applyList = applyListData.map(
    (apply,index) => {
      const {name,tel} = apply.seller.user;
      const {category_ko} = apply.seller.sellerCategory;

      return (
        <Apply 
          key={index}
          name={name}
          tel={tel}
          category={category_ko}
        />
      )
    }
  );

  return (
    <div>
      {applyList}
    </div>
  )
}

export default ApplyList;