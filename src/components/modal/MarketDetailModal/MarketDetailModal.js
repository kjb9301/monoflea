import React, { Fragment } from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({userType,user_host_id,visible,marketDetail,onChange,editTF,onEdit,onClose,onCancel,onUpdate,onAskRemove,onApplyModal,onApply,onApplyCancel,onApplyClose}) => {
  const {host_id,market_id,market_name,market_place,market_poster,market_desc,start_date,end_date,seller_cnt,seller_limit_cnt,market_regs,reg_start_date,reg_end_date,confirmYN} = marketDetail;

  return (
    <ModalWrapper visible={visible}>
      <div className={cx('modalForm')}>
        <div className={cx('close-box')}>
          <span className={cx('close')} onClick={onClose}>&times;</span>
        </div>
        <div className={cx('wrapper')}>
          <div className={cx('marketPosterWrap')}>
            <img 
              src={market_poster} 
              alt={market_name}
              className={cx('marketPoster')}
            />
          </div>
        </div>
        <div className={cx('wrapper')}>
          <div className={cx('data-wrap')}>
            <div className={cx('animation')}>
              <span className={cx('label')}>마켓이름</span>
            </div>
            <div className={cx('content-box')}>
              <p className={cx('content-title')}>{market_name}</p>
            </div>
          </div>
          <div className={cx('data-wrap')}>
            <div className={cx('animation')}>
              <span className={cx('label')}>개설장소</span>
            </div>
            <div className={cx('content-box')}>
              <p className={cx('content-title')}>{market_place}</p>
            </div>
          </div>
          <div className={cx('data-wrap')}>
            <div className={cx('animation')}>
              <span className={cx('label')}>마켓일정</span>
            </div>
            <div className={cx('content-box')}>
              <p className={cx('content-title')}>
                <span>{start_date}</span>
                <span className={cx('char')}> ~ </span>
                <span>{end_date}</span>
              </p>
            </div>
          </div>
          {
            confirmYN === 'Y' ? 
            <Fragment></Fragment> :
            <Fragment>
              <div className={cx('data-wrap')}>
                <div className={cx('animation')}>
                  <span className={cx('label')}>모집기간</span>
                </div>
                <div className={cx('content-box')}>
                  <p className={cx('content-title')}>
                    <span>{reg_start_date}</span>
                    <span className={cx('char')}> ~ </span>
                    <span>{reg_end_date}</span>
                  </p>
                </div>
              </div>
              <div className={cx('data-wrap')}>
                <div className={cx('animation')}>
                  <span className={cx('label')}>모집인원</span>
                </div>
                <div className={cx('content-box')}>
                  <p className={cx('content-title')}>
                    <span>{seller_cnt}</span>
                    <span className={cx('char')}> / </span>
                    <span>{seller_limit_cnt}</span>
                  </p>
                </div>  
              </div>
           </Fragment>
          }
          <div className={cx('data-wrap')}>
            <div className={cx('animation')}>
              <span className={cx('label')}>상세정보</span>
            </div>
            <div className={cx('content-box')}>
              <p className={cx('content-title')}>{market_desc}</p>
            </div>
          </div>
        </div>
        <div className={cx('button-wrap')}>
          {
            confirmYN === 'N' && userType !== 'H' ? 
            (
              market_regs[0] ? 
              <button className={cx('market-button')} onClick={() => onApplyCancel(market_id)}>취소</button> :
              <button className={cx('market-button')} onClick={() => onApply(market_id)}>신청</button>
            ) :
            <Fragment></Fragment>
          }
          {
            user_host_id === host_id ? 
            <Fragment>
              {
                confirmYN === 'N' ?
                  <Fragment>
                    <button className={cx('market-button')} onClick={() => onApplyClose(market_id)}>마감하기</button>
                    <button className={cx('market-button')} onClick={() => onApplyModal(market_id)}>참여자확인</button>
                  </Fragment>  
                  :
                  <Fragment></Fragment>
              }            
              {
                editTF === 'false' ?
                  <Fragment>
                    <button className={cx('market-button')} onClick={onAskRemove}>삭제</button>
                    <button className={cx('market-button')} onClick={onEdit}>수정</button>
                  </Fragment>
                  :
                  <Fragment>
                    <button className={cx('market-button')} onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                    <button className={cx('market-button')} onClick={() => onUpdate(market_id,editTF)}>완료</button>
                  </Fragment>
              }
            </Fragment> :
            <Fragment></Fragment>  
          }             
        </div>
      </div>
      {/* <div>
      {confirmYN === 'Y'?
        <div>
        {editTF === true?
          <div className={cx('modalForm')}>
            <div className={cx('close-box')}>
              <span className={cx('close')} onClick={onClose}>&times;</span>
            </div>
            <div className={cx('modalTitle')}>
              <div className={cx('marketPoster')}><img src={market_poster} alt={market_name}/></div>
            </div>
            <div className={cx('modalInfo')}>  
              <div className={cx('marketInfo')}>
                <div className={cx('marketName')}>
                  <div className={cx('animation')}>
                    <span className={cx('label')}>마켓이름</span>
                  </div>
                  <div className={cx('content-box')}>
                    <input type="text" name="market_name" placeholder="&nbsp;" value={market_name} onChange={onChange}/>
                  </div>
                </div>
                <div className={cx('marketPlace')}>
                  <div className={cx('animation')}>
                    <span className={cx('label')}>개설장소</span>
                  </div>
                  <div className={cx('content-box')}>
                    <input type="text" name="market_place" placeholder="&nbsp;" value={market_place} onChange={onChange}/>
                  </div>
                  <div className={cx('animation')}>
                    <span className={cx('label')}>마켓일정</span>
                  </div>
                </div>
                <div className={cx('marketPeriod')}>
                  <div className={cx('content-box')}>
                    <input type="date" name="start_date" placeholder="&nbsp;" value={start_date} onChange={onChange} className={cx('date')}/> ~ 
                    <input type="date" name="end_date" placeholder="&nbsp;" value={end_date} onChange={onChange} className={cx('date')}/>
                  </div>
                </div>
                <div className={cx('modalDesc')}>
                  <div className={cx('label')}>상세설명</div>
                  <textarea cols="40" rows="5" name="market_desc" value={market_desc} onChange={onChange}/>
                </div>
              </div>
              {user_host_id === host_id?
                <div className={cx('classBtn')}>
                  <button onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                  <button onClick={() => onUpdate(market_id,editTF)}>완료</button>
                </div>
              :
                <div></div>
              }
            </div>
          </div>
        :
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={onClose}>&times;</span>
            <div className={cx('modalTitle')}>
              <div className={cx('marketPoster')}><img src={market_poster} alt="market_name"/></div>
            </div>
            <div className={cx('modalInfo')}>
              <div className={cx('marketInfo')}>
                <div className={cx('marketName')}>
                <span className={cx('marketInfoTitle')}>마켓이름</span>
                  <span className={cx('marketPlaceContent')}>{market_name}</span>
                </div>
                <div className={cx('marketPlace')}>
                  <span className={cx('marketInfoTitle')}>개설장소</span>
                  <span className={cx('marketPlaceContent')}>{market_place}</span>
                </div>
                <div className={cx('marketPeriod')}>
                  <span className={cx('marketInfoTitle')}>마켓일정</span>
                  {start_date}~{end_date}
                </div>
                <div className={cx('modalDesc')}>
                  <h3>상세설명</h3>
                  
                  <p>{market_desc}</p>
                </div>
              </div>
              {user_host_id === host_id?
                <div className={cx('classBtn')}>
                  <button onClick={onAskRemove}>삭제</button>
                  <button onClick={onEdit}>수정</button>
                </div>
                :
                <div></div>
              }
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
                <div className={cx('marketPoster')}><img src={market_poster} alt={market_name}/></div>
                <div className={cx('marketInfo')}>
                  <div className={cx('marketPlace')}>
                    <span className={cx('marketInfoTitle')}>개설장소</span><span className={cx('marketPlaceContent')}>{market_place}</span>
                  </div>
                  <div className={cx('marketPeriod')}><span className={cx('marketInfoTitle')}>마켓일정</span>{start_date}~{end_date}</div>
                  <div className={cx('marketRegDate')}><span className={cx('marketInfoTitle')}>모집기간</span>{reg_start_date}~{reg_end_date}</div>
                  <div className={cx('marketLimitCnt')}><span className={cx('marketInfoTitle')}>모집인원</span>{seller_cnt}/{seller_limit_cnt}</div>
                </div>
                {user_host_id === host_id?
                  <div className={cx('classBtn')}>
                    <button onClick={() => onApplyClose(market_id)}>마감하기</button>
                    <button onClick={() => onApplyModal(market_id)}>참여자확인</button>
                    <button onClick={onEdit}>수정하기</button>
                    <button onClick={onAskRemove}>삭제하기</button>
                  </div>
                  :
                  <div></div>
                }
                <div className={cx('modalDesc')}>
                  <h3>상세설명</h3>
                  <p>{market_desc}</p>
                </div>
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
                  <img src={market_poster} alt={market_name}/>
                </div>
                <div className={cx('marketInfo')}>     
                  <div className={cx('marketPlace')}>
                    <span className={cx('marketInfoTitle')}>개설장소</span>
                    <span className={cx('marketPlaceContent')}>
                      <input type="text" name="market_place" value={market_place} onChange={onChange}/>
                    </span>
                  </div>
                  <div className={cx('marketPeriod')}>
                    <span className={cx('marketInfoTitle')}>마켓일정</span>
                    <input type="date" name="start_date" value={start_date} onChange={onChange}/> ~ 
                    <input type="date" name="end_date" value={end_date} onChange={onChange}/>  
                  </div>
                  <div className={cx('marketRegDate')}>
                    <span className={cx('marketInfoTitle')}>모집기간</span>
                    <input type="date" name="reg_start_date" value={reg_start_date} onChange={onChange}/> ~ 
                    <input type="date" name="reg_end_date" value={reg_end_date} onChange={onChange}/>  
                  </div>
                  <div className={cx('marketLimitCnt')}>
                    <span className={cx('marketInfoTitle')}>모집인원</span>
                    {seller_cnt}/<input type="number" name="seller_limit_cnt" value={seller_limit_cnt} onChange={onChange}/> 
                  </div>
                  {user_host_id === host_id?
                    <div className={cx('classBtn')}>
                      <button onClick={() => onCancel(market_id,confirmYN)}>취소</button>
                      <button onClick={() => onUpdate(market_id,editTF)}>완료</button>
                    </div>
                    :
                    <div></div>
                  }
                  <div className={cx('modalDesc')}>
                    <h3>상세설명</h3>
                    <p>{market_desc}</p>
                  </div>                  
                </div>
              </div>
            </div>
          }
          </div>
        :
          <div className={cx('modalForm')}>
            <span className={cx('close')} onClick={onClose}>&times;</span>
            <div className={cx('modalTitle')}>
              <div className={cx('marketPoster')}>
                <img src={market_poster} alt={market_name}/>
              </div>
            </div>
            <div className={cx('modalInfo')}>
              
              <div className={cx('marketInfo')}>
                <div className={cx('marketName')}><span className={cx('marketInfoTitle')}>마켓이름</span>{market_name}</div>
                <div className={cx('marketPlace')}>
                  <span className={cx('marketInfoTitle')}>개설장소</span>
                  <strong className={cx('marketPlaceContent')}>{market_place}</strong>
                </div>
                <div className={cx('marketPeriod')}><span className={cx('marketInfoTitle')}>마켓일정</span>{start_date} ~ {end_date}</div>
                <div className={cx('marketRegDate')}><span className={cx('marketInfoTitle')}>모집기간</span>{reg_start_date} ~ {reg_end_date}</div>
                <div className={cx('marketLimitCnt')}><span className={cx('marketInfoTitle')}>모집인원</span>{seller_cnt} / {seller_limit_cnt}</div>
                <div className={cx('modalDesc')}>
                  <div className={cx('label')}>상세설명</div>
                  <textarea cols="40" rows="5" name="market_desc" value={market_desc} readOnly/>
                </div>
              </div>
              <div className={cx('classBtn')}>
                <div>
                {market_regs[0]?
                  <button onClick={() => onApplyCancel(market_id)}>취소</button> 
                :
                  <button onClick={() => onApply(market_id)}>신청</button>
                }
                </div>
              </div>
              
            </div>
          </div>
        }
        </div>
      }
      </div> */}
    </ModalWrapper>
  );
};

export default MarketDetailModal;