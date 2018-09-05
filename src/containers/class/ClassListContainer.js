import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ClassList from 'components/class/ClassList';
import Button from '../../components/common/Button';
import ClassDetailModal from '../../components/modal/ClassDetailModal/ClassDetailModal'

import * as classListActions from 'store/modules/classList';
import * as classDetailActions from 'store/modules/classDetail';
import * as modalActions from 'store/modules/modalVisible';

class ClassListContainer extends Component {

  getClassList = (category) => {
    const { ClassListActions } = this.props;
    ClassListActions.getClassList(category);
  }

  getClassDetail = (id) => {
    const { ClassDetailActions, ModalActions } = this.props;
    ModalActions.showModal('oneday')
    ClassDetailActions.getClassDetail(id);
  }

  handleCancel = () => {
    const { ModalActions } = this.props;
    ModalActions.hideModal('oneday');
  }

  componentDidMount() {
    this.getClassList();
  }

  render() {
    const { loading, classList, categories, bestClassList, visible,  classDetail } = this.props;
    const { getClassList, getClassDetail, handleCancel } = this

    const categoryList = categories.map(
      (categoryItem) => {
        const { class_category_id, category_name, category_ko_name } = categoryItem;
        
        return <Button
          key = {class_category_id}
          onHandleParams = {category_name}
          toGetData = {getClassList}
        > {category_ko_name}</Button>

      }
    );
    categoryList.unshift(<Button key = {'All'} toGetData = {getClassList} >전체</Button>);

    if(loading) return null;
    return (
      <div>
          <ClassList 
            onedayLists={ classList }
            categoryList={ categoryList }
            bestOnedayLists={ bestClassList }
            onModal = { getClassDetail }
          />
          <ClassDetailModal
            visible = { visible }
            classDetail = { classDetail }
            onCancel = { handleCancel }
          />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    classList : state.classList.get('classList'),
    categories : state.classList.get('categories'),
    bestClassList : state.classList.get('bestClassList'),
    classDetail : state.classDetail.get('classDetail'),
    visible : state.modalVisible.getIn(['modal','oneday']),
    loading : state.pender.pending['class/GET_CLASS_LIST']
  }),
  (dispatch) => ({
    ClassListActions : bindActionCreators(classListActions, dispatch),
    ClassDetailActions : bindActionCreators(classDetailActions, dispatch),
    ModalActions : bindActionCreators(modalActions, dispatch)
  })
)(ClassListContainer);