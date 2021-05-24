import React, {Component} from 'react'



/*
应用根组件
 */
class App extends Component {
  state={
    count:0
  }

  increment=()=>{
    const count = this.refs.selectRef.value*1
    this.setState({
      count:this.state.count+count
    })
  }

  decrement=()=>{
    const count = this.refs.selectRef.value*1
    this.setState({
      count:this.state.count-count
    })
  }

  odd=()=>{
    const count = this.refs.selectRef.value*1
    if(count%2===1){
      this.setState({
        count:this.state.count-count
      })
    }
  }

  async=()=>{
    const count = this.refs.selectRef.value*1
    setTimeout(() => {
      this.setState({
        count:this.state.count-count
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>cilck{this.state.count}times</p>
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