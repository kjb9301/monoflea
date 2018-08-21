import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/noticeList';
import NoticeList from 'components/board/NoticeList';

class NoticeListContainer extends Component {
  getNoticeList = () => {
    const { ListActions } = this.props;
    ListActions.getNoticeList();
  }

  componentDidMount() {
    this.getNoticeList();
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {
    const { notices } = this.props;
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
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(NoticeListContainer);