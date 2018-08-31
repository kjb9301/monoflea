import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ClassList from 'components/class/ClassList';

import * as classListActions from 'store/modules/classList';
import Button from '../../components/common/Button';

class ClassListContainer extends Component {

  getClassList = (category) => {
    const { ClassListActions } = this.props;
    ClassListActions.getClassList(category);
  }

  getClassId = (id) => {
    const { ClassListActions } = this.props;
  }

  componentDidMount() {
    this.getClassList();
  }

  render() {
    const { loading, classList, categories, bestClassList } = this.props;
    const { getClassList } = this
    const categoryList = categories.map(
      (categoryItem) => {
        const { class_category_id, category_name, category_ko_name } = categoryItem;
        
        return <Button
          key = {class_category_id}
          onHandlePrams = {category_name}
          onCategory = {getClassList}
        > {category_ko_name}</Button>

      }
    );
    categoryList.unshift(<Button key = {'All'} onCategory = {getClassList} >전체</Button>);

    if(loading) return null;
    return (
      <div>
          <ClassList onedayLists={classList} categoryList={categoryList} bestOnedayLists={bestClassList}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    classList : state.classList.get('classList'),
    categories : state.classList.get('categories'),
    bestClassList : state.classList.get('bestClassList'),
    loading : state.pender.pending['class/GET_CLASS_LIST']
  }),
  (dispatch) => ({
    ClassListActions : bindActionCreators(classListActions, dispatch)
  })
)(ClassListContainer);