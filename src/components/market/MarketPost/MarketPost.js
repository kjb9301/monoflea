import React from 'react';
import styles from './MarketPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';

const cx = classNames.bind(styles);

const MarketPost = ({ onChange, onCreate, changeImage }) => {
  return (
    <div className={cx('form')}>
      <div className={cx('post-wrap')}>
        <h1 className={cx('title')}>
          마켓 등록
        </h1>
        <div className={cx('content-wrap')}>
          <div className={cx('content-box')}>
            <h3 className={cx('content-title')}>
              이미지를 등록해주세요!
            </h3>
            <div className={cx('img-wrap')}>
              <div className={cx('img-list')}>
                <FaUpload className={cx('upload-img')} />
                <img 
                  src={''} 
                  alt='' 
                  ref={ref => this.poster = ref}
                  className={cx('uploaded-poster')}
                />
                <input 
                  type="file" 
                  name="poster"
                  ref={ref => this.posterFile = ref}
                  onChange={(e) => {
                    onChange(e);
                    let reader = new FileReader();
                    reader.onload = (event) => {
                      this.poster.src = event.target.result;
                    };
                    reader.readAsDataURL(this.posterFile.files[0]);
                  }}
                  className={cx('market-img')}
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
                <input 
                  type='text'
                  name='name' 
                  placeholder='마켓 이름' 
                  className={cx('market-title')}
                  onChange={onChange}
                />
              </div>
              <div className={cx('detail-wrap')}>
                <input 
                  type='text' 
                  name='place' 
                  placeholder='마켓 주최 장소' 
                  onChange={onChange}
                  className={cx('market-place')}
                />
              </div>
              <div className={cx('detail-wrap')}>
                <input 
                  type="number" 
                  name="sellerLimitCnt"
                  onChange={onChange}
                  min="1"
                  placeholder="마켓 모집 인원"
                  className={cx('market-cnt')}
                />
              </div>
              <div className={cx('detail-wrap')}>
                <div className = {cx('host-period')}>마켓 주최 기간</div>
                <div className={cx('wrap-50')}>
                  <input 
                    className={cx('period')}
                    type='date' 
                    name='startDate' 
                    onChange={onChange}
                  />
                  <span className={cx('char')}> ~ </span>
                  <input 
                    className={cx('period')}
                    type='date' 
                    name='endDate' 
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className={cx('detail-wrap')}>
                <div className = {cx('host-period')}>셀러 주최 기간</div>
                <div className={cx('wrap-50')}>
                  <input 
                    className={cx('period')}
                    type='date' 
                    name='startDate' 
                    onChange={onChange}
                  />
                  <span className={cx('char')}> ~ </span>
                  <input 
                    className={cx('period')}
                    type='date' 
                    name='endDate' 
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* <div className={cx('detail-wrap')}>
                <div className={cx('wrap-50')}>
                  <h3 className={cx('detail-sub-title')}>
                    마켓 주최 기간
                  </h3>
                  <input 
                    className={cx('period')}
                    type='date' 
                    name='startDate' 
                    onChange={onChange}
                  />
                </div>
                <span className={cx('char')}>~ </span>
                <div className={cx('wrap-50')}>
                  <input 
                    className={cx('period')}
                    type='date' 
                    name='endDate' 
                    onChange={onChange}
                  />
                </div>
              </div> 
              <div className={cx('detail-wrap')}>
               셀러 모집 기간
                <div className={cx('wrap-50')}>
                  <h3 className={cx('detail-sub-title')}>
                    셀러 모집 기간
                  </h3>
                  <input 
                    className={cx('period')} 
                    type='date' 
                    name='regStartDate' 
                    onChange={onChange}
                  />
                </div>
                <span className={cx('char')}>~ </span>
                <div className={cx('wrap-50')}>
                  <input 
                    className={cx('period')} 
                    type='date' 
                    name='regEndDate' 
                    onChange={onChange}
                  />
                </div>
                </div>*/}
            </div>
          </div>
        </div>
        <div className={cx('market-desc-wrap')}>
          <textarea 
            name="desc" 
            rows="20" 
            cols="50" 
            placeholder="상세한 설명을 적어주세요! 최소 350자 이상" 
            onChange={onChange}
            className={cx('market-desc')}
          />
        </div>
      </div>
      <div className={cx('submit-box')}>
        <button 
          className={cx('submit-btn')} 
          onClick={onCreate}
        >등록
        </button>
        <Link className={cx('cancel-btn')} to="/markets/recruitment">취소</Link>
      </div>
    </div>
  );
};

export default MarketPost;