import React from 'react';
import styles from './AskRemoveModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import AskButton from 'components/common/AskButton';

const cx = classNames.bind(styles);

const AskRemoveModal = ({id,visible,onRemove/*,onCancel */}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('question')}>
        <div className={cx('title')}>포스트삭제</div>
        <div className={cx('description')}>정말로 삭제하시겠습니까?</div>
      </div>
      <div className={cx('options')}>
        <AskButton theme="gray" /* onClick={onCancel} */>취소</AskButton>
        <AskButton onClick={() => onRemove(id)}>삭제</AskButton>
      </div>
    </ModalWrapper>
  );
};

export default AskRemoveModal;