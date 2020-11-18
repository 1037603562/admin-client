import React from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,} from 'antd'
const Item = List.Item
export default class ProductDetail extends React.Component{
    constructor(){
        super()
        this.state={}
    }


    render(){
        const title = (
            <span onClick={()=>this.props.history.goBack()}>
                <a href="#"><ArrowLeftOutlined /></a>
                <span> 商品详情</span>
            </span>
        )
        return (
            <Card title={title}> 
                <List>
                    <Item>
                        <span>商品名称：</span>
                        <span>sss</span>
                    </Item>
                </List>
            </Card>
        )
    }
}