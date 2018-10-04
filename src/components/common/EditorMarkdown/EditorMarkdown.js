import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
// import draftToMarkdown from 'draftjs-to-markdown';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newNoticeAction from 'store/modules/noticePost';

class EditorMarkdown extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const { NewNoticeAction } = this.props;
    NewNoticeAction.changeInputContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  render() {
    const { uploadImage } = this;
    return (
      <div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName="toolbar-class"
          editorStyle={{ 'backgroundColor': '#CCC', 'width': '80%', 'height': '550px', 'margin': 'auto', 'padding': '1rem' }}
          toolbarStyle={{ 'width': '80%', 'margin': 'auto' }}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'image',  'history'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
            image: { uploadCallback: uploadImage, alt: { present: true, mandatory: true } }
          }}
          localization={{ locale: 'ko' }}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    content: state.noticePost.get('content'),
  }),
  (dispatch) => ({
    NewNoticeAction: bindActionCreators(newNoticeAction, dispatch)
  })
)(EditorMarkdown);