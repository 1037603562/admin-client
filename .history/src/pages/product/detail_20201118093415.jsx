import React from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar} from 'antd'
const Item = List.Item


const data = [
    {
      title: '商品名称',
      dsc:'描述'
    },
    {
      title: '商品描述',
      dsc:'描述'
    },
    {
      title: '商品价格',
      dsc:'描述'
    },
    {
      title: '所属分类',
      dsc:'描述'
    },
    {
        title: '商品图片',
        dsc:'描述'
      },
  ];
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
            <Card title={title} className="detail"> 
                {/* <List >
                    <Item >
                        <span className="detail-left">商品名称：</span>
                        <p style={{float:'left'}}>ss</p>
                    </Item>
                    <Item >
                        <span className="detail-left">商品描述</span>
                        <p>fgg</p>
                    </Item>
                    <Item >
                        <span className="detail-left">商品价格</span>
                        <p>111</p>
                    </Item>
                </List> */}
                  <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                            title={<a href="#">{item.title}</a>}
                            description="描述"
                            />
                        </List.Item>
                        )}
                    />
            </Card>
        )
    }
}