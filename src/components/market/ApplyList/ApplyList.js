import React, { Fragment } from 'react';
import styles from './ApplyList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Apply = 
  ({ key, num, seller_id, market_id, name, email, nickName, tel, career, category, onDeleteApply }) => {
  return (
    <div className={cx('enroll-list-box')}>
      <p className={cx('enroll-number')}>{Number(num)+1}</p>
      <p className={cx('enroll-content')}>{name}</p>
      <p className={cx('enroll-content')}>{nickName}</p>
      <p className={cx('enroll-content')}>{tel}</p>
      <p className={cx('enroll-content')}>{email}</p>
      <p className={cx('enroll-content')}>{category}</p>
      <p className={cx('enroll-content')}>{career}</p>
      <div className={cx('delete')} onClick={() => onDeleteApply(seller_id, market_id)}>&times;</div>
    </div>
  );
};

 const ApplyList = ({applyListData,onDeleteApply}) => {
  if(!applyListData) return null;
  const applyList = applyListData.map(
    (apply,index) => {
      const { market_id, seller_id } = apply;
      const { career } = apply.seller;
      const { name, tel, email, nickName } = apply.seller.user;
      const { category_ko } = apply.seller.sellerCategory;

      return (
        <Apply 
          key={index}
          num={index}
          seller_id={seller_id}
          market_id={market_id}
          career={career}
          name={name}
          email={email}
          nickName={nickName}
          tel={tel}
          category={category_ko}
          onDeleteApply={onDeleteApply}
        />
      )
    }
  );

  return (
    <Fragment>
      {applyList}
    </Fragment>
  )
}

export default ApplyList;