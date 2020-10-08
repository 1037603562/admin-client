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
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
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