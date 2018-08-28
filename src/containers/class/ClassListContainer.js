import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ClassList from 'components/class/ClassList';

import * as classListActions from 'store/modules/classList';

class ClassListContainer extends Component {

  getClassList = () => {
    const { ClassListActions } = this.props;
    ClassListActions.getClassList();
  }

  componentDidMount() {
    console.log(`This is componentDidMount()`);
    this.getClassList();
  }

  render() {
    const { loading, classList } = this.props;

    console.log('======= classListContainer render() classList =========');
    console.log(classList);
    
    if(loading) return null;
    return (
      <div>
        <ClassList onedayLists={classList}/>
      </div>
    );
  }
}

export default connect((state) => ({
    classList: state.classList.get('classList'),
    loading: state.pender.pending['class/GET_CLASS_LIST']
  }),
  (dispatch) => ({
    ClassListActions: bindActionCreators(classListActions, dispatch)
  })
)(ClassListContainer);