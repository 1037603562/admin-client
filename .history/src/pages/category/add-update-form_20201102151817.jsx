import React from 'react'

import {Form,Input,} from 'antd'
import PropTypes from 'prop-types'

export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件
    formRef = React.createRef();
    constructor(){
        super()
        this.state={
            sonceshi:'123455'
        }
    }
    // static propTypes ={
    //     setForm:this.formRef.current
        
    // }
getAddMsg=()=>{
     // 得到 Form 实例
     const form = this.formRef.current
     // 使用 getFieldsValue 获取多个字段值
     const values = form.getFieldsValue(['id','vl'])
     console.log(values)
}
    componentWillMount(){
       
      
      this.props.getAddMsg()
     
    }
    componentDidMount(){
        this.getAddMsg()
    }
       
    render(){
        return <Form ref={this.formRef}>
                   
                       <Form.Item
                      
                    label="分类名称"
                    name="category"
                    rules={[{ required: true, message: '分类名称必填!' }]}
                >
                   <Input type="text" placeholder="请输入分类名称"></Input>
                </Form.Item>
        </Form>
    }
}
// export default Form.create()(AddUpdateForm)