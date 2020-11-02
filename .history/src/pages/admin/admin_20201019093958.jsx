
import React from 'react'
import {Redirect} from 'react-router-dom'
//import storageUtils from '../../utils/storageUtils.js'
import memoryUtils from '../../utils/memoryUtils.js'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home.jsx'
import Category from '../category/category.jsx'
import Bar from '../charts/bar.jsx'
import Lin from '../charts/lin.jsx'
import Pie from '../charts/pie.jsx'
import Product from '../product/product.jsx'
import Role from '../role/role.jsx'
import User from '../user/user.jsx'

import { Layout } from 'antd';

const {Footer, Sider, Content } = Layout;


export default class Admin extends React.Component{

    render(){
        //读取保存的user 如果不存在直接跳转到登录界面
        //const user = JSON.parse(localStorage.getItem('user_key') ||'{}')
        // const user = storageUtils.getUser()
        const user = memoryUtils.user
        if(!user._id){
            return <Redirect to="/login"/>//自动跳转到指定的路由路径
        }

        return <Layout style={{height:'100%'}}>
                    <Sider>
                        <LeftNav/>
                    </Sider>
                    <Layout>
                    <Header/>
                    <Content style={{backgroundColor:'white'}}>Content</Content>
                    <Footer style={{textAlign:'center',color:'rgba(0,0,0,0.5)'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                    </Layout>
                </Layout>
    }
}