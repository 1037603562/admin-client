/**
 * 真正管理状态数据的函数
 * 
 */

 export default function countReducer(state,action){
    switch (action.type) {
        case 'INCREMENT':
            return state+action.number;
        case 'DECREMENT':
            return state-action.number;
        default://默认值用户产生初始状态值
            return state;
    }
    return
 }