import React from 'react';
import styles from './ApplyList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Apply = ({key,seller_id,market_id,name,tel,category,onDeleteApply}) => {

  return (
    <div className={cx('apply-item')}>
      <div className={cx('content')}>
        <div className={cx('text')}>이름:{name}</div>
        <div className={cx('text')}>전화번호:{tel}</div>
        <div className={cx('text')}>분야:{category}</div>
      </div>
      <div className={cx('delete')} onClick={() => onDeleteApply(seller_id,market_id)}>&times;</div>
    </div>
  );
};

 const ApplyList = ({applyListData,onDeleteApply}) => {
  if(!applyListData) return null;
  const applyList = applyListData.map(
    (apply,index) => {
      const {market_id,seller_id} = apply;
      const {name,tel} = apply.seller.user;
      const {category_ko} = apply.seller.sellerCategory;

      return (
        <Apply 
          key={index}
          seller_id={seller_id}
          market_id={market_id}
          name={name}
          tel={tel}
          category={category_ko}
          onDeleteApply={onDeleteApply}
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