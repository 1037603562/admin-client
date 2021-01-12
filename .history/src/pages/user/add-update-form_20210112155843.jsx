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
              rules={[{ required: true, message: '用户名必填!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '密码必填!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="手机号"
              name="phone"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="邮箱"
              name="email"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="角色"
              name="role"
            >
              <Input />
            </Form.Item>


          </Form>
        )
    }
}