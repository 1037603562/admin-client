import React from 'react'
import {
    PlusOutlined,
  } from '@ant-design/icons'
//引入接口请求函数
import {reqProducts} from '../../api'
import { Card,Select,Input,Button,Table, Switch} from 'antd'
  const Option = Select.Option

export default class Product extends React.Component{

    constructor(){
        super()
        this.state={
            loading:false,//是否正在加载中
            products:[
                
                    //  {
                    //   "status": 1,
                    //   "imgs": [
                    //     "image-1559402396338.jpg"
                    //   ],
                    //   "_id": "5ca9e05db49ef916541160cd",
                    //   "name": "联想ThinkPad 翼4809",
                    //   "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
                    //   "price": 65999,
                    //   "categoryId": "5ca9db9fb49ef916541160cc",
                    //   "detail": "<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">想你所需，超你所想！精致外观，轻薄便携带光驱，内置正版office杜绝盗版死机，全国联保两年！</span> 222</p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">联想（Lenovo）扬天V110 15.6英寸家用轻薄便携商务办公手提笔记本电脑 定制【E2-9010/4G/128G固态】 2G独显 内置</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">99999</span></p>\n",
                    // }
                 
            ],//商品列表
            total:0,//商品的总数量

        }
    }

    initColumns = ()=>{
        this.columns = [
            {
                title:"商品名称",
                dataIndex:'name'
            },
            {
                title:"商品描述",
                dataIndex:'desc'
            },
            {
                title:"价格",
                //dataIndex:'price'
                // render:(price)=>'￥'+price.price 
                render:(product)=>'￥'+product.price 
            },
            {
                title:"状态",
                width:100,
                dataIndex:'status',
                render:(status)=>{
                    let btnText = '下架'
                    let text = '在售'
                    if(status ===2){
                        btnText = '上架'
                        text = '已下架'
                    }
                    return (
                        <span>
                            <Button type="primary">{btnText}</Button>
                            <span>{text}</span>
                        </span>
                    )
                }
            },
            {
                title:"操作",
                render:(product)=>(
                    <span>
                        <Button>详情</Button>
                        <Button>修改</Button>
                    </span>
                )
            },
        ]
    }

    //异步获取指定页码商品列表显示
    getProducts = async (pageNum)=>{
        //发请求获取数据
        const result = await reqProducts(pageNum,2)
        if(result.status===0){
            //取出数据
            const {total,list} = result.data
            //ge更新状态
            this.setState({
                products:list,
                total:total
            })
        }
    }


    componentWillMount(){
        this.initColumns()    
    }

    componentDidMount(){
        this.getProducts(1)//获取第一页显示
    }

    render(){
        const title = (
            <span>
                <Select style={{width:200}} value="2">
                    <Option value="1">按名称搜索</Option>
                    <Option value="2">按描述搜索</Option>
                </Select>
                <Input style={{width:200,margin:'0 10px'}} placeholder="关键字"></Input>
                <Button type="primary">搜索</Button>
            </span>
        )
        const extra = (
            <Button type="primary">
                <PlusOutlined />
                添加商品
            </Button>
        )
        return <Card title={title} extra={extra}>
                        <Table
                            bordered
                            rowKey="_id"
                            columns={this.columns}
                            dataSource={this.state.products}
                            pagination={{defaultPageSize:10,total:this.state.total}}
                            loading={this.state.loading}
                        >
                        </Table>
        </Card>
    }
}