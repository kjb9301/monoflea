import React, { Component } from 'react';
import NoticePost from 'components/board/NoticePost';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as newNoticeAction from 'store/modules/noticePost';

class NoticePostContainer extends Component {
  
  createNewPost = async () => {
    const { title, content, history, user_id } = this.props;
    try {
      const createdResult = await axios.post('/notices', { title, content, user_id });
      const { isCreated, message, no } = createdResult.data;
      alert(message);
      if(isCreated) return history.push(`/boards/notice/${no}`);
      return history.push('/boards/notice/post');
    } catch(e) {
      const { message } = e.response.data;
      alert(message);
      return history.push('/boards/notice');
    }
  }

  redirectNoticeList = () => {
    const { history } = this.props;
    return history.push('/boards/notice');
  }
  
  handleInputTitle = async (e) => {
    const { NewNoticeAction } = this.props;
    const { value } = e.target;
    NewNoticeAction.changeInputTitle(value);
  }

  render() {
    const { handleInputTitle, createNewPost, redirectNoticeList } = this;
    const { userType } = this.props;
    if(userType !== 'A') return <Redirect to="/boards/notice" />
    return (
      <NoticePost 
        handleInputTitle={handleInputTitle}
        createNewPost={createNewPost}
        redirectNoticeList={redirectNoticeList}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.noticePost.get('title'),
    user_id: state.base.get('user_id'),
    content: state.noticePost.get('content'),
    img_file: state.noticePost.get('img_file'),
    userType: state.base.get('userType')
  }),
  (dispatch) => ({
    NewNoticeAction: bindActionCreators(newNoticeAction, dispatch)
  })
)(withRouter(NoticePostContainer));