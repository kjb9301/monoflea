import React from 'react';
import styles from './ClassPost.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ClassPost = ({ categories, changeValue, postNewClass }) => {
  const classCategories = categories.map(category => {
    const { class_category_id, category_ko_name } = category;
    return (
      <option 
        key={class_category_id}
        value={class_category_id}
      >{category_ko_name}
      </option>
    )
  })

  return (
    <div className={cx('wrap')}>
      <h1 className={cx('title')}>
        원데이클래스 등록
      </h1>
      <div className={cx('content-wrap')}>
        <div className={cx('input-box')}>
          <select name="class_category" onChange={changeValue}>
            <option value="0">카테고리</option>
            {classCategories}
          </select>
        </div>
        <div className={cx('input-box')}>
          <input
            type='text'
            name='class_name'
            placeholder='클래스 이름을 입력해주세요!'
            onChange={changeValue}
          />
        </div>
        <div className={cx('input-box')}>
          <input 
            type='text'
            name='class_place'
            placeholder='클래스 주최 장소를 입력해주세요!'
            onChange={changeValue}
          />
        </div>
        <div className={cx('input-box')}>
          <div>
            <label htmlFor='event_date'>클래스 주최 날짜를 입력해주세요!</label>
          </div>
          <input 
            type='date'
            name='event_date'
            onChange={changeValue}
          />
        </div>
        <div className={cx('input-box')}>
          <div>
            <label htmlFor='recruit_date'>클래스 모집 기간을 설정하세요!</label>
          </div>
          <input 
            className={cx('recruit_date')}
            type='date'
            name='recruit_start_date'
            onChange={changeValue}
          />
          <input 
            className={cx('recruit_date')}
            type='date'
            name='recruit_end_date'
            onChange={changeValue}
          />
        </div>
        <div className={cx('input-box')}>
          <div>
            <label htmlFor='recruit_number'>클래스 모집 인원을 설정하세요!</label>
          </div>
          <input
            type="number"
            name="class_limit_cnt"
            onChange={changeValue}
          />
        </div>
        <div className={cx('input-box')}>
          <textarea 
            name="class_desc" 
            rows="20" 
            cols="50" 
            placeholder="클래스에 대한 상세한 설명을 적어주세요! 최소 350자 이상"
            onChange={changeValue}>
          </textarea>
        </div>
        <div className={cx('input-box')}>
          <div>
            <label htmlFor='class_imgs'>원데이 클래스 관련 이미지를 업로드해주세요! (최대 5개)</label>
          </div>
          <input 
            type="file"
            name="class_img1"
            onChange={changeValue}
          />
          <input 
            type="file"
            name="class_img2"
            onChange={changeValue}
          />
          <input 
            type="file"
            name="class_img3"
            onChange={changeValue}
          />
          <input 
            type="file"
            name="class_img4"
            onChange={changeValue}
          />
          <input 
            type="file"
            name="class_img5"
            onChange={changeValue}
          />
        </div>
        <div className={cx('submit-box')}>
          <button
            className={cx('submit-btn')}
            onClick={postNewClass}
          >등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassPost;