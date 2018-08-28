import React from 'react';
import styles from './ClassList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';



const cx = classNames.bind(styles);

const ClassItem = ({name, desc, place, limit, reg, date, images, category}) => {
  return (
    <div className={cx('item-boxframe')}>
      <div className={cx('item-box')}>
        <div className={cx('item-poster')}>
          <img src={images} />
        </div>
        
        <div className={cx('item-contents')}>
          <div className={cx('item-name')}>{name}</div>
          <div className={cx('item-limit')}>모집인원 : {limit}</div>
          <div className={cx('item-period')}>모집기간 {date}</div>
          <div className={cx('item-desc')}>{desc}</div>
        </div>

        <div className={cx('item-profile')}>
          <div className={cx('item-profile-img')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HAb0mvkopiMl4x_yawY_zLhRXxPDSC7Pn9l8FLr4xiHv8Azffg"/></div>
          <div className={cx('item-nickname')}>셀러닉네임</div>
          <div className={cx('item-category')}>{category}</div>
          <div className={cx('item-place')}>{place}</div>
        </div>
      </div>
    </div>
  );
};

const ClassList = ({onedayLists}) => {

  console.log('=============== <ClassList classItems> 내용 =========');
  console.log(onedayLists);
  
  const classList = onedayLists.map(
    (onedayList) => {
      const {class_id, seller_id, class_name, class_desc, class_place, class_limit_cnt, class_reg_cnt, reg_date, onedayImages, onedayCategory} = onedayList;
      return (
        <ClassItem
          key={class_id}
          seller = {seller_id}
          name={class_name}
          desc={class_desc}
          place={class_place}
          limit={class_limit_cnt}
          reg={class_reg_cnt}
          date={reg_date}
          images = {onedayImages[0].class_imgurl}
          category = {onedayCategory.category_ko_name}
        />
      )
    }
  );

  // const bestClassList = classLists.slice(0,4).map(
  //   (classLists) => {
  //     const {class_id, class_name, class_desc, class_place, class_limit_cnt, class_reg_cnt, reg_date} = classLists;
  //     return (
  //       <ClassItem
  //         key={class_id}
  //         name={class_name}
  //         desc={class_desc}
  //         place={class_place}
  //         limit={class_limit_cnt}
  //         reg={class_reg_cnt}
  //         date={reg_date}
  //       />
  //     )
  //   }
  // ); 
 
  return (
    <div className={cx('wrapper')}>
      <div className={cx('visual')}>
        <div className={cx('inner')}>
          <h1>Oneday Class</h1>
          <p>"일상의 작은 <strong>'소.확.행'</strong> 관심 있던 수업을 체험 해보고 나의 취미를 찾아보세요"</p>
        </div>
      </div>

      <div className={cx('best-itemlist')}>
        <div className={cx('inner')}>
          <h2>Best Oneday Class</h2>
          <div className={cx('itemlist-box')}>
            {/* {bestClassList} */}
          </div>
        </div>
      </div>

      <div className={cx('itemlist')}>
        <div className={cx('inner')}>
          <h2>Oneday Class List</h2>
          <div className={cx('itemlist-box')}>
            {classList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassList;