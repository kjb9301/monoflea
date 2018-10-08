import React from 'react';
import styles from './ClassPost.scss';
import classNames from 'classnames/bind';
import { FaUpload } from 'react-icons/fa';

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
      <div className={cx('post-wrap')}>
        <h1 className={cx('title')}>
          원데이클래스 등록
        </h1>
        <div className={cx('content-wrap')}>
          <div className={cx('content-box')}>
            <h3 className={cx('content-title')}>
              이미지를 등록해주세요!
            </h3>
            <div className={cx('img-wrap')}>
              <div className={cx('img-list')}>
                <FaUpload className={cx('upload-img')} />
                <input 
                  type="file"
                  name="class_img1"
                  onChange={changeValue}
                  className={cx('oneday-img')}
                />
              </div>
              <div className={cx('img-list')}>
                <FaUpload className={cx('upload-img')} /> 
                <input 
                  type="file"
                  name="class_img2"
                  onChange={changeValue}
                  className={cx('oneday-img')}
                />
              </div>
              <div className={cx('img-list')}>
                <FaUpload className={cx('upload-img')} /> 
                <input 
                  type="file"
                  name="class_img3"
                  onChange={changeValue}
                  className={cx('oneday-img')}
                />
              </div>
              <div className={cx('img-list')}>
                <FaUpload className={cx('upload-img')} /> 
                <input 
                  type="file"
                  name="class_img4"
                  onChange={changeValue}
                  className={cx('oneday-img')}
                />
              </div>
              <div className={cx('img-list')}>
                <FaUpload className={cx('upload-img')} /> 
                <input 
                  type="file"
                  name="class_img5"
                  onChange={changeValue}
                  className={cx('oneday-img')}
                />
              </div>
            </div>
          </div>
          <div className={cx('content-box')}>
            <h3 className={cx('content-title')}>
              상세정보를 입력하세요!
            </h3>
            <div className={cx('content-detail')}>
              <div className={cx('detail-wrap')}>
                <select
                  name="class_category_id" 
                  onChange={changeValue}
                  className={cx('content-category')}
                >
                  <option value="0">카테고리</option>
                  {classCategories}
                </select>              
              </div>
              <div className={cx('detail-wrap')}>
                <input
                  type='text'
                  name='class_name'
                  placeholder='클래스 이름을 입력해주세요!'
                  onChange={changeValue}
                  className={cx('class-title')}
                />
              </div>
              <div className={cx('detail-wrap')}>
                <input 
                  type='text'
                  name='class_place'
                  placeholder='클래스 주최 장소를 입력해주세요!'
                  onChange={changeValue}
                  className={cx('class-place')}
                />
              </div>
              <div className={cx('detail-wrap')}>
                <div className={cx('wrap-50')}>
                  <h3 className={cx('detail-sub-title')}>
                    클래스 주최 날짜를 입력해주세요!
                  </h3>
                  <input 
                    type='date'
                    name='event_date'
                    onChange={changeValue}
                    className={cx('class-event-date')}
                  />
                </div>
                <span className={cx('char', 'large-none')}>|</span>
                <div className={cx('wrap-50')}>
                  <h3 className={cx('detail-sub-title')}>
                    클래스 모집 인원을 설정하세요!
                  </h3>
                  <input
                    type="number"
                    name="class_limit_cnt"
                    min="1"
                    placeholder="1"
                    onChange={changeValue}
                    className={cx('class-limit-cnt')}
                  />
                </div>
              </div>
              <div className={cx('detail-wrap')}>
                <div className={cx('wrap-50')}>
                  <h3 className={cx('detail-sub-title')}>
                    클래스 모집 기간을 설정하세요!
                  </h3>
                  <input 
                    type='date'
                    name='recruit_start_date'
                    onChange={changeValue}
                    className={cx('class-start-date')}
                  /> 
                </div>
                <span className={cx('char')}>~</span>
                <div className={cx('wrap-50')}>
                  <input 
                    type='date'
                    name='recruit_end_date'
                    onChange={changeValue}
                    className={cx('class-end-date')}
                  />
                </div>
            </div>  
          </div>
        </div>
      </div> 
      <div className={cx('class-desc-wrap')}>
        <textarea 
          name="class_desc" 
          rows="20" 
          cols="50" 
          placeholder="클래스에 대한 상세한 설명을 적어주세요! 최소 350자 이상"
          onChange={changeValue}
          className={cx('class-desc')}
        />
      </div>
    </div>
    <div className={cx('submit-box')}>
      <button
        className={cx('submit-btn')}
        onClick={postNewClass}
      >등록하기
      </button>
    </div>
  </div>
    
  );
};

export default ClassPost;