//入口js

import React from 'react'
import ReactDom from 'react-dom'
// IE polyfill
import  "react-app-polyfill/ie9";
import  "react-app-polyfill/stable";

import './api'

import App from './App'

ReactDom.render(<App/>,document.getElementById('root'))