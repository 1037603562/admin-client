import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import _ from 'lodash'//防抖


export default class RichTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange =_.debounce( (editorState) => {
    console.log('--------')
    this.setState({
      editorState,
    });
  },2000)
//
  //getDetail =()=>draftToHtml(convertToRaw(editorState.getCurrentContent()))
  getDetail =()=>{
    return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          editorStyle={{height:200,border:'1px solid black',paddingLeft:10}}
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}