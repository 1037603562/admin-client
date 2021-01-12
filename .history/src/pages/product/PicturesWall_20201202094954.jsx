import React from 'react'
import { Upload, Modal,message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {reqDeleteImg} from '../../api'
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class PicturesWall extends React.Component {
  state = {
    previewVisible: false,//标识是否显示大图预览
    previewImage: '',//大图的url或者base64值
    previewTitle: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

//获取所有以上传图片文件名的数组
getImgs = ()=>{
  return this.state.fileList.map(file => file.name)
// return this.state.fileList.map((item,i)=>{
//         if(item.name){
//           return item.name
//         }
// })
}

//进行大图预览的回调函数  file:当前选中的图片对应的file（每个图片都有一个自己对应的file，才可以显示
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };


  //在file的状态发生改变的监听回调
  handleChange = async ({ file,fileList }) => {//file:当前操作(上传/删除）的file
    if(file.status ==='done'){//如果上传成功
      file = fileList[fileList.length-1]
        const {name,url} = file.response.data//从相应数据中file中取出name和url
        file.name = name//保存到上传的file对象中：将取出的name赋值给file.name
        file.url =url//在file上面添加一个属性url赋值为url
    }else if(file.status ==='removed'){//删除图片
   
      const result = await reqDeleteImg(file.name)
    
      if(result.status===0){
        message.success('删除图片成功')
      }else{
        message.error('删除图片失败')
      }
    }
    //更新状态
    this.setState({ fileList });
  }

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          action="/manage/img/upload"//上传图片的路径
          name="image"//图片文件对应的参数名称
          listType="picture-card"//显示风格
          fileList={fileList}//已上传的所有图片文件信息对象的数组
          onPreview={this.handlePreview}//进行大图预览的回调函数
          onChange={this.handleChange}//
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

