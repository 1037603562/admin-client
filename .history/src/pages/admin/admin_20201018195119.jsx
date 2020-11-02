
import React from 'react'
import {Redirect} from 'react-router-dom'
//import storageUtils from '../../utils/storageUtils.js'
import memoryUtils from '../../utils/memoryUtils.js'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

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
                    <Footer>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                    </Layout>
                </Layout>
    }
}