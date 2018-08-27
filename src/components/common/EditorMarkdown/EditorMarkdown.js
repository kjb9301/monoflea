import React, { Component } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditorMarkdown extends Component {
  state = {
    editorState: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onContentStateChange = (contentState) => {
    const { handleInputContent } = this.props;
    this.setState({
      contentState
    });
    handleInputContent(contentState);
  }

  // onEditorStateChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  uploadImage = (file) => {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }

  render() {
    const { editorState } = this.state;
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
          localization={{
            locale: 'ko',
          }}
          onContentStateChange={this.onContentStateChange}
          // onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
           value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}

export default EditorMarkdown;