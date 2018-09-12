import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassList from 'components/class/ClassList';

import * as classActions from 'store/modules/class';
import * as baseActions from 'store/modules/base';

class ClassListContainer extends Component {

  getClassList = async () => {
    const { ClassActions } = this.props;
    await ClassActions.getClassList();
  }

  showClassModal = (id) => {
    const { ClassActions, BaseActions, classList } = this.props;
    const idx = classList.findIndex(item => item.class_id === id);
    console.log(classList[idx]);
    // ClassActions.setDetailClass(classList[idx]);
    BaseActions.showModal('class');
  }

  componentDidMount() {
    this.getClassList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps.classList) !== JSON.stringify(this.props.classList);
  }

  render() {
    const { classList } = this.props;
    const { showClassModal } = this;
    return (
      <div>
        <ClassList 
          classList={classList}
          showClassModal={showClassModal}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    classList: state.class.get('classList'),
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassListContainer);