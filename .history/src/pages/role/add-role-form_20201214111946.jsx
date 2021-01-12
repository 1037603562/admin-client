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
        console.log('Success:', values);
      }

    render(){
        
        return  <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
        >
            <Form.Item
                name="username"
                rules={[{required: true, whitespace:true,message:'用户名必填'},
                        { max:12,message:'用户名不能大于12位' },
                        { min:4, message:'用户名不能小于4位'},
                        {pattern:/^[a-zA-Z0-9_]+$/, message:'必须是英文、数字或下划线组成'}
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
        </Form>
          
            
          
        
    }
}