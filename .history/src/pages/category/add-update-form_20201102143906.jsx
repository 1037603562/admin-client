import React from 'react'

import {Form,Input,} from 'antd'
import PropTypes from 'prop-types'

export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件

    constructor(){
        super()
        this.state={
            sonceshi:'123455'
        }
    }
    static propTypes ={
        setForm: PropTypes.func.isRequired
        
    }

    componentWillMount(){
       this.props.setForm(this.props.form)
    //    this.props.getAddMsg(this.props.form)
  
    }
    componentDidMount(){
        console.log(this.props.form)
    }
    render(){
        return <Form
      >
                   
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