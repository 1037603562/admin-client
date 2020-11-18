import React from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar} from 'antd'
const Item = List.Item


const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
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
                            
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="描述"
                            />
                        </List.Item>
                        )}
                    />
            </Card>
        )
    }
}