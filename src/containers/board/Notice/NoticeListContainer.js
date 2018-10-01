import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noticeListActions from 'store/modules/noticeList';
import NoticeList from 'components/board/NoticeList';

class NoticeListContainer extends Component {
  getNoticeList = () => {
    const { NoticeListActions } = this.props;
    NoticeListActions.getNoticeList();
  }

  componentDidMount() {
    this.getNoticeList();
  }
  
  render() {
    const { notices } = this.props;
    if(!notices.length) return null;
    return (
      <div>
        <NoticeList notices={notices}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    notices: state.noticeList.get('notices')
  }),
  (dispatch) => ({
    NoticeListActions: bindActionCreators(noticeListActions, dispatch)
  })
)(NoticeListContainer);