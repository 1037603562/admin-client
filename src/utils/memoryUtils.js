import storageUtils from './storageUtils.js'
export default {
    user:storageUtils.getUser()//用来存储用户的登录信息，初始值为localstoreage中读取的user
}