import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noticeDetailActions from 'store/modules/noticeDetail';
import NoticeDetail from 'components/board/NoticeDetail';
import { withRouter } from 'react-router-dom';
import Loading from 'components/common/Loading';

class NoticeDetailContainer extends Component {
  state = {
    timer: true
  }

  getNoticeDetail = async () => {
    const { NoticeDetailActions, match } = this.props;
    const { id } = match.params;
    await NoticeDetailActions.getNoticeDetail(id);
    setTimeout(() => {
      this.setState({
        timer: false
      })
    }, 750);
  }

  componentDidMount() {
    this.getNoticeDetail();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { noticeDetail } = this.props;
    const { timer } = this.state;
    return JSON.stringify(nextProps.noticeDetail) !== JSON.stringify(noticeDetail) 
           || nextState.timer !== timer;
  }

  redirectNoticeList = () => {
    const { history } = this.props;
    return history.push('/boards/notice');
  }

  render() {
    const { timer } = this.state;
    if(timer) return <Loading />
    const { noticeDetail } = this.props;
    const { redirectNoticeList } = this;
    return (
      <Fragment>
        <NoticeDetail 
          noticeDetail={noticeDetail}
          redirectNoticeList={redirectNoticeList}
        />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    noticeDetail: state.noticeDetail.get('noticeDetail'),
  }),
  (dispatch) => ({
    NoticeDetailActions: bindActionCreators(noticeDetailActions, dispatch)
  })
)(withRouter(NoticeDetailContainer));