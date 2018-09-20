import React from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({userType,visible,marketDetail,onChange,editTF,onEdit,onClose,onCancel,onUpdate,onAskRemove,onApplyModal,onApply,applyTF,onApplyCancel}) => {
  const {market_id,market_name,market_place,market_poster,market_desc,start_date,end_date,seller_cnt,seller_limit_cnt,market_regs} = marketDetail;
  console.log(market_regs[0]);
  return (
    <ModalWrapper visible={visible}>
      {editTF === true?
        <div className={cx('modalForm')}>
          <div className={cx('close')} onClick={onClose}>&times;</div>
          <div className={cx('wrapper')}>
            <div className={cx('info')}>
              <div>
                <input type="text" name="market_name" value={market_name} onChange={onChange}/>
              </div>
              <div>
                <input type="text" name="market_place" value={market_place} onChange={onChange}/>
              </div>
              <div>
                <input type="date" name="start_date" value={start_date} onChange={onChange}/> ~ 
                <input type="date" name="end_date" value={end_date} onChange={onChange}/>
              </div>
            </div>
            <div className={cx('poster')}>
              <img src={market_poster}/>
            </div>
            <div className={cx('desc')}>
              <textarea cols="40" rows="5" name="market_desc" value={market_desc} onChange={onChange}/>
            </div>
          </div>
          <div>
            <button onClick={() => onCancel(market_id)}>취소</button>
            <button onClick={() => onUpdate(market_id,editTF)}>완료</button>
          </div>
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
            {/* <div><span>모집분야</span>{onedayCategory.category_ko_name}</div> */}
            {/* <div className={cx('classNickname')}><span>아이디</span>{seller.user.nickName}</div> */}
            <div><span className={cx('marketPlace')}>개설장소</span><span className={cx('marketPlaceContent')}>{market_place}</span></div>
            <div><span>마켓일정</span>{start_date}~{end_date}</div>
            {/* <div><span>개설일자</span>{reg_date}</div> */}
            <div><span>모집기간</span>////////////////</div>
            <div><span>모집인원</span>{seller_cnt}/{seller_limit_cnt}</div>
          </div>
        {userType === 'S'?
          <div className={cx('classBtn')}>
            {market_regs[0]?
              <button onClick={() => onApplyCancel(market_id,applyTF)}>취소하기</button>
            :
              <button onClick={() => onApply(market_id,applyTF)}>신청하기</button>
            }
          </div>
        :
          <div className={cx('classBtn')}>
            <button>마감하기</button>
            <button onClick={() => onApplyModal(market_id)}>참여자확인</button>
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        }  
        </div>
        <div className={cx('modalDesc')}>상세설명 : {market_desc}</div>
      </div>
      }

       {/* <div className={cx('modalForm')}>
          <div className={cx('close')} onClick={onClose}>&times;</div>
          <div className={cx('wrapper')}>
            <div className={cx('info')}>
              <div>{market_name}</div>
              <div>{market_place}</div>
              <div>{start_date} ~ {end_date}</div>
            </div>
            <div className={cx('poster')}>
              <img src={market_poster}/>
            </div>
            <div className={cx('desc')}>{market_desc}</div>
          </div>
          <div>
            <button onClick={onAskRemove}>삭제</button>
            <button onClick={onEdit}>수정</button>
          </div>
        </div> */}
    </ModalWrapper>
  );
};

export default MarketDetailModal;