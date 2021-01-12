import React from 'react'
import { Form,Input, Button, } from 'antd'
export default class addRoleForm  extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }


getRole = (values) => {
  return values
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
                    
                >
                     <Input />
                    
                </Form.Item>
    </Form>
          
        )
    }
}