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
        console.log('Success:', values.name);
      };

    render(){
        
        return (
          
            <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
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