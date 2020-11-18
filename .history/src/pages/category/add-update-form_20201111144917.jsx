import React from 'react'

import {Form,Input,} from 'antd'
import PropTypes from 'prop-types'

export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件
    formRef = React.createRef();//1.
    constructor(){
        super()
        this.state={
           //defaultCategorys:''
        }
    }
    // static propTypes = {
    //     setForm:PropTypes.string.isRequired
    // }
    componentDidUpdate() {
        this.formRef.current.setFieldsValue({
            // categoryName: this.props.categoryName,
        });
    }
    componentWillMount(){
       
      
    //    this.props.getAddMsg(this.props.form)
     
    }
    componentDidMount(){
      
       
    }
       
    render(){
        // 2 ref={this.formRef}    initialValues={this.props.categoryName}
        return <Form ref={this.formRef} initialValues={{
            categoryName:this.props.categoryName
        }}>
                   
                       <Form.Item
                     
                    label="分类名称"
                    name="categoryName"
                    rules={[{ required: true, message: '分类名称必填!' }]}
                >
                   <Input type="text" placeholder="请输入分类名称" ></Input>
                </Form.Item>
        </Form>
    }
}
// export default Form.create()(AddUpdateForm)