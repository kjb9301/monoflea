import React from 'react';
import styles from './ClassList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const ClassItem = ({name, desc, place, limit, reg, date, images, category, categoryName, profileImg, nickName, id, onModal}) => {
  return (
    <div className={cx('item-boxframe')}> 
      <div className={cx('item-box')}  onClick={() => onModal(id)}>
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

const ClassList = ({onedayLists, categoryList, bestOnedayLists, onModal}) => {

  const classList = onedayLists.map(
    (onedayList) => {
      const {class_id, seller_id, class_name, class_desc, class_place, class_limit_cnt, class_reg_cnt, reg_date, onedayImages, onedayCategory, seller} = onedayList;
      
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
          images = {onedayImages[0].class_imgurl}
          category = {onedayCategory.class_category_id}
          categoryName = {onedayCategory.category_ko_name}
          profileImg = {seller.profile_img}
          nickName = {seller.user.nickName}
          onModal = { onModal }
        />
      )
    }
  );

  const bestClassList = bestOnedayLists.slice(0,4).map(
    (bestOnedayList) => {
      const {class_id, seller_id, class_name, class_desc, class_place, class_limit_cnt, class_reg_cnt, reg_date, onedayImages, onedayCategory, seller} = bestOnedayList;

      return (
        <ClassItem
          key={class_id}
          id = {class_id}
          seller = {seller_id}
          name={class_name}
          desc={class_desc}
          place={class_place}
          limit={class_limit_cnt}
          reg={class_reg_cnt}
          date={reg_date}
          images = {onedayImages[0].class_imgurl}
          category = {onedayCategory.class_category_id}
          categoryName = {onedayCategory.category_ko_name}
          profileImg = {seller.profile_img}
          nickName = {seller.user.nickName}
          onModal = { onModal }
        />
      )
    }
  ); 
 
  return (
    <div className={cx('wrapper')}>
      <div className={cx('visual')}>
        <div className={cx('visual-inner', 'inner')}>
          <h1>"Oneday Class"</h1>
          <p>"일상의 작은 <strong>'소·확·행'</strong><br/>관심 있던 수업을 체험 해보고 나의 취미를 찾아보세요"</p>
        </div>
      </div>

      <div className={cx('bestlist')}>
        <div className={cx('bestlist-inner', 'inner')}>
          <div className={cx('bestlist-title')}><h2>Best Oneday Class</h2></div>
          <div className={cx('itemlist-box')}>
            {bestClassList}
          </div>
        </div>
      </div>

      <div className={cx('itemlist')}>
        <div className={cx('itemlist-inner', 'inner')}>
          <div className={cx('itemlist-title')}><h2>Oneday Class List</h2></div>
          <div className={cx('category-list')}>{categoryList}</div>
          <div className={cx('itemlist-box')}>
            {classList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassList;