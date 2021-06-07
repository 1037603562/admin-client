import React, {Component} from 'react'
import PropTypes from 'prop-types'
//import {increment,decrement} from './redux/actions'

/*
应用根组件
UI组件：负责显示（初始显示和更新显示）
在编码上没有使用到任何reudx相关的语法
 */
class Counter extends Component {
 
  //声明一下，声明不是必须写的 只是写了更加规范
    static propTypes = {
     // store:PropTypes.object.isRequired
     count:PropTypes.number.isRequired,
     increment:PropTypes.func.isRequired,
     decrement:PropTypes.func.isRequired
    }

  increment=()=>{
    const count = this.refs.selectRef.value*1
    //this.props.store.dispatch(increment(count))
    this.props.increment(count)
  }

  decrement=()=>{
    const count = this.refs.selectRef.value*1
    //this.props.store.dispatch(decrement(count))
    this.props.decrement(count)
  }

  odd=()=>{
    const count = this.refs.selectRef.value*1
    const counts=this.props.count
    if(counts%2===1){
      this.props.increment(count)
    }
  }
  async=()=>{
    const count = this.refs.selectRef.value*1
    setTimeout(() => {
      this.props.increment(count)
    }, 1000);
  }
  render() {
    const count = this.props.count
    return (
      <div>
        <p>cilck{count}times</p>
        <select ref="selectRef">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.odd}>odd</button>&nbsp;
        <button onClick={this.async}>async</button>
      </div>
    )
  }
}

export default Counter