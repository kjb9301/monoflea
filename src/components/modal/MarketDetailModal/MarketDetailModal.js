import React from 'react';
import styles from './MarketDetailModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const MarketDetailModal = ({id,visible,marketDetail,onCancel,onAskRemove,onUpdateTF,updateTF,onUpdate,onChange}) => {
  const {market_name,market_place,market_poster,market_desc,market_period,end_date} = marketDetail;
  return (
    <ModalWrapper visible={visible}>
      {updateTF === true?
        <div className={cx('modalForm')}>
          <div className={cx('close')} onClick={onCancel}>&times;</div>
          <div className={cx('wrapper')}>
            <div className={cx('info')}>
              <div>
                <input type="text" name="name" value={market_name} onChange={onChange}/>
              </div>
              <div>
                <input type="text" name="place" value={market_place} onChange={onChange}/>
              </div>
              <div>
                <input type="date" name="period" value={market_period} onChange={onChange}/> ~ 
                <input type="date" name="endDate" value={end_date} onChange={onChange}/>
              </div>
            </div>
            <div className={cx('poster')}>
              <img src={market_poster}/>
            </div>
            <div className={cx('desc')}>
              <textarea cols="40" rows="5" name="desc" value={market_desc} onChange={onChange}/>
            </div>
          </div>
          <div>
            <button>취소</button>
            <button onClick={() => onUpdate(id)}>수정</button>
          </div>
        </div>
      :
        <div className={cx('modalForm')}>
          <div className={cx('close')} onClick={onCancel}>&times;</div>
          <div className={cx('wrapper')}>
            <div className={cx('info')}>
              <div>
                <p>{market_name}</p>
              </div>
             <div>
                <p>{market_place}</p>
              </div>
              <div>{market_period} ~ {end_date}</div>
            </div>
            <div className={cx('poster')}>
              <img src={market_poster}/>
            </div>
            <div className={cx('desc')}>
              <p>{market_desc}</p>
            </div>
          </div>
          <div>
            <button onClick={onAskRemove}>삭제</button>
            <button onClick={onUpdateTF}>수정</button>
          </div>
        </div>
      }
    </ModalWrapper>
  );
};

export default MarketDetailModal;