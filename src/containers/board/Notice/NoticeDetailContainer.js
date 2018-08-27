import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noticeDetailActions from 'store/modules/noticeDetail';
import NoticeDetail from 'components/board/NoticeDetail';
import { withRouter } from 'react-router-dom';

class NoticeDetailContainer extends Component {
  getNoticeDetail = () => {
    const { NoticeDetailActions, match } = this.props;
    const { id } = match.params;
    NoticeDetailActions.getNoticeDetail(id);
  }

  componentDidMount() {
    this.getNoticeDetail();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps.noticeDetail);
  //   console.log(this.props.noticeDetail);
  //   //return true;
  //   return nextProps.noticeDetail !== this.props.noticeDetail;
  // }

  render() {
    const { loading } = this.props;
    if(loading) return null;
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
    noticeDetail: state.noticeDetail.get('noticeDetail'),
    loading: state.pender.pending['notices/GET_NOTICE_DETAIL']
  }),
  (dispatch) => ({
    NoticeDetailActions: bindActionCreators(noticeDetailActions, dispatch)
  })
)(withRouter(NoticeDetailContainer));