import React, { Fragment } from 'react';
import styles from './SignupMoreDataModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import { FaUpload } from 'react-icons/fa';
import { encode } from 'punycode';

const cx = classNames.bind(styles);

let uploadImgFile = (input, target) => {
  let reader = new FileReader();
  if(input.file || input.files[0]) {
    reader.onload = (e) => {
      target.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}

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
          <div className={cx('input-container')}>
              <div className={cx('label-wrapper')}><label htmlFor="name">이름</label></div>
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
              <div className={cx('label-wrapper')}><label htmlFor="phone">전화번호</label></div>
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
          {
            userType === 'H' ? null :
            <div className={cx('input-container')}>
              <div className={cx('label-wrapper')}><label htmlFor="categories">활동분야</label></div>
              <div><select id="categories" name="category_id" onChange={onChangeValue}>
                <option value="0">카테고리</option>
                {categories}
              </select></div>
            </div>
          }


          

          <div className={cx('input-container')}>
            <div className={cx('label-wrapper')}><label htmlFor="certified">인증번호</label></div>
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
                <div className={cx('label-wrapper')}><label htmlFor="career">경력</label></div>
                <div>
                  <input
                    id="career" 
                    type="number"
                    min="0"
                    className={cx('item-input career')}
                    placeholder="경력을 입력하세요!"
                    name="career"
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className={cx('input-container')}>
                <div className={cx('label-wrapper')}><label htmlFor="sns">SNS 계정</label></div>
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

              <div className={cx('input-image-wrapper')}>
                <div className={cx('profile-img-desc')}>
                  <div className={cx('input-img-container')}>
                    <div className={cx('label-wrapper')}><label htmlFor="profile">프로필</label></div>
                    <div className={cx('img-container')}>
                      <FaUpload className={cx('upload-img')}/>
                      <img 
                        src={''}
                        alt=''
                        className={cx('uploaded-img')}
                        ref={ref => this.profile = ref}
                      />
                      <input
                        id="profile"
                        type="file"
                        className={cx('item-input', 'item-input-profile')}
                        placeholder="프로필 이미지를 등록하세요!" 
                        name="profileImg"
                        ref={ref => this.profileInput = ref}
                        onChange={(e) => {
                          onChangeValue(e);
                          uploadImgFile(this.profileInput, this.profile);
                        }}
                      />
                    </div>
                    {/* <div className={cx('img-container', 'border-none')}></div> */}
                  </div>
                  <div className={cx('input-img-container')}>
                <div className={cx('label-wrapper')}><label htmlFor="intro">자기소개</label></div>
                <div className={cx('textarea-setting')}>
                  <textarea 
                    id="intro"
                    className={cx('text')}
                    placeholder="자기소개를 입력하세요!" 
                    name="seller_desc"
                    onChange={onChangeValue}
                  >
                  </textarea>
                </div>
              </div>
                </div>
                <div className={cx('profile-img-desc')}>         
                  <div className={cx('input-img-container')}>
                    <div className={cx('label-wrapper')}><label htmlFor="profile">작품 이미지</label></div>
                    <div className={cx('img-container')}>
                      <FaUpload className={cx('upload-img')}/>
                      <img 
                        src={''}
                        alt=''
                        className={cx('uploaded-img')}
                        ref={ref => this.sellerOne = ref}
                      />
                      <input
                        type="file"
                        className={cx('item-input-images', 'item-input-profile')}
                        placeholder="셀러소개를 위한 이미지를 등록하세요!" 
                        name="sellerImg1"
                        ref={ref => this.sellerInputOne = ref}
                        onChange={(e) => {
                          onChangeValue(e);
                          uploadImgFile(this.sellerInputOne, this.sellerOne);
                        }}
                      />
                    </div>
                    <div className={cx('img-container')}>
                      <FaUpload className={cx('upload-img')}/>
                      <img 
                        src={''}
                        alt=''
                        className={cx('uploaded-img')}
                        ref={ref => this.sellerTwo = ref}
                      />
                      <input
                        type="file"
                        className={cx('item-input-images', 'item-input-profile')}
                        placeholder="셀러소개를 위한 이미지를 등록하세요!" 
                        name="sellerImg2"
                        ref={ref => this.sellerInputTwo = ref}
                        onChange={(e) => {
                          onChangeValue(e);
                          uploadImgFile(this.sellerInputTwo, this.sellerTwo);
                        }}
                      />
                    </div>
                </div>
                <div className={cx('input-img-container')}>
                  <div></div>
                  <div className={cx('img-container')}>
                    <FaUpload className={cx('upload-img')}/>
                    <img 
                      src={''}
                      alt=''
                      className={cx('uploaded-img')}
                      ref={ref => this.sellerThr = ref}
                    />
                    <input
                      type="file"
                      className={cx('item-input-images', 'item-input-profile')}
                      placeholder="셀러소개를 위한 이미지를 등록하세요!" 
                      name="sellerImg3"
                      ref={ref => this.sellerInputThr = ref}
                      onChange={(e) => {
                        onChangeValue(e);
                        uploadImgFile(this.sellerInputThr, this.sellerThr);
                      }}
                    />
                  </div>
                  <div className={cx('img-container')}>
                    <FaUpload className={cx('upload-img')}/>
                    <img 
                      src={''}
                      alt=''
                      className={cx('uploaded-img')}
                      ref={ref => this.sellerFour = ref}
                    />
                    <input
                      type="file"
                      className={cx('item-input-images', 'item-input-profile')}
                      placeholder="셀러소개를 위한 이미지를 등록하세요!" 
                      name="sellerImg4"
                      ref={ref => this.sellerInputFour = ref}
                      onChange={(e) => {
                        onChangeValue(e);
                        uploadImgFile(this.sellerInputFour, this.sellerFour);
                      }}
                    />
                  </div>
                </div>
                </div>
              </div>

              {/* <div className={cx('input-container')}>
                <div><label htmlFor="business">사업자 여부</label></div>
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
              </div> */}
              
              {/* <div className={cx('input-container')}>
                <div><label htmlFor="sellerinfo">셀러정보</label></div>
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
              </div> */}

              
            </Fragment>
          }
        </div>
        <div className={cx('option-wrapper')}>
                <div className={cx('input-container')}>
                  <div className={cx('label-wrapper')}><label htmlFor="onedayclass">필수선택사항</label></div>
                  <div className={cx('required-box')}>
                    <select className={cx('item-input')} name="class_TF" onChange={onChangeValue}>
                      <option value="-1">원데이클래스 주최여부</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                    {/* <input
                      id="onedayclass"
                      type="text"
                      className={cx('item-input')}
                      placeholder="원데이클래스 주최여부를 입력하세요(Y/N)" 
                      name="class_TF"
                      onChange={onChangeValue}
                    /> */}
                  </div>
                  <div className={cx('required-box')}>
                    <select className={cx('item-input')} name="show_TF" onChange={onChangeValue}>
                      <option value="-1">셀러정보 공개여부</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                    {/* <input
                      id="sellerinfo"
                      type="text"
                      className={cx('item-input')}
                      placeholder="입력한 셀러정보를 타인이 볼수있도록 합니다.(Y/N)" 
                      name="show_TF"
                      onChange={onChangeValue}
                    /> */}
                  </div>
                  <div className={cx('required-box')}>
                    <select className={cx('item-input')} name="biz_YN" onChange={onChangeValue}>
                      <option value="-1">사업자 여부</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                  </div>
                </div>
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