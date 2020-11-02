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
    static propTypes ={
        setForm:this.formRef
        
    }

    componentWillMount(){
       this.props.setForm()
    //    this.props.getAddMsg(this.props.form)
     
    }
    componentDidMount(){
        // 得到 Form 实例
    const form = this.formRef.current
    // 使用 getFieldsValue 获取多个字段值
    const values = form.getFieldsValue(['name','age'])
    console.log(values)
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