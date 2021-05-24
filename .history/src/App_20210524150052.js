import React, {Component} from 'react'



/*
应用根组件
 */
class App extends Component {

  increment=()=>{

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
        <p>cilck{count}times</p>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={odd}>odd</button>
        <button onClick={async}>async</button>
      </div>
    )
  }
}

export default App