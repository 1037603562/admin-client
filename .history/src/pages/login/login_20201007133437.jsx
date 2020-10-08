import React from 'react'
import './login.less'
import logo from './images/logo.png'


export default class Login extends React.Component{

    render(){
        return <div className="login">
                    <div className="login-hreader">
                        <img src={logo} alt=""/>
                        <h1></h1>
                    </div>
                    <div className="login-content"></div>
        </div>
    }
}