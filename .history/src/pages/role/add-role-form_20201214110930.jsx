import React from 'react'
import { Form,Input, Button, } from 'antd'
export default class addRoleForm  extends React.Component{
    formRef = React.createRef();
    constructor(){
        super()
        this.state={

        }
    }


    onFinish = (values) => {
  return values
  };
    render(){
        
        return (
          
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            </Form>
          
        )
    }
}