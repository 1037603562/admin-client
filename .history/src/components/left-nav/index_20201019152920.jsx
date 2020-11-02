import React from 'react'
import {Link,withRouter} from 'react-router-dom'

import './index.less'
import * as Icon from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig.js'

import { Menu} from 'antd';


const { SubMenu } = Menu;


//z左侧导航组件
class leftNav extends React.Component{

    constructor(){
        super()
        this.state={
            // collapsed: false,
        }
    }
 //根据指定的menu数据数组生成<Itrm>和<Submenu>的数组
 getMenuNodes=(menuList)=>{
    return menuList.map(item =>{
// antdesign v4版本的icon图标和之前的版本不一样了，如果从后台或者配置文件当中获取icon图标，使用之前的方式是不行的，我再
//网上找的以下的方法可以使用
        var iconType = item.icon;
        const iconBC = (a)=>
        React.createElement(Icon[iconType],{
            style:{fontSize:'16px'}
        })

        if(!item.children){
            return <Menu.Item key={item.key} icon={item.icon ? iconBC(item.icon) : ''}>
                           
                            <Link to={item.key}>{item.title} </Link>
                    </Menu.Item>
        }
        return <SubMenu key={item.key} title={item.title} icon={item.icon ? iconBC(item.icon) : ''}>
                    {
                        this.getMenuNodes(item.children)
                    }
                </SubMenu>
    })
}
    render(){
//获取当前请求的路由路径
const selectKey = this.props.location.pathname
       

        return <div className="left-nav">
                    <Link className="left-nav-link" to="/home">
                        <img src={logo} alt="logo"/>
                        <h1>系统后台</h1>
                    </Link>

                    <Menu mode="inline" theme="dark" defaultSelectedKeys={[selectKey]}>

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

//向外暴露 使用高阶组件withRouter（）来包装非路由组件；新组件向leftNav传递3个特别的属性：history、location、match
//结果：leftnav可以操作路由相关语法
export default withRouter(leftNav)