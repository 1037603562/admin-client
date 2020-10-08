/**
 * 这个是封装的可以发ajax请求的一个函数
 */
import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'

//请求拦截器:让post请求的请求体格式为urlencoded格式 例如 a=1&b=2
// Add a request interceptor
axios.interceptors.request.use(function (config) {
        //得到请求方式和请求体数据
        const {method,data} = config

        //处理post请求，将data对象转换为query参数格式字符串
        if(method.toLowerCase()==='post' && typeof data==='object'){
            config.data = qs.stringify(data)
        }



    return config;
  });



//响应拦截器--1.让请求成功的结果不再是response,而是response.data的值 2.
// 在请求返回之后且在我们指定的请求响应回调函数之前
axios.interceptors.response.use(function (response) {

    return response.data;//返回的结果就会交给我们指定的请求响应回调函数
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //return Promise.reject(error);
    message.error('请求错误：'+error.message)
    //返回一个pending状态的promise 中断promise链
    return new Promise(()=>{})
  });


export default axios