import React from 'react'
import { Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom'

import './login.less'
import logo from './images/logo.png'
import {reqLogin} from '../../api'

export default class Login extends React.Component{

     onFinish = async (values) => {
    //    alert('ok'+values.username)
       const result= await reqLogin(values.username,values.password)
        //登录成功
        if(result.status===0){
            //将user信息存储到localstory当中
            const user = result.data
            localStorage.setItem('user_key',JSON.stringify(user))

            //跳转到admin界面
            this.props.history.replace('/')
            message.success('登录成功')
        }else{//登录失败
            message.error(result.msg)
        }
        

      };
    
      //对密码进行自定义验证
      validatePwd=(rule, value,callback)=>{
            value= value.trim()
            if(!value){
                callback('密码为必填项')
            }else if(value.length<4){
                callback('密码长度不能小于4位')
            }else if(value.length>12){
                callback('密码长度不能大于12位')
            }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
                callback('密码必须是字母数字下划线组成')
            }else{
                callback()//验证通过
            }
      }
    render(){
        //读取保存的user 如果存在直接跳转到管理界面
        const users = JSON.parse(localStorage.getItem('user_key') ||'{}')
        if(!users._id){
            return <Redirect to="/"/>//自动跳转到指定的路由路径
        }


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
                                    rules={[{required: true, whitespace:true,message:'用户名必填'},
                                            { max:12,message:'用户名不能大于12位' },
                                            { min:4, message:'用户名不能小于4位'},
                                            {pattern:/^[a-zA-Z0-9_]+$/, message:'必须是英文、数字或下划线组成'}
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' },
                                            {validator:this.validatePwd}
                                        ]}
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
/*
用户名/密码的的合法性要求
  1). 必须输入
  2). 必须大于等于4位
  3). 必须小于等于12位
  4). 必须是英文、数字或下划线组成
 */