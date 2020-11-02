import React from 'react'
import {Link} from 'react-router-dom'

import './index.less'
import logo from '../../assets/images/logo.png'


import { Menu} from 'antd';
import {
    HomeOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


//z左侧导航组件
export default class leftNav extends React.Component{

    constructor(){
        super()
        this.state={
            // collapsed: false,
        }
    }

    render(){
        return <div className="left-nav">
                    <Link className="left-nav-link" to="/home">
                        <img src={logo} alt="logo"/>
                        <h1>系统后台</h1>
                    </Link>

                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['/home']}>
                       <Menu.Item key="/home" icon={<HomeOutlined />}>
                                <Link to="/home">首页 </Link>
                        </Menu.Item>

                        <SubMenu key="products" icon={<MailOutlined />} title="商品">
                            <Menu.Item key="/category" icon={<HomeOutlined />}>
                                <Link to="/category">品类管理 </Link>
                            </Menu.Item>
                            <Menu.Item key="/product" icon={<HomeOutlined />}>
                                <Link to="/product">商品管理 </Link>
                            </Menu.Item>
                        </SubMenu>
                      
                        </Menu>
                        
               </div>
    }
}