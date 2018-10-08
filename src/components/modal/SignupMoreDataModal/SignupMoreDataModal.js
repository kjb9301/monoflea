import React, { Fragment } from 'react';
import styles from './SignupMoreDataModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const SignupMoreDataModal = ({ visible, nickName, getAuthNumber, checkAuthNum, sellerCategory, userType, onCancel, onChangeValue, onSignup, onMovePrev }) => {
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
              <div><label for="categories">활동분야</label></div>
              <div><select id="categories" name="category_id" onChange={onChangeValue}>
                {/* TODO: select db & map */}
                <option value="0">카테고리</option>
                {categories}
              </select></div>
            </div>
          }

          <div className={cx('input-container')}>
            <div><label for="name">이름</label></div>
            <div>
              <input
                id="name"
                type="text"
                className={cx('item-input')}
                placeholder="이름을 입력하세요!" 
                name="name"
                onChange={onChangeValue}
              />
            </div>
          </div>

          <div className={cx('input-container')}>
            <div><label for="phone">전화번호</label></div>
            <div className={cx('certified')}>
              <input
                id="phone" 
                type="tel"
                className={cx('item-input')}
                placeholder="전화번호를 입력하세요! (ex. 010-1234-1234)" 
                name="tel"
                onChange={onChangeValue}
                ref={ref => this.tel = ref}
              />
              <div className={cx('button-wrap')}>
                <div
                  className={cx('button')}
                  onClick={() => getAuthNumber(this.tel.value)}
                >인증하기
                </div>
              </div>
            </div>
          </div>

          <div className={cx('input-container')}>
            <div><label for="certified">인증번호</label></div>
            <div className={cx('certified')}>
              <input
                id="certified"
                type="text"
                className={cx('item-input')}
                placeholder="인증번호를 입력하세요!" 
                name="checkNum"
                onChange={onChangeValue}
              />
              <div className={cx('button-wrap')}>
                <div
                  className={cx('button')}
                  onClick={checkAuthNum}
                >확인
                </div>
              </div>
            </div>
          </div>

          {
            userType === 'H' ? null :
            <Fragment>
              <div className={cx('input-container')}>
                <div><label for="career">경력</label></div>
                <div>
                  <input
                    id="career" 
                    type="number"
                    min="0"
                    className={cx('item-input')}
                    placeholder="경력을 입력하세요!"
                    name="career"
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className={cx('input-container')}>
                <div><label for="sns">SNS 계정</label></div>
                <div>
                  <input
                    id="sns"
                    type="text"
                    className={cx('item-input')}
                    placeholder="SNS 계정을 입력하세요!" 
                    name="sns"
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className={cx('input-container')}>
                <div><label for="profile">프로필</label></div>
                <div>
                  <input
                    id="profile"
                    type="file"
                    className={cx('item-input')}
                    placeholder="프로필 이미지를 등록하세요!" 
                    name="profileImg"
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className={cx('input-container')}>
                <div><label for="business">사업자 여부</label></div>
                <div>
                  <input
                    id="business"
                    type="text"
                    className={cx('item-input')}
                    placeholder="사업자 여부를 입력하세요. (Y/N)" 
                    name="biz_YN"
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className={cx('input-container')}>
                <div><label for="intro">자기소개</label></div>
                <div>
                  <textarea 
                    id="intro"
                    className={cx('item-input')}
                    placeholder="자기소개를 입력하세요!" 
                    name="seller_desc"
                    onChange={onChangeValue}
                  >
                  </textarea>
                </div>
              </div>

              <div className={cx('input-container')}>
                <div><label for="onedayclass">주최여부</label></div>
                <div>
                  <input
                    id="onedayclass"
                    type="text"
                    className={cx('item-input')}
                    placeholder="원데이클래스 주최여부를 입력하세요(Y/N)" 
                    name="class_TF"
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className={cx('input-container')}>
                <div><label for="sellerinfo">셀러정보</label></div>
                <div>
                  <input
                    id="sellerinfo"
                    type="text"
                    className={cx('item-input')}
                    placeholder="입력한 셀러정보를 타인이 볼수있도록 합니다.(Y/N)" 
                    name="show_TF"
                    onChange={onChangeValue}
                  />
                </div>
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