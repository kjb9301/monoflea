import React from 'react';
import styles from './ClassList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const ClassItem = ({name,place,poster,period,end,reg}) => {
  return (
    <div className={cx('item-boxframe')}>
      <div className={cx('item-box')}>
        <div className={cx('item-poster')}>
          <img src="https://www.ansanart.com/upload/academy/2009%20%EC%83%81%EB%B0%98%EA%B8%B0%EA%B7%9C%EB%B0%A9%EA%B3%B5%EC%98%881(1).jpg" alt={poster}/>
        </div>
        
        <div className={cx('item-contents')}>
          <div className={cx('item-name')}>원데이 클래스 강좌제목</div>
          <div className={cx('item-limit')}>모집인원 00명</div>
          <div className={cx('item-period')}>모집기간 01월1일 ~ 01월10일</div>
          <div className={cx('item-desc')}>강좌 간략설명 : 노옵션 트윌리스카프 실크 스카프 트윌리 가방스카프 리본 만들기 강좌...</div>
        </div>

        <div className={cx('item-profile')}>
          <div className={cx('item-profile-img')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HAb0mvkopiMl4x_yawY_zLhRXxPDSC7Pn9l8FLr4xiHv8Azffg"/></div>
          <div className={cx('item-nickname')}>셀러닉네임</div>
          <div className={cx('item-category')}>셀러카테고리</div>
          <div className={cx('item-place')}>강좌 개설장소 : 대한민국 서울시 서초구 </div>
        </div>
      </div>
    </div>
  );
};

const ClassList = ({markets}) => {
  const classList = markets.map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date,reg_date} = market;
      return (
        <ClassItem
          key={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          reg={reg_date}
        />
      )
    }
  );
  
  const bestClassList = markets.slice(0,4).map(
    (market) => {
      const {market_id, market_name, market_place, market_poster,market_period,end_date,reg_date} = market;
      return (
        <ClassItem
          key={market_id}
          name={market_name}
          place={market_place}
          poster={market_poster}
          period={market_period}
          end={end_date}
          reg={reg_date}
        />
      )
    }
  ); 
 
  return (
    <div className={cx('wrapper')}>
      <div className={cx('visual')}>
        <div className={cx('inner')}>
          <h1>Oneday Class</h1>
          <p>"일상의 작은 <strong>'소확행'</strong> 관심 있던 수업을 체험 해보고 나의 취미를 찾아보세요"</p>
        </div>
      </div>

      <div className={cx('best-itemlist')}>
        <div className={cx('inner')}>
          <h2>Best Oneday Class</h2>
          <div class={cx('itemlist-box')}>
            {bestClassList}
          </div>
        </div>
      </div>

      <div className={cx('itemlist')}>
        <div className={cx('inner')}>
          <h2>Oneday Class List</h2>
          <div class={cx('itemlist-box')}>
            {classList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassList;