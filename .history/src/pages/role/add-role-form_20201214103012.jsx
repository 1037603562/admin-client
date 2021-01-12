import React from 'react'
import { Form,Input, } from 'antd'
export default class addRoleForm  extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }


getRole = (values) => {
  return this.props.form.getRole()
  };
    render(){
        return (
            <Form
            name="basic"
            onFinish={this.getRole}
            initialValues={{ remember: true }} >
                <Form.Item
                    label="角色名称"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                     <Input />
                     <button onClick={this.getRole}>dd</button>
                </Form.Item>
    </Form>
        )
    }
}