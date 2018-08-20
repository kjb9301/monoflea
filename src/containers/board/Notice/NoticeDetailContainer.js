import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/noticeDetail';
import NoticeDetail from 'components/board/NoticeDetail';

class NoticeDetailContainer extends Component {
  getNoticeDetail = () => {
    const { ListActions, id } = this.props;
    ListActions.getNoticeDetail(id);
  }

  componentDidMount() {
    this.getNoticeDetail();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { noticeDetail } = this.props;
    return (
      <div>
        <NoticeDetail noticeDetail={noticeDetail}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    noticeDetail: state.noticeDetail.get('noticeDetail')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(NoticeDetailContainer);