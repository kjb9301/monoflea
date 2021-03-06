import React from 'react';
import styles from './ClassList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ClassItem = 
  ({ name, desc, place, limit, reg, date, recruit_start_date, recruit_end_date, event_date, view_cnt, images, category, categoryName, profileImg, nickName, id, showClassModal}) => {
  return (
    <div className={cx('item-boxframe')}>
      <div className={cx('item-box')} 
          onClick={() => {
            showClassModal(id);
            this.viewCnt.innerText = parseInt(this.viewCnt.innerText) + 1;
          }
        }>
        <div className={cx('item-posterframe')}>
          <div className={cx('item-poster')}><img src={images} /></div>
        </div>
        
        <div className={cx('item-contents')}>
          <div className={cx('item-name')}>{name}</div>
          <div className={cx('item-limit')}>모집인원 : {reg} / {limit}</div>
          <div className={cx('item-period')}>모집기간 : {recruit_start_date} ~ {recruit_end_date}</div>
          <div className={cx('item-period')}>주최일 : {event_date}</div>
          <div className={cx('item-period')}>조회수 : <span ref={(ref) => this.viewCnt = ref}>{view_cnt}</span></div>
          <div className={cx('item-desc')}>{desc}</div>
        </div>

        <div className={cx('item-profile')}>
          <div className={cx('item-profile-img')}><img src={profileImg}/></div>
          <div className={cx('item-profile-info')}>
            <div className={cx('item-nickname')}>{nickName}</div>
            <div className={cx('item-category')}>카테고리 : {categoryName}</div>
            <div className={cx('item-place')}>{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClassList = ({ classList, showClassModal }) => {
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
      recruit_start_date,
      recruit_end_date,
      event_date,
      view_cnt,
      onedayImages, 
      onedayCategory, 
      seller 
    } = classItem

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
        recruit_start_date={recruit_start_date}
        recruit_end_date={recruit_end_date}
        event_date={event_date}
        view_cnt={view_cnt}
        images={onedayImages[0].class_imgurl}
        category={onedayCategory.class_category_id}
        categoryName={onedayCategory.category_ko_name}
        profileImg={seller.profile_img}
        nickName={seller.user.nickName}
        showClassModal={showClassModal}
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