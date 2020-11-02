/**
 * 包含系统中所有请求接口的函数：接口请求函数
 */
// import qs from 'qs'
import ajax from './ajax.js'
import jsonp from 'jsonp'
import { message } from 'antd'
const BASE=''

//请求登录
export const reqLogin=(username,password)=>(
    ajax({
        method: 'post',
        url:BASE+'/login',
        data: {//data是对象，默认使用json格式的请求体携带参数数据
            username,
            password
          }
        //data:qs.stringify({username,password})
    })
)

//export const reqLogin=(username,password)=>ajax.post(BASE+'/login',{username,password})

// export function reqLogin(username,password){
//    return ajax({
//         method: 'post',
//         url:BASE+'/login',
//         data: {//data是对象，默认使用json格式的请求体携带参数数据
//             username,
//             password
//           }
//         //data:qs.stringify({username,password})
//     })
// }

// const name='admin'
// const pwd='admin'
// reqLogin(name,pwd).then(result=>{
    
//     console.log('请求成功',result)
// },err=>{
//     alert('请求失败:'+err.message)
// })


//发送jsonp请求得到天气信息
export const reqWheather=(city)=>{
    return new Promise((resolve,reject)=>{
        const url=`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url,{},(error,data)=>{
            if(!error && data.error===0){//成功了
                const {dayPictureUrl,weather} = data.results.weather_data[0]
                //上面这个是解构赋值，相当于：const dp=data.results.weather_data[0].dayPictureUrl
                                          //const wh=data.results.weather_data[0].weather
                resolve({dayPictureUrl,weather})
            }else{//失败了
                message.error('天气数据获取失败')
            }
        })
    })


    
    
}