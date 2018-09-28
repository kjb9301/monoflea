import React, { Component } from 'react';
import NoticePost from 'components/board/NoticePost';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newNoticeAction from 'store/modules/noticePost';

class NoticePostContainer extends Component {
  
  createNewPost = async () => {
    const { NewNoticeAction, title, content } = this.props;
    await NewNoticeAction.postNewNotice(title, content);
  }

  handleInputTitle = async (e) => {
    const { NewNoticeAction } = this.props;
    const { value } = e.target;
    NewNoticeAction.changeInputTitle(value);
  }

  // handleInputContent = (content) => {
  //   const { blocks } = content;
  //   console.log(JSON.stringify(blocks));
  // }

  render() {
    const { handleInputTitle, createNewPost } = this;
    return (
      <NoticePost 
        handleInputTitle={handleInputTitle}
        // handleInputContent={handleInputContent}
        createNewPost={createNewPost}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.noticePost.get('title'),
    content: state.noticePost.get('content'),
    img_file: state.noticePost.get('img_file')
  }),
  (dispatch) => ({
    NewNoticeAction: bindActionCreators(newNoticeAction, dispatch)
  })
)(NoticePostContainer);