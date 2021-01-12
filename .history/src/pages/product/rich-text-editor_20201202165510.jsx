import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { EditorState, convertToRaw,ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import _ from 'lodash'//防抖


export default class RichTextEditor extends Component {
  static propTypes = {
    detail:PropTypes.string
  }
  state = {
    editorState: EditorState.createEmpty(),
  }
  componentWillMount(){
    const detail = this.props.detail

    if(detail){
      //根据detail生成一个editorState
      const contentBlock = htmlToDraft(detail);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      }
    
      //更新状态
      this.setState({
        editorState
      })
    }
  } 


  onEditorStateChange =_.debounce( (editorState) => {
    console.log('--------')
    this.setState({
      editorState,
    });
  },500)
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