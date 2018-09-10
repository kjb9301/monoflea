import React from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({visible,marketDetail,onChange,editTF,onEdit,onClose,onCancel,onUpdate,onAskRemove}) => {
  const {market_id,market_name,market_place,market_poster,market_desc,start_date,end_date} = marketDetail;

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
        </div>
      }
    </ModalWrapper>
  );
};

export default MarketDetailModal;