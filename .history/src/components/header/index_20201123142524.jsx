import React from 'react'
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


import './index.less'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import menuConfig from '../../config/menuConfig'
import {formateDate} from '../../utils/dateUtils'
import {reqWheather} from '../../api/index.js'

class Header extends React.Component{

    constructor(){
        super()
        this.state={
            currentTime:formateDate(Date.now()),
            dayPictureUrl:'',//天气预报图片
            weather:'',//天气文本
        }
    }

    componentDidMount(){
      this.intervalId = setInterval(() => {
            this.setState({
                currentTime:formateDate(Date.now()),
               
            })
        }, 1000);

        //发送jsonp请求 获取天气信息显示
        this.getWheather()

    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
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
                    if(path.indexOf(citem.key) === 0){
                        title =citem.title
                    }
                })
            }
        })
        return title
    }


    //hu获取天气信息显示
    getWheather=async ()=>{
        //发请求
        const {dayPictureUrl,weather} = await reqWheather('北京')
        //更新状态
        this.setState({
            dayPictureUrl:dayPictureUrl,//天气预报图片
            weather:weather,//天气文本
        })

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
                            <span>{this.state.currentTime}</span>
                            <img src={this.state.dayPictureUrl} alt=""/>
                            <span>{this.state.weather}</span>
                        </div>

                    </div>
        </div>
    }
}

export default withRouter(Header)