/**
 * 包含n个用于创建action对象的工厂函数
 * 
 */

 /**创建增加的action */

//  export const increment =(number)=>{
//      return {type:'INCREMENT',number}
//  }
export const increment =(number)=>({type:'INCREMENT',count})
 /**创建减少的action */
//  export const decrement =(number)=>{
//     return {type:'DECREMENT',number}
// }
export const decrement =(number)=>({type:'DECREMENT',count})