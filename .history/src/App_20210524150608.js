import React, {Component} from 'react'



/*
应用根组件
 */
class App extends Component {
  state={
    count:0
  }

  increment=()=>{
    const count = this.refs.selectRef.value
    this.setState({
      count:count
    })
  }

  decrement=()=>{

  }

  odd=()=>{

  }

  async=()=>{

  }
  render() {
    return (
      <div>
        <p>cilck{this.state.count}times</p>
        <select ref={selectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.odd}>odd</button>
        <button onClick={this.async}>async</button>
      </div>
    )
  }
}

export default App