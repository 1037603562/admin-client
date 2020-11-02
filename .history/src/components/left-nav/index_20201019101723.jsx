import React from 'react'
import {Link} from 'react-router-dom'

import './index.less'
import logo from '../../assets/images/logo.png'


import { Menu} from 'antd';
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


//z左侧导航组件
export default class leftNav extends React.Component{

    constructor(){
        super()
        this.state={
            collapsed: false,
        }
    }

    render(){
        return <div className="left-nav">
                    <Link className="left-nav-link" to="/home">
                        <img src={logo} alt="logo"/>
                        <h1>系统后台</h1>
                    </Link>

                    <Menu
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                        >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                        </SubMenu>
                      
                        </Menu>
                        
               </div>
    }
}