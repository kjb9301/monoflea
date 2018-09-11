import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import ClassDetailModal from 'components/modal/ClassDetailModal'

import * as baseActions from 'store/modules/base';
import * as classActions from 'store/modules/class';
import * as classUIActions from 'store/modules/classUI';

class ClassDetailContainer extends Component {

  hideModal = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('class');
  }

  deleteOnedayClass = async (id) => {
    try {
      const { BaseActions, ClassActions } = this.props;
      const deleteResult = await axios.delete(`/classes/${id}`);
      const { isDeleted } = deleteResult.data;
      if(!isDeleted) return alert('삭제에 실패했습니다. 다시 시도하세요!');
      await ClassActions.getClassList();
      alert('등록된 클래스가 삭제됐습니다!');
      return BaseActions.hideModal('class');
    } catch(e) {
      const { isDeleted, message } = e.response;
      if(!isDeleted) return alert(message);
      return alert('알수 없는 에러발생!');
    }
  }

  updateOnedayClass = async (id) => {
    const { ClassUIActions } = this.props;
    ClassUIActions.toggleEdit();
    console.log(id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.editing !== this.props.editing) || (nextProps.visible !== this.props.visible);
  }

  render() {
    const { visible, classDetail, nickName, editing } = this.props;
    const { hideModal, deleteOnedayClass, updateOnedayClass } = this;
    return (
      <ClassDetailModal 
        visible={visible}
        classDetail={classDetail}
        hideModal={hideModal}
        nickName={nickName}
        deleteOnedayClass={deleteOnedayClass}
        updateOnedayClass={updateOnedayClass}
        editing={editing}
      />
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'class']),
    classDetail: state.class.get('classDetail'),
    nickName: state.base.get('nickName'),
    editing: state.classUI.get('editing')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    ClassActions: bindActionCreators(classActions, dispatch),
    ClassUIActions: bindActionCreators(classUIActions, dispatch)
  })
)(ClassDetailContainer);