import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import ClassDetailModal from 'components/modal/ClassDetailModal'

import * as baseActions from 'store/modules/base';
import * as classActions from 'store/modules/class';
import * as classUIActions from 'store/modules/classUI';

const bodyData = new FormData();

class ClassDetailContainer extends Component {
  hideModal = (id) => {
    const { ClassUIActions, BaseActions, classList } = this.props;
    BaseActions.hideModal('class');
    const idx = classList.findIndex(item => item.class_id === id);
    ClassUIActions.setClassInfo(classList[idx]);
    ClassUIActions.initializeEditState();
  }

  deleteOnedayClass = async (id) => {
    try {
      const { BaseActions, ClassActions } = this.props;
      if(window.confirm('정말로 삭제하시겠습니까? 모든 정보가 삭제됩니다!')) {
        const deleteResult = await axios.delete(`/classes/${id}`);
        const { isDeleted } = deleteResult.data;
        if(!isDeleted) return alert('삭제에 실패했습니다. 다시 시도하세요!');
        await ClassActions.getClassList();
        alert('등록된 클래스가 삭제됐습니다!');
        return BaseActions.hideModal('class');
      }
      return;
    } catch(e) {
      const { isDeleted, message } = e.response;
      if(!isDeleted) return alert(message);
      return alert('알수 없는 에러발생!');
    }
  }

  toggleEditOnedayClass = async (id) => {
    const { ClassUIActions } = this.props;
    ClassUIActions.toggleEdit();
  }

  changeValue = (e) => {
    const { name, value, files } = e.target;
    const { ClassUIActions } = this.props;
    ClassUIActions.changeClassInfo({ name, value });
    files ? bodyData.append(name, files[0]) : bodyData.set(name, value);
  }

  cancelEditClass = (id) => {
    const { BaseActions } = this.props;
    const { hideModal } = this;
    hideModal(id);
    BaseActions.showModal('class');
  }

  updateOnedayClass = async (id) => {
    const { ClassActions, BaseActions, ClassUIActions } = this.props;
    const updateResult = await axios.put(`/classes/${id}`, bodyData);
    const { isUpdated, message } = updateResult.data;
    if(isUpdated) {
      alert(message);
      ClassActions.getClassList();
      ClassUIActions.initializeEditState();
      return BaseActions.hideModal('class');
    }
    return alert('일시적인 오류입니다. 다시 시도 해주세요!');
  }

  enrollOnedayClass = async (id) => {
    const { logged } = this.props;
    if(logged) {
      const enrolled = await axios.post('/classes/recruitment', { id });
      const { isEnrolled, message } = enrolled.data;
      const { ClassActions, ClassUIActions, BaseActions } = this.props;
      if(!isEnrolled) return alert('잘못된 접근입니다. 다시 시도해주세요!');
      await ClassActions.getClassList();
      const { classList } = this.props;
      const idx = classList.findIndex(classItem => classItem.class_id === id);
      ClassUIActions.setClassInfo(classList[idx]);
      BaseActions.hideModal('class');
      BaseActions.showModal('class');
      return alert(message)
    }
    return alert('로그인 이후에 사용할 수 있는 서비스입니다.');
  }

  cancelOnedayClass = async (id) => {
    const { logged } = this.props;
    if(logged) {
      const cancelResult = await axios.delete(`/classes/recruitment/${id}`);
      const { isCancel, message } = cancelResult.data;
      const { ClassActions, ClassUIActions, BaseActions } = this.props;
      if(!isCancel) return alert('잘못된 접근입니다. 다시 시도해주세요!');
      await ClassActions.getClassList();
      const { classList } = this.props;
      const idx = classList.findIndex(classItem => classItem.class_id === id);
      ClassUIActions.setClassInfo(classList[idx]);
      BaseActions.hideModal('class');
      BaseActions.showModal('class');
      return alert(message);
    }
    return alert('로그인 이후에 사용할 수 있는 서비스입니다!');
  }

  // TODO: editing state change --> rerender ?
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (nextProps.editing !== this.props.editing) || (nextProps.visible !== this.props.visible);
  // }

  render() {
    const { visible, classInfo, nickName, editing, categories } = this.props;
    const {
      hideModal, deleteOnedayClass, toggleEditOnedayClass, changeValue,
      cancelEditClass, updateOnedayClass, enrollOnedayClass, cancelOnedayClass
    } = this;
    if(!categories.length) return null;
    return (
      <ClassDetailModal 
        visible={visible}
        classDetail={classInfo.toJS()}
        hideModal={hideModal}
        nickName={nickName}
        deleteOnedayClass={deleteOnedayClass}
        toggleEditOnedayClass={toggleEditOnedayClass}
        cancelEditClass={cancelEditClass}
        updateOnedayClass={updateOnedayClass}
        changeValue={changeValue}
        editing={editing}
        categories={categories}
        enrollOnedayClass={enrollOnedayClass}
        cancelOnedayClass={cancelOnedayClass}
      />
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    visible: state.base.getIn(['modal', 'class']),
    classList: state.class.get('classList'),
    classInfo: state.classUI.get('classInfo'),
    nickName: state.base.get('nickName'),
    editing: state.classUI.get('editing'),
    categories: state.class.get('categories')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    ClassActions: bindActionCreators(classActions, dispatch),
    ClassUIActions: bindActionCreators(classUIActions, dispatch)
  })
)(ClassDetailContainer);