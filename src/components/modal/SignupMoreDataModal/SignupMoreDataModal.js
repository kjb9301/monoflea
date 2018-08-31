import React, { Fragment } from 'react';
import styles from './SignupMoreDataModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const SignupMoreDataModal = ({ visible, nickName, sellerCategory, userType, onCancel, onChangeValue, onSignup, onMovePrev }) => {
  let categories = sellerCategory.map(category => {
    let { category_id, category_ko } = category;
   return (
     <option key={category_id} value={category_id}>{category_ko}</option>
   ); 
  });

  return (
    <ModalWrapper visible={visible}>
      <div className={cx('SignupMoreDataModal')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('title')}>회원가입</div>
        <div className={cx('input-box')}>
          {
            userType === 'H' ? null :
            <div className={cx('input-container')}>
              <select name="category" onChange={onChangeValue}>
                {/* TODO: select db & map */}
                <option value="0">카테고리</option>
                {categories}
              </select>
            </div>
          }
          <div className={cx('input-container')}>
            <input
              type="text"
              className={cx('item-input')}
              placeholder="이름을 입력하세요!" 
              name="name"
              onChange={onChangeValue}
            />
          </div>
          <div className={cx('input-container')}>
            <input 
              type="tel"
              className={cx('item-input')}
              placeholder="전화번호를 입력하세요! (ex. 010-1234-1234)" 
              name="tel"
              onChange={onChangeValue}
            />
          </div>
          {
            userType === 'H' ? null :
            <Fragment>
              <div className={cx('input-container')}>
                <input 
                  type="number"
                  min="0"
                  className={cx('item-input')}
                  placeholder="경력을 입력하세요!"
                  name="career"
                  onChange={onChangeValue}
                />
              </div>
              <div className={cx('input-container')}>
                <input
                  type="text"
                  className={cx('item-input')}
                  placeholder="SNS 계정을 입력하세요!" 
                  name="sns"
                  onChange={onChangeValue}
                />
              </div>
              <div className={cx('input-container')}>
                <input
                  type="text"
                  className={cx('item-input')}
                  placeholder="프로필 이미지를 등록하세요!" 
                  name="profileImg"
                  onChange={onChangeValue}
                />
              </div>
              <div className={cx('input-container')}>
                <input
                  type="text"
                  className={cx('item-input')}
                  placeholder="사업자 여부를 입력하세요(Y/N)" 
                  name="biz"
                  onChange={onChangeValue}
                />
              </div>
              <div className={cx('input-container')}>
                <textarea 
                  className={cx('item-input')}
                  placeholder="자기소개를 입력하세요!" 
                  name="desc"
                  onChange={onChangeValue}
                >
                </textarea>
              </div>
              <div className={cx('input-container')}>
                <input
                  type="text"
                  className={cx('item-input')}
                  placeholder="원데이클래스 주최여부를 입력하세요(Y/N)" 
                  name="class"
                  onChange={onChangeValue}
                />
              </div>
              <div className={cx('input-container')}>
                <input
                  type="text"
                  className={cx('item-input')}
                  placeholder="입력한 셀러정보를 타인이 볼수있도록 합니다.(Y/N)" 
                  name="show"
                  onChange={onChangeValue}
                />
              </div>
            </Fragment>
          }
        </div>
        <div className={cx('button-wrap')}>
          <div 
            className={cx('button')} 
            onClick={() => {
              if(nickName) return onMovePrev();
              return onCancel();
            }}
          >
            { nickName ? '이전' : '취소' }
          </div>
          <div 
            className={cx('button')} 
            onClick={onSignup}
          >가입
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SignupMoreDataModal;