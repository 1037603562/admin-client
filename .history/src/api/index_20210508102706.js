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
                const {dayPictureUrl,weather} = data.results[0].weather_data[0]
                //上面这个是解构赋值，相当于：const dp=data.results.weather_data[0].dayPictureUrl
                                          //const wh=data.results.weather_data[0].weather
                resolve({dayPictureUrl,weather})
            }else{//失败了
                message.error('天气数据获取失败')
            }
        })
    })


    
    
}


//hu获取分类列表
export const reqCategorys =()=>ajax(BASE+'/manage/category/list')

//t添加分类
export const reqAddCategory =(categoryName)=>ajax.post(BASE+'/manage/category/add',{
    categoryName:categoryName
})
//xi修改分类
export const reqUpdateCategory =(categoryName,categoryId)=>ajax.post(BASE+'/manage/category/update',{
    categoryName:categoryName,
    categoryId:categoryId
})
//ge根据分类id获取分类
export const reqCategory =(categoryId) => ajax(BASE+'/manage/category/info',{
    params:{
        categoryId
    }
})

//获取商品分页列表
export const reqProducts = (pageNum,pageSize)=>ajax(BASE+'/manage/product/list',{
                                                                    params:{//包含所有query参数的对象
                                                                        pageNum,
                                                                        pageSize
                                                                    } 
                                                                })

//根据Name/desc搜索产品分页列表
export const reqSearchProducts = ({pageNum,pageSize,searchName,searchType})=>ajax(BASE+'/manage/product/search',{
                                                                    params:{
                                                                        pageNum,
                                                                        pageSize,
                                                                        [searchType]:searchName,
                                                                       //属性名加中括号，什么时候可以这样用：当属性名是多个或者不确定几个的时候可以用中括号
                                                                    }
})


//对商品进行上架/下架处理
export const reqUpdateStatus = (productId,status)=>ajax(BASE+'/manage/product/updateStatus',{
    method:'POST',
    data:{
        productId,
        status
    }
})

//export const reqUpdateStatus = ()=>ajax.post(BASE+'/manage/product/updateStatus'),{ productId,status}
//删除图片文件
export const reqDeleteImg = (name)=>ajax.post(BASE+'/manage/img/delete',{name})

//添加或者修改商品信息
export const reqAddUpdateProduct = (product)=>ajax.post(
    BASE +'/manage/product/'+(product._id ? 'update' : 'add'),
    product
    )

//创建角色
export const reqAddRole = (roleName)=>ajax.post(
    BASE + '/manage/role/add',{roleName}
)
//获取角色列表
export const reqRoleLists = ()=>ajax(BASE+'/manage/role/list')

//设置权限角色
export const setRole =(Authrole)=>ajax.post(
    BASE + '/manage/role/update',Authrole
)

//获取所有用户列表
export  const reqUserLists = ()=>ajax(BASE + '/manage/user/list')

//t添加用户
export const reqAddUser =(user)=>ajax.post(BASE + '/manage/user/add',user)
//删除用户
export const deleteUser =()=>ajax.post(BASE + '/manage/user/delete',userId)