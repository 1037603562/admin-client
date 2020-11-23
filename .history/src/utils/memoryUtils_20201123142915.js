import storageUtils from './storageUtils.js'
const user = storageUtils.getUser()
export default {
    user,//用来存储用户的登录信息，初始值为localstoreage中读取的user
    product:{},//需要查看的商品对象

}