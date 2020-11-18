import React from 'react'
import {Redirect} from 'react-router-dom'
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar} from 'antd'
import memoryUtils from '../../utils/memoryUtils';

const Item = List.Item


const data = [
    {
      title: '商品名称',
    },
    {
      title: '商品描述',
    },
    {
      title: '商品价格',
    },
    {
      title: '所属分类',
    },
    {
        title: '商品图片',
      },
  ];
export default class ProductDetail extends React.Component{
    constructor(){
        super()
        this.state={}
    }


    render(){
        const product = memoryUtils.product//z从内存中吧produc取出来使用（之前在productHome中将该值保存到了内存中，以便在此时使用
        if(!product){
            return <Redirect to="/product"/>
        }
        const title = (
            <span onClick={()=>this.props.history.goBack()}>
                <a href="#"><ArrowLeftOutlined /></a>
                <span> 商品详情</span>
            </span>
        )
        return (
            <Card title={title} className="detail"> 
                <List >
                    <Item >
                        <span className="detail-left">商品名称：</span>
                        <div style={{float:'left'}}>{product.name}</div>
                    </Item>
                    <Item >
                        <span className="detail-left">商品描述</span>
                        <p>fgg</p>
                    </Item>
                    <Item >
                        <span className="detail-left">商品价格</span>
                        <p>111</p>
                    </Item>
                </List>
                  {/* <List
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
                    /> */}
            </Card>
        )
    }
}