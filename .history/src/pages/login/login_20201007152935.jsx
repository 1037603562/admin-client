import React from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './login.less'
import logo from './images/logo.png'


export default class Login extends React.Component{

     onFinish = (values) => {
       alert('ok')
      };
    

    render(){
        return <div className="login">
                    <div className="login-hreader">
                        <img src={logo} alt=""/>
                        <h1>后台管理系统</h1>
                    </div>
                    <div className="login-content">
                        <h1>用户登录</h1>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="用户名"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="密码"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>
                            

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                    </Button>
                                
                                </Form.Item>
                            </Form>
                                            </div>
        </div>
    }


    



}