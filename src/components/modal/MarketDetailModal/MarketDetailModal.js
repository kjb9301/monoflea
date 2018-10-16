import React, { Fragment } from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({userType,user_host_id,visible,marketDetail,onChange,editTF,onEdit,onClose,onCancel,onUpdate,onAskRemove,onApplyModal,onApply,onApplyCancel,onApplyClose}) => {
  const {host_id,market_id,market_name,market_place,market_poster,market_desc,start_date,end_date,seller_cnt,seller_limit_cnt,market_regs,reg_start_date,reg_end_date,confirmYN} = marketDetail;
  
  return (
    <ModalWrapper  visible={visible}>
      <div className={cx('detail-modal')}>
        <div className={cx('close-box')} onClick={onClose}>
          &times;
        </div>
        <div className={cx('w-50', 'd-inline-block')}>
          <div className={cx('content-box')}>
            <div className={cx('images')}>
              <img  
                src={market_poster} 
                alt={market_name}
                className={cx('poster-image')}
              />
            </div>
          </div>
        </div>
        <div className={cx('w-50', 'd-inline-block', 'p-20', 'text-left', 'right')}>
          <div className={cx('detail-top')}>{
              confirmYN === 'N' && userType !== 'H' ? 
              (
                market_regs[0] ? 
                <div className={cx('button-box')}>
                  <button className={cx('classBtn')} onClick={() => onApplyCancel(market_id)}>취소</button> 
                </div> :
                <div className={cx('button-box')}>
                  <button className={cx('classBtn')} onClick={() => onApply(market_id)}>신청</button>
                </div>
              ) :
              <Fragment></Fragment>
            }
            {
              user_host_id === host_id ? 
              <Fragment>
                {
                  confirmYN === 'N' ?
                    <Fragment>
                      {
                        editTF === false ?
                          <div className={cx('button-box')}>
                            <button className={cx('classBtn')} onClick={() => onApplyClose(market_id)}>마감하기</button>
                            <button className={cx('classBtn')} onClick={() => onApplyModal(market_id)}>참여자확인</button>
                            <button className={cx('classBtn')} onClick={onAskRemove}>삭제</button>
                            <button className={cx('classBtn')} onClick={onEdit}>수정</button>
                          </div>
                        :
                          <div className={cx('button-box')}>
                            <button className={cx('classBtn')} onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                            <button className={cx('classBtn')} onClick={() => onUpdate(market_id,editTF)}>완료</button>
                          </div>
                      }                   
                    </Fragment>  
                    :
                    <Fragment>
                      {
                        editTF === true ?
                          <div className={cx('button-box')}>
                            <button className={cx('classBtn')} onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                            <button className={cx('classBtn')} onClick={() => onUpdate(market_id,editTF)}>완료</button>
                          </div>
                        :
                          <div className={cx('button-box')}>
                            <button className={cx('classBtn')} onClick={onAskRemove}>삭제</button>
                            <button className={cx('classBtn')} onClick={onEdit}>수정</button>
                          </div>
                      }                   
                    </Fragment>
                }            
                </Fragment>
            :<Fragment></Fragment>  
          }              
          </div>
          <div className={cx('content-wrapper')}>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>마켓이름</h3>
              {
                !editTF ?
                <p className={cx('info-content')}>{market_name}</p> :
                <input className={cx('info-content')} type="text" name="market_name" value={market_name} onChange={onChange}/>
              }
            </div>
            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>주최장소</h3>
              {
                !editTF ?
                <p className={cx('info-content')}>{market_place}</p> :
                <input className={cx('info-content')} type="text" name="market_place" value={market_place} onChange={onChange}/>
              }
            </div>

            <div className={cx('info-box')}>
              <h3 className={cx('info-title')}>마켓일정</h3>
              {
                !editTF ? 
                <p className={cx('info-content')}>{start_date} ~ {end_date}</p> :
                <p className={cx('info-content')}>
                  <input className={cx('label')} type="date" name="start_date" value={start_date} onChange={onChange}/>
                  <input className={cx('label')} type="date" name="end_date" value={end_date} onChange={onChange}/>
                </p>
              }
            </div>
            {
              confirmYN === 'Y' ? 
              <Fragment></Fragment> :
              <Fragment>
              <div className={cx('info-box')}>
                <h3 className={cx('info-title')}>모집기간</h3>
              {
                !editTF ? 
                <p className={cx('info-content')}>{reg_start_date} ~ {reg_end_date}</p> :
                <p className={cx('info-content')}>
                  <input className={cx('label')} type="date" name="reg_start_date" value={reg_start_date} onChange={onChange}/>
                  <input className={cx('label')} type="date" name="reg_end_date" value={reg_end_date} onChange={onChange}/>
                </p>
              }
              </div>
              <div className={cx('info-box')}>
                <h3 className={cx('info-title')}>모집인원</h3>
                {
                  !editTF ?
                  <p className={cx('info-content')}>{seller_cnt} / {seller_limit_cnt}</p>
                  :
                  <p className={cx('info-content')}>
                    {seller_cnt} / <input className={cx('label')} type="number" name="seller_limit_cnt" value={seller_limit_cnt} onChange={onChange}/>
                  </p>
                }
              </div>
              </Fragment>
            }
            <div className={cx('detail-wrap')}>
              <h3 className={cx('info-title')}>상세설명</h3>
              {
                !editTF ?
                <p className={cx('info-content', 'line-height-1-6')}>{market_desc}</p> :
                <textarea className={cx('info-content', 'line-height-1-6')} cols="60" rows="5" name="market_desc" value={market_desc} onChange={onChange}/>
              }
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MarketDetailModal;