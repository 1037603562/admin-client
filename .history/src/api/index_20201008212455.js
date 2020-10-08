/**
 * 包含系统中所有请求接口的函数：接口请求函数
 */
// import qs from 'qs'
import ajax from './ajax.js'
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