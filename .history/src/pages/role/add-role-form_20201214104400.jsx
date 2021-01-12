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
                ref={this.testRef}
            name="basic"
            onFinish={this.onFinish}
             >
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