import React from 'react'
import {Redirect} from 'react-router-dom'
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar} from 'antd'
import memoryUtils from '../../utils/memoryUtils';
import {PRODUCT_IMG_BASE} from '../../utils/Constants'
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
        //debugger
        if(!product || !product._id){
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
                    <Item className="detail-item">
                        <span className="detail-left">商品名称：</span>
                        <div style={{display:"flex"}}>{product.name}</div>
                    </Item>
                    <Item >
                        <span className="detail-left">商品描述</span>
                        <p>{product.desc}</p>
                    </Item>
                    <Item >
                        <span className="detail-left">商品价格</span>
                        <p>{product.price}元</p>
                    </Item>
                    <Item >
                        <span className="detail-left">所属分类</span>
                        <p>111</p>
                    </Item>
                    <Item >
                        <span className="detail-left">商品图片</span>
                        <p>
                            {
                                product.imgs.map((img,index)=>{
                                   return <img className="detail-img" src={PRODUCT_IMG_BASE+img} key={img} alt=""/>
                                })
                            }
                            <img className="detail-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605680574845&di=42892e3eb0705334ca9672db62996cb9&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fa%2F50%2F9fe79543.jpg" alt=""/>
                           
                        </p>
                    </Item>
                    <Item >
                        <span className="detail-left">商品详情</span>
                        <div dangerouslySetInnerHTML={{__html:product.detail}}></div>
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