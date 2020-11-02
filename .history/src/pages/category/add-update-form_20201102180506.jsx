import React from 'react'

import {Form,Input,} from 'antd'
import PropTypes from 'prop-types'

export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件
    formRef = React.createRef();//1.
    constructor(){
        super()
        this.state={
           
        }
    }
    // static propTypes = {
    //     setForm:PropTypes.string.isRequired
    // }
    // componentDidUpdate() {
    //     this.formRef.current.setFieldsValue({
    //         categoryName: this.props.categoryName,
    //     });
    // }
    componentWillMount(){
       
      
    //    this.props.getAddMsg(this.props.form)
     
    }
    componentDidMount(){
    }
       
    render(){
        // 2 ref={this.formRef}
        return <Form ref={this.formRef} >
                   
                       <Form.Item
                      initialValues={this.props.categoryName}
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