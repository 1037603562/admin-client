import React from 'react'
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


import './index.less'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import menuConfig from '../../config/menuConfig'
class Header extends React.Component{

    constructor(){
        super()
        this.state={
            currentTime:Date.now()
        }
    }

    //退出登录
    logout=()=>{
        //显示确认提示
        Modal.confirm({
            title: '确认退出吗?',
            icon: <ExclamationCircleOutlined />,
            onOk:()=> {
              console.log('OK');
               //确认之后删除存储的用户信息 
               //local中的
               storageUtils.removeUser()
               //内存中的
               memoryUtils.user={}
               //跳转到登录页面 
               this.props.history.replace('/login')
            },
            onCancel() {
              console.log('Cancel');
            },
          });
       
    }

    getTitle=()=>{
        const path = this.props.location.pathname
        let title =''
        menuConfig.forEach(item =>{
            if(item.key === path){
                title = item.title
            }else if(item.children){
                item.children.find(citem =>{
                    if(citem.key === path){
                        title =citem.title
                    }
                })
            }
        })
        return title
    }

    render(){
        const user = memoryUtils.user
        const title = this.getTitle()
        
        return <div className="header">
                    <div className="header-top">
                        欢迎，{user.username}&nbsp;
                        <a href="#" onClick={this.logout}>退出</a>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-left">{title}</div>
                        <div className="header-bottom-right">
                            <span>{currentTime}</span>
                            <img src="http://f5.market.xiaomi.com/download/MiSafe/0f9daf5ba050f4eda2eea7bbebb22d33bbefa7e48/a.webp" alt=""/>
                            <span>晴</span>
                        </div>

                    </div>
        </div>
    }
}

export default withRouter(Header)