/**
 * 包含系统中所有请求接口的函数：接口请求函数
 */
import ajax from './ajax.js'


//请求登录
export function reqLogin(username,password){
    ajax({
        method:'post',
        url:'http://localhost:5000/login',
        data: {
            username,
            password
          }
    })
}

const name='admin'
const pwd='admin'
reqLogin(name,pwd)