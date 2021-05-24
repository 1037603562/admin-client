import React, {Component} from 'react'
import PropTypes from 'prop-types'


/*
应用根组件
 */
class App extends Component {
 
  //声明一下，声明不是必须写的 只是写了更加规范
    static propTypes = {
      store:PropTypes.object.isRequired
    }

  increment=()=>{
    const count = this.refs.selectRef.value*1
    this.props.store.dispatch({type:'INCREMENT',count})
  }

  decrement=()=>{
    const count = this.refs.selectRef.value*1
    this.props.store.dispatch({type:'DECREMENT',count})
  }

  odd=()=>{
    //const num = this.refs.selectRef.value*1
    const count=this.props.state.getState()
    if(count%2===1){
      this.props.store.dispatch({type:'INCREMENT',count})
    }
  }
  async=()=>{
    const count = this.props.store.getState()
    setTimeout(() => {
      this.props.store.dispatch({type:'INCREMENT',count})
    }, 1000);
  }
  render() {
    const count = this.props.store.getState()
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

export default App