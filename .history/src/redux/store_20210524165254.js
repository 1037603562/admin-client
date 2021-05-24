/**redux最核心的管理对象 store */
import { createStore } from "redux";

import reducer from "./reducer";
//根据指定的reducer函数 产生一个store对象
const store = createStore(countReducer)
export default store