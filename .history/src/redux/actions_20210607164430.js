/**
 * 包含n个用于创建action对象的工厂函数
 * 
 */
import {INCREMENT,DECREMENT} from './action_types'
 /**创建增加的action */

//  export const increment =(number)=>{
//      return {type:'INCREMENT',number}
//  }
export const increment =(count)=>({type:INCREMENT,count})
 /**创建减少的action */
//  export const decrement =(number)=>{
//     return {type:'DECREMENT',number}
// }
export const decrement =(count)=>({type:DECREMENT,count})

//创建一个异步增加的action 即延时增加
//异步action是一个函数 参数数dispatch函数   1.执行异步代码 2.完成后分发一个同步action
export function incrementDsync(count){
 return dispatch=>{
    //执行异步代码
    setTimeout(() => {
            //完成后分发一个同步action
            dispatch(increment(count))
    }, 1000);
 }
}