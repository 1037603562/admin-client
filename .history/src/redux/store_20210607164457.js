/**redux最核心的管理对象 store */
import { createStore,applyMiddleware } from "redux";

//导入redux-thunk  用来实现异步
import thunk from 'redux-thunk'

import reducer from "./reducer";
//根据指定的reducer函数 产生一个store对象
const store = createStore(reducer,applyMiddleware(thunk))
export default store