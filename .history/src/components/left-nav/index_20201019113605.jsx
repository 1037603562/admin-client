import React from 'react'
import {Link} from 'react-router-dom'

import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig.js'

import { Menu} from 'antd';
import {
    HomeOutlined,
  MailOutlined,
  AppstoreOutlined,
  BarsOutlined,
  ToolOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  StockOutlined,
  PieChartOutlined
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
 //根据指定的menu数据数组生成<Itrm>和<Submenu>的数组
 getMenuNodes=(menuList)=>{
    return menuList.map(item =>{
        if(!item.children){
            return <Menu.Item key={item.key} className={item.icon}>
                            <Link to={item.key}>{item.title} </Link>
                    </Menu.Item>
        }
        return <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                    {
                        this.getMenuNodes(item.children)
                    }
                </SubMenu>
    })
}
    render(){

       

        return <div className="left-nav">
                    <Link className="left-nav-link" to="/home">
                        <img src={logo} alt="logo"/>
                        <h1>系统后台</h1>
                    </Link>

                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['/home']}>

                        {this.getMenuNodes(menuList)}
                       {/* <Menu.Item key="/home" icon={<HomeOutlined />}>
                                <Link to="/home">首页 </Link>
                        </Menu.Item>

                        <SubMenu key="products" icon={<MailOutlined />} title="商品">
                            <Menu.Item key="/category" icon={<HomeOutlined />}>
                                <Link to="/category">品类管理 </Link>
                            </Menu.Item>
                            <Menu.Item key="/product" icon={<HomeOutlined />}>
                                <Link to="/product">商品管理 </Link>
                            </Menu.Item>
                        </SubMenu> */}
                      
                        </Menu>
                        
               </div>
    }
}