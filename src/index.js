//入口js

import React from 'react'
import ReactDom from 'react-dom'
// IE polyfill
import  "react-app-polyfill/ie9";
import  "react-app-polyfill/stable";



import App from './App'

import store from './redux/store'
ReactDom.render(<App store={store}/>,document.getElementById('root'))
 
//绑定监视store内部状态数据改变的监听
store.subscribe(() => {
    //重新渲染标签
    ReactDom.render(<App store={store}/>,document.getElementById('root'))
})