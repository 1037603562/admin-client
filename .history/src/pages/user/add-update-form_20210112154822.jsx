import React from 'react'
import { Form, Input, } from 'antd';


export default class AddUpdateForm extends React.Component{
    constructor(){
        super();
        this.state={}
    }




    render(){
        return(
            <Form
            name="basic"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        )
    }
}