import React from 'react';
import styles from './SignupMoreDataModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const SignupMoreDataModal = ({ visible, onCancel, onChangeValue }) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('SignupMoreDataModal')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('title')}>회원가입</div>
        <div className={cx('input-box')}>
          <div className={cx('input-container')}>
            <select name="category" onChange={onChangeValue}>
              {/* TODO: select db & map */}
              <option value="0">카테고리</option>
              <option value="1">미용</option>
              <option value="2">음식</option>
              <option value="3">뷰티</option>
              <option value="4">음악</option>
              <option value="5">예술</option>
              <option value="6">운동</option>
              <option value="7">아몰랑</option>
            </select>
          </div>
          <div className={cx('input-container')}>
            <input 
              type="number"
              className={cx('item-input')}
              placeholder="경력을 입력하세요!"
              name="career"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              className={cx('item-input')}
              placeholder="SNS 계정을 입력하세요!" 
              name="sns"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              className={cx('item-input')}
              placeholder="프로필 이미지를 등록하세요!" 
              name="profileImg"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              className={cx('item-input')}
              placeholder="비지니스" 
              name="biz"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              className={cx('item-input')}
              placeholder="설명" 
              name="desc"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              className={cx('item-input')}
              placeholder="원데이클래스" 
              name="class"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              className={cx('item-input')}
              placeholder="보여줄건가" 
              name="show"
              onChange={onChangeValue}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SignupMoreDataModal;