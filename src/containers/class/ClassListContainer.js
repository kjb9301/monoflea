import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  componentDidMount() {
    this.getClassList();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return JSON.stringify(nextProps.classList) !== JSON.stringify(this.props.classList);
  // }

  getMoreData = () => {
    const { ClassActions, classList, category } = this.props;
    let len = parseInt(classList.length/10)*10;
    if(len>classList.length-10) {
      setTimeout(async () => {
        await ClassActions.getClassList(category, len+10);
        // await ClassActions.getClassCount();
        const { totalCnt } = this.props;
        if(classList.length>=totalCnt) return ClassActions.toggleMoreState(false);
      }, 350);
    }
  }

  render() {
    const { classList, hasMore } = this.props;
    const { showClassModal, takeOnedayClass, cancelOnedayClass } = this;
    const loader = <div className="loader" key={0}>Loading ...</div>;
    return (
      <Fragment>
        <ClassList 
          classList={classList}
          showClassModal={showClassModal}
          takeOnedayClass={takeOnedayClass}
          cancelOnedayClass={cancelOnedayClass}
        />
        <InfiniteScroll
          dataLength={classList.length}
          next={this.getMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
        </InfiniteScroll>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    classList: state.class.get('classList'),
    totalCnt: state.class.get('totalCnt'),
    hasMore: state.class.get('hasMore'),
    category: state.class.get('category'),
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch),
    ClassUIActions: bindActionCreators(classUIActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassListContainer);