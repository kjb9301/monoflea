import React from 'react';
import styles from './ClassList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ClassItem = ({ name, desc, place, limit, reg, date, images, category, categoryName, profileImg, nickName, id, /* onModal */}) => {
  return (
    <div className={cx('item-boxframe')}>
      <div className={cx('item-box')}>
        <div className={cx('item-posterframe')}>
          <div className={cx('item-poster')}><img src={images} /></div>
        </div>
        
        <div className={cx('item-contents')}>
          <div className={cx('item-name')}>{name}</div>
          <div className={cx('item-limit')}>모집인원 : {reg} / {limit}</div>
          <div className={cx('item-period')}>모집기간 : {date} ~ {date}</div>
          <div className={cx('item-desc')}>{desc}</div>
        </div>

        <div className={cx('item-profile')}>
          <div className={cx('item-profile-img')}><img src={profileImg}/></div>
          <div className={cx('item-nickname')}>{nickName}</div>
          <div className={cx('item-category')}>카테고리 : {categoryName}</div>
          <div className={cx('item-place')}>{place}</div>
          {/* <div><button onClick={() => onModal(id)}>상세보기</button></div> */}
        </div>
      </div>
    </div>
  );
};

const ClassList = ({ classList }) => {
  const classes = classList.map(classItem => {
    
    const { 
      class_id, 
      seller_id, 
      class_name, 
      class_desc, 
      class_place, 
      class_limit_cnt, 
      class_reg_cnt, 
      reg_date, 
      onedayImages, 
      onedayCategory, 
      seller 
    } = classItem; 

    return (
      <ClassItem 
        key={class_id}
        id={class_id}
        seller={seller_id}
        name={class_name}
        desc={class_desc}
        place={class_place}
        limit={class_limit_cnt}
        reg={class_reg_cnt}
        date={reg_date}
        images={onedayImages[0].class_imgurl}
        category={onedayCategory.class_category_id}
        categoryName={onedayCategory.category_ko_name}
        profileImg={seller.profile_img}
        nickName={seller.user.nickName} 
      />
    )
  })
  return (
    <div>
      {classes}
    </div>
  );
};

export default ClassList;