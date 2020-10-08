/**
 * 这个是封装的可以发ajax请求的一个函数
 */
import axios from 'axios'
import qs from 'qs'

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


export default axios