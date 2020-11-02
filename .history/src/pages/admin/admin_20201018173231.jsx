
import React from 'react'
import {Redirect} from 'react-router-dom'
import storageUtils from '../../utils/storageUtils.js'
import memoryUtils from '../../utils/memoryUtils.js'
export default class Admin extends React.Component{

    render(){
        //读取保存的user 如果不存在直接跳转到登录界面
        //const user = JSON.parse(localStorage.getItem('user_key') ||'{}')
        // const user = storageUtils.getUser()
        const user = memoryUtils.user
        if(!user._id){
            return <Redirect to="/login"/>//自动跳转到指定的路由路径
        }

        return <div>
            hello,{user.username}        
        </div>
    }
}