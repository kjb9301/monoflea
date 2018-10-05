import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ClassList from 'components/class/ClassList';
import asyncComponent from 'lib/asyncComponent';

import * as classActions from 'store/modules/class';
import * as classUIActions from 'store/modules/classUI';
import * as baseActions from 'store/modules/base';

class ClassListContainer extends Component {

  state = {
    temp: false
  }

  getClassList = async () => {
    const { ClassActions } = this.props;
    try {
      return await ClassActions.getClassList();
    } catch(e) {
      const { message } = e.response.data;
      return alert(message);
    }
  }

  showClassModal = async (id) => {
    const { ClassUIActions, BaseActions } = this.props;
    const increViewCnt = () => {
      return axios.put('/classes/view-count', { id });
    }
    const getDetailinfo = () => {
      return axios.get(`/classes/${id}`);
    }

    const [ updateResult, classDetail ] = await Promise.all([ increViewCnt(), getDetailinfo() ]);
    const { countUp, view_cnt } = updateResult.data;
    if(!countUp) return alert('일시적인 오류입니다. 다시 시도하세요!');
    this.setState({
      temp: true
    });
    classDetail.view_cnt = view_cnt;
    ClassUIActions.setClassInfo(classDetail);
    return BaseActions.showModal('class');
  }

  takeOnedayClass = async (id) => {
    const { ClassActions, logged, category, classList } = this.props;
    if(!logged) return alert('로그인 이후에 사용할 수 있는 서비스입니다!');
    try {
      const takenResult = await ClassActions.takeOnedayClass(id);
      const { isTaken } = takenResult.data;
      if(!isTaken) return ('일시적인 오류입니다. 잠시후 다시 시도하세요!');
      alert('해당 클래스를 찜목록에 추가했습니다!');
      return await ClassActions.getClassList(category, classList.length);
    } catch(e) {
      const { message } = e.response.data;
      return alert(message);
    }
  }
  
  cancelOnedayClass = async (id) => {
    const { ClassActions, logged, category, classList } = this.props;
    if(!logged) return alert('로그인 이후에 사용할 수 있는 서비스입니다!');
    try {
      const cancelResult = await ClassActions.cancelOnedayClass(id);
      const { isCancel } = cancelResult.data;
      if(!isCancel) return alert('일시적인 오류입니다. 잠시후 다시 시도하세요!');
      alert('해당 클래스를 찜목록에서 삭제했습니다!');
      return await ClassActions.getClassList(category, classList.length);
    } catch(e) {
      const { message } = e.response.data;
      return alert(message);
    }
  }

  componentDidMount() {
    this.getClassList();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { classList, hasMore } = this.props;
  //   return (JSON.stringify(nextProps.classList) !== JSON.stringify(classList)) 
  //           || (nextProps.hasMore !== hasMore);
  // }

  getMoreData = () => {
    const { ClassActions, classList, category } = this.props;
    const { totalCnt } = this.props;
    if(classList.length<totalCnt) {
      setTimeout(async () => {
        try {
          return await ClassActions.getClassList(category, classList.length+9);
        } catch(e) {
          const { message } = e.response.data;
          return alert(message);
        }
      }, 350);
    }
    if(classList.length>=totalCnt) return ClassActions.toggleMoreState(false);
  }

  test = () => {
    const { temp } = this.state;
    if(temp) {
      return asyncComponent(() => import('containers/class/ClassDetailContainer'));
    }
  }

  render() {
    const { classList, hasMore } = this.props;
    const { showClassModal, takeOnedayClass, cancelOnedayClass, test } = this;
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
          loader={loader}
        >
        </InfiniteScroll>
        {test()}
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
    logged: state.base.get('logged')
  }),
  (dispatch) => ({
    ClassActions: bindActionCreators(classActions, dispatch),
    ClassUIActions: bindActionCreators(classUIActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ClassListContainer);