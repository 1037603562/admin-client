import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
 import './product.less'

import ProductHome from './productHome'

import ProductDetail from './detail'

import ProductAddUpdate from './add-update'

/**
 * 商品管理
 */
export default class Product extends Component {

  render () {
    return (
      <Switch>
        <Route path="/product" exact component={ProductHome}/>
        <Route path="/product/addupdate" component={ProductAddUpdate}/>
        <Route path="/product/detail" component={ProductDetail}/>
        {/* <Redirect to="/product" /> */}
      </Switch>
    )
  }
}
