import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noticeListActions from 'store/modules/noticeList';
import NoticeList from 'components/board/NoticeList';
import InfiniteScroll from 'react-infinite-scroll-component';

class NoticeListContainer extends Component {
  getNoticeList = async () => {
    const { NoticeListActions } = this.props;
    await NoticeListActions.getNoticeList(8);
    return NoticeListActions.setDefaultState();
  }

  getMoreData = () => {
    const { NoticeListActions, notices } = this.props;
    let len = parseInt(notices.length/8, 10)*10;
    if(len>notices.length-8) {
      setTimeout(async () => {
        try {
          await NoticeListActions.getNoticeList(len+8);
          const { totalCnt } = this.props;
          if(notices.length>=totalCnt) return NoticeListActions.toggleMoreState(false);
        } catch(e) {
          const { message } = e.response.data;
          return alert(message);
        }
      }, 350);
    }
  }

  componentDidMount() {
    this.getNoticeList();
  }
  
  render() {
    const { notices, userType, hasMore } = this.props;
    if(!notices.length) return null;
    const loader = <div className="loader" key={0}>Loading ...</div>;
    return (
      <Fragment>
        <NoticeList 
          notices={notices}
          userType={userType}
        />
        <InfiniteScroll
          dataLength={notices.length}
          next={this.getMoreData}
          hasMore={hasMore}
          loader={loader}
        />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    notices: state.noticeList.get('notices'),
    totalCnt: state.noticeList.get('totalCnt'),
    hasMore: state.noticeList.get('hasMore'),
    userType: state.base.get('userType')
  }),
  (dispatch) => ({
    NoticeListActions: bindActionCreators(noticeListActions, dispatch)
  })
)(NoticeListContainer);