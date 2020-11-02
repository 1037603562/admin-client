
import React from 'react'
import { Redirect} from 'react-router-dom'

export default class Admin extends React.Component{

    render(){
        //读取保存的user 如果不存在直接跳转到登录界面
        const user = JSON.parse(localStorage.getItem('user_key') ||'{}')
        if(!user._id){
           
        }

        return <div>
            hello,{user.username}        
        </div>
    }
}