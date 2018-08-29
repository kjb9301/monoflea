import React from 'react';
import styles from './SignupTypeModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';



const cx = classNames.bind(styles);

const SignupTypeModal = ({ visible, onCancel, onChangeValue, onClickButton }) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('SignupTypeModal')}>
        <div onClick={onCancel} className={cx('close')}>&times;</div>
        <div className={cx('list-wrap')}>
          <div className={cx('list')}>
            <img src="https://us.123rf.com/450wm/jemastock/jemastock1608/jemastock160800437/60754519-flat-design-user-pictogram-icon-vector-illustration.jpg?ver=6"/>
            <div>
              <input type="radio" name="userType" value="U" onChange={onChangeValue}/>
            </div>
          </div>
          <div className={cx('list')}>
            <img src="https://us.123rf.com/450wm/jemastock/jemastock1608/jemastock160800437/60754519-flat-design-user-pictogram-icon-vector-illustration.jpg?ver=6"/>
            <div>
              <input type="radio" name="userType" value="S" onChange={onChangeValue}/>
            </div>
          </div>
          <div className={cx('list')}>
            <img src="https://us.123rf.com/450wm/jemastock/jemastock1608/jemastock160800437/60754519-flat-design-user-pictogram-icon-vector-illustration.jpg?ver=6"/>
            <div>
              <input type="radio" name="userType" value="H" onChange={onChangeValue}/>
            </div>
          </div>
        </div>
        <div className={cx('button-wrap')}>
          <div className={cx('button')} onClick={onClickButton}>
            다음
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SignupTypeModal;