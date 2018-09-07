import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassWrapper from 'components/class/ClassWrapper';
import Button from 'components/common/Button/Button';

import * as classActions from 'store/modules/class';

class ClassContainer extends Component {

  getClassList = async () => {
    const { ClassActions } = this.props;
    await ClassActions.getClassList();
  }

  getSpecificClassList = async (category) => {
    const { ClassActions } = this.props;
    await ClassActions.getClassList(category);
  }

  componentDidMount() {
    this.getClassList();
  }

  render() {
    const { classList, categories } = this.props;
    const { getSpecificClassList } = this;
    return (
      <div>
        <ClassWrapper
          classList={classList}
          categories={categories}
          getSpecificClassList={getSpecificClassList}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    classList: state.class.get('classList'),
    categories: state.class.get('categories'),
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch)
  })
)(ClassContainer);