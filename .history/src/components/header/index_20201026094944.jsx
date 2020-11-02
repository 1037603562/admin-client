import React from 'react'

import { Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


import './index.less'
import memoryUtils from '../../utils/memoryUtils'
export default class Header extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    //退出登录
    logout=()=>{
        //显示确认提示
        Modal.confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            onOk() {
              console.log('OK');
               //确认之后删除存储的用户信息  
            },
            onCancel() {
              console.log('Cancel');
            },
          });
       
    }


    render(){
        const user = memoryUtils.user
        return <div className="header">
                    <div className="header-top">
                        欢迎，{user.username}&nbsp;
                        <a href="javascript:" onClick={this.logout}>退出</a>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-left">角色管理</div>
                        <div className="header-bottom-right">
                            <span>2020-10-21 15:27:20</span>
                            <img src="http://f5.market.xiaomi.com/download/MiSafe/0f9daf5ba050f4eda2eea7bbebb22d33bbefa7e48/a.webp" alt=""/>
                            <span>晴</span>
                        </div>

                    </div>
        </div>
    }
}