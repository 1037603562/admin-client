import React from 'react'
import {
    PlusOutlined,
  } from '@ant-design/icons'

import { Card,Select,Input,Button,Icon,Table, Switch} from 'antd'
  const Option = Select.Option

export default class Product extends React.Component{

    constructor(){
        super()
        this.state={
            loading:false,//是否正在加载中
            products:[]//shang商品列表
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
                            <button>{btnText}</button>
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
    componentWillMount(){
        this.initColumns()    
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
                            pagination={{defaultPageSize:10}}
                            loading={this.state.loading}
                        >
                        </Table>
        </Card>
    }
}