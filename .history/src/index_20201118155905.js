//入口js

import React from 'react'
import ReactDom from 'react-dom'
import 'babel-polyfill'

import './api'

import App from './App'

ReactDom.render(<App/>,document.getElementById('root'))