import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClassPost from 'components/class/ClassPost';

import * as classActions from 'store/modules/class';

class ClassPostContainer extends Component {
  render() {
    return (
      <div>
        <ClassPost/>
      </div>
    );
  }
}

export default ClassPostContainer;