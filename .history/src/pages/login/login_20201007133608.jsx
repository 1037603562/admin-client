import React from 'react'
import './login.less'
import logo from './images/logo.png'


export default class Login extends React.Component{

    render(){
        return <div className="login">
                    <div className="login-hreader">
                        <img src={logo} alt=""/>
                        <h1>React项目：后台管理系统</h1>
                    </div>
                    <div className="login-content">
                        <h1>用户登录</h1>
                        <div>form组件界面</div>
                    </div>
        </div>
    }
}