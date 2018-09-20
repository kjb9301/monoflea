import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import ClassList from 'components/class/ClassList';

import * as classActions from 'store/modules/class';
import * as classUIActions from 'store/modules/classUI';
import * as baseActions from 'store/modules/base';

class ClassListContainer extends Component {

  getClassList = async () => {
    const { ClassActions } = this.props;
    await ClassActions.getClassList();
  }

  showClassModal = async (id) => {
    const { ClassUIActions, BaseActions, classList } = this.props;
    const idx = classList.findIndex(item => item.class_id === id);
    const updateResult = await axios.put('/classes/view-count', { id });
    const { countUp, view_cnt } = updateResult.data;
    if(countUp) classList[idx].view_cnt = view_cnt;
    ClassUIActions.setClassInfo(classList[idx]);
    BaseActions.showModal('class');
  }

  takeOnedayClass = async (id) => {
    const { ClassActions } = this.props;
    const takenResult = await ClassActions.takeOnedayClass(id);
    const { isTaken } = takenResult.data;
    if(isTaken) {
      alert('해당 클래스를 찜목록에 추가했습니다!');
      await ClassActions.getClassList();
    }
  }
  
  cancelOnedayClass = async (id) => {
    const { ClassActions } = this.props;
    const cancelResult = await ClassActions.cancelOnedayClass(id);
    const { isCancel } = cancelResult.data;
    if(isCancel) {
      alert('해당 클래스를 찜목록에서 삭제했습니다!');
      await ClassActions.getClassList();
    }
  }

  loadItems = () => {

  }

  componentDidMount() {
    this.getClassList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps.classList) !== JSON.stringify(this.props.classList);
  }

  render() {
    const { classList } = this.props;
    const { showClassModal, takeOnedayClass, cancelOnedayClass } = this;
    const loader = <div className="loader">Loading ...</div>;
    const items = <div>추가</div>;
    return (
      <div>
        <ClassList 
          classList={classList}
          showClassModal={showClassModal}
          takeOnedayClass={takeOnedayClass}
          cancelOnedayClass={cancelOnedayClass}
        />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={true}
          loader={loader}
        >
          <div className="tracks">
            {items}
          </div>
        </InfiniteScroll>
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
    ClassUIActions: bindActionCreators(classUIActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassListContainer);