import React from 'react';
import Fragment from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({userType,visible,marketDetail,onChange,editTF,onEdit,onClose,onCancel,onUpdate,onAskRemove,onApplyModal,onApply,onApplyCancel,onApplyClose}) => {
  const {market_id,market_name,market_place,market_poster,market_desc,start_date,end_date,seller_cnt,seller_limit_cnt,market_regs,reg_start_date,reg_end_date,confirmYN} = marketDetail;

  return (
    <ModalWrapper visible={visible}>
      <div>
      {confirmYN === 'Y'?
        <div>
        {editTF === true?
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={onClose}>&times;</span>
            <div className={cx('modalTitle')}>
              <span className={cx('marketName')}>
                <input type="text" name="market_name" value={market_name} onChange={onChange}/>
              </span>
            </div>
            <div className={cx('modalInfo')}>
              <div className={cx('marketPoster')}>
                <img src={market_poster} />
              </div>
              <div className={cx('marketInfo')}>
                <div>
                  <span className={cx('marketPlace')}>개설장소</span>
                  <span className={cx('marketPlaceContent')}>
                    <input type="text" name="market_place" value={market_place} onChange={onChange}/>
                  </span>
                </div>
                <div>
                  <span>마켓일정</span>
                  <input type="date" name="start_date" value={start_date} onChange={onChange}/> ~ 
                  <input type="date" name="end_date" value={end_date} onChange={onChange}/>  
                </div>
              </div>
              <div className={cx('classBtn')}>
                <button onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                <button onClick={() => onUpdate(market_id,editTF)}>완료</button>
              </div>
              <div className={cx('modalDesc')}>
                상세설명 : <textarea cols="40" rows="5" name="market_desc" value={market_desc} onChange={onChange}/>
              </div>
            </div>
          </div>
        :
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={onClose}>&times;</span>
            <div className={cx('modalTitle')}>
              <span className={cx('marketName')}>
                {market_name}
              </span>
            </div>
            <div className={cx('modalInfo')}>
              <div className={cx('marketPoster')}>
                <img src={market_poster} />
              </div>
              <div className={cx('marketInfo')}>
                <div><span className={cx('marketPlace')}>개설장소</span><span className={cx('marketPlaceContent')}>{market_place}</span></div>
                <div><span>마켓일정</span>{start_date}~{end_date}</div>
              </div>
              <div className={cx('classBtn')}>
                <button onClick={onAskRemove}>삭제</button>
                <button onClick={onEdit}>수정</button>
              </div>
              <div className={cx('modalDesc')}>상세설명 : {market_desc}</div>
            </div>
          </div>
        }
        </div>        
      :
        <div>
        {userType === 'H'?
          <div>
          {editTF === false?
            <div className={cx('modalForm')}>
              <span className={cx('close')} onClick={onClose}>&times;</span>
              <div className={cx('modalTitle')}>
                <span className={cx('marketName')}>{market_name}</span>
              </div>
              <div className={cx('modalInfo')}>
                <div className={cx('marketPoster')}>
                  <img src={market_poster} />
                </div>
                <div className={cx('marketInfo')}>
                  <div>
                    <span className={cx('marketPlace')}>개설장소</span>
                    <span className={cx('marketPlaceContent')}>{market_place}</span>
                  </div>
                  <div><span>마켓일정</span>{start_date}~{end_date}</div>
                  <div><span>모집기간</span>{reg_start_date}~{reg_end_date}</div>
                  <div><span>모집인원</span>{seller_cnt}/{seller_limit_cnt}</div>
                </div>
                <div className={cx('classBtn')}>
                  <button onClick={() => onApplyClose(market_id)}>마감하기</button>
                  <button onClick={() => onApplyModal(market_id)}>참여자확인</button>
                  <button onClick={onEdit}>수정하기</button>
                  <button onClick={onAskRemove}>삭제하기</button>
                </div>
                <div className={cx('modalDesc')}>상세설명 : {market_desc}</div>
              </div>
            </div>
            :
            <div className={cx('modalForm')}>
              <span className={cx('close')} onClick={onClose}>&times;</span>
              <div className={cx('modalTitle')}>
                <span className={cx('marketName')}>
                  <input type="text" name="market_name" value={market_name} onChange={onChange}/>
                </span>
              </div>
              <div className={cx('modalInfo')}>
                <div className={cx('marketPoster')}>
                  <img src={market_poster} />
                </div>
                <div className={cx('marketInfo')}>     
                  <div>
                    <span className={cx('marketPlace')}>개설장소</span>
                    <span className={cx('marketPlaceContent')}>
                      <input type="text" name="market_place" value={market_place} onChange={onChange}/>
                    </span>
                  </div>
                  <div>
                    <span>마켓일정</span>
                    <input type="date" name="start_date" value={start_date} onChange={onChange}/> ~ 
                    <input type="date" name="end_date" value={end_date} onChange={onChange}/>  
                  </div>
                  <div>
                    <span>모집기간</span>
                    <input type="date" name="reg_start_date" value={reg_start_date} onChange={onChange}/> ~ 
                    <input type="date" name="reg_end_date" value={reg_end_date} onChange={onChange}/>  
                  </div>
                  <div>
                    <span>모집인원</span>
                    {seller_cnt}/<input type="number" name="seller_limit_cnt" value={seller_limit_cnt} onChange={onChange}/> 
                  </div>
                  <div className={cx('classBtn')}>
                    <button onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                    <button onClick={() => onUpdate(market_id,editTF)}>완료</button>
                  </div>
                  <div className={cx('modalDesc')}>상세설명 : {market_desc}</div>
                </div>
              </div>
            </div>
          }
          </div>
        :
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={onClose}>&times;</span>
            <div className={cx('modalTitle')}>
              <span className={cx('marketName')}>{market_name}</span>
            </div>
            <div className={cx('modalInfo')}>
              <div className={cx('marketPoster')}>
                <img src={market_poster} />
              </div>
              <div className={cx('marketInfo')}>
                <div>
                  <span className={cx('marketPlace')}>개설장소</span>
                  <span className={cx('marketPlaceContent')}>{market_place}</span>
                </div>
                <div><span>마켓일정</span>{start_date}~{end_date}</div>
                <div><span>모집기간</span>{reg_start_date}~{reg_end_date}</div>
                <div><span>모집인원</span>{seller_cnt}/{seller_limit_cnt}</div>
              </div>
              <div className={cx('classBtn')}>
                <div>
                {market_regs[0]?
                  <button onClick={onApply}>신청</button>
                :
                  <button onClick={onApplyCancel}>취소</button>
                }
                </div>
              </div>
              <div className={cx('modalDesc')}>상세설명 : {market_desc}</div>
            </div>
          </div>
        }
        </div>
      }
      </div>
    </ModalWrapper>
  );
};

export default MarketDetailModal;