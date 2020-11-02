import React from 'react'
import {Link} from 'react-router-dom'

import './index.less'
import logo from '../../assets/images/logo.png'
//z左侧导航组件
export default class leftNav extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        return <div className="left-nav">
                    <Link className="left-nav-link">
                        <img src={logo} alt="logo"/>
                        <h1>系统后台</h1>
                    </Link>
               </div>
    }
}