import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassList from 'components/class/ClassList';

import * as classActions from 'store/modules/class';

class ClassListContainer extends Component {

  getClassList = async () => {
    const { ClassActions } = this.props;
    await ClassActions.getClassList();
  }

  componentDidMount() {
    this.getClassList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps.classList) !== JSON.stringify(this.props.classList);
  }

  render() {
    const { classList } = this.props;
    return (
      <div>
        <ClassList classList={classList}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    classList: state.class.get('classList')
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch)
  })
)(ClassListContainer);