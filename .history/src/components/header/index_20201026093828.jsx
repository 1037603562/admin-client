import React from 'react'
import './index.less'
import memoryUtils from '../../utils/memoryUtils'
export default class Header extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        return <div className="header">
                    <div className="header-top">
                        欢迎，{memoryUtils.user.username}&nbsp;
                        <a href="javascript:">退出</a>
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