import React, {Component} from 'react'
import Counter from '../components/counter'
import {connect} from 'react-redux'
import{increment,decrement,incrementDsync} from '../redux/actions'
/**
 * 应用根组件：通过包装ui组件（Counter) 生成容器组件
 *                    哪个组件啊，就是Counter 所以需要引入该组件 如上
 *                                    但是通过谁来进行这个包装操作呢 因此有一个新的语法出现了 即函数connect 通过该函数
 *                                    产生一个容器组件 如上
 */

// const mapStateToprops=(state)=>({
//   count:state
// })
// const mapDispatchToProps=(dispatch)=>({
//   increment:(count)=>{dispatch(increment(count))},
//   decrement:(count)=>{dispatch(decrement(count))}
// })

// export default connect(
//     mapStateToprops,//用来指定传递哪些一般属性（一般属性即非函数的属性） 一般属性用来父向子通讯 函数属性用来子向父通讯
//                     //mapStateToprops参数的作用是将redux里面store里面的state 转换成一般属性交给UI组件Counter去显示
//     mapDispatchToProps//用来指定传递哪些函数属性
// )(Counter)
/**
 * connect()(Counter)返回的组件与括号里面的Counter组件是什么关系？父子关系，如何体现的呢
 * A组件和b组件是父子关系 a组件里面包含了一个b组件的标签 而且还要负责向b组件标签内部传递属性   注：容器组件是ui组件(Counter)的父组件
 * 传递哪些属性呢 即counter.jsx里面的count increment 和decrement
 * 
 * 所以 这种情况“export default connect()(Counter)” 下是还没有指定属性的
 * 那么传递属性方式如上
 * 
 */


 //z最终写法
 export default connect(
   state => ({count:state}),
   {increment,decrement,incrementDsync}
 )(Counter)