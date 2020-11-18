import React from 'react'
import {
    PlusOutlined,
  } from '@ant-design/icons'

import { Card,Select,Input,Button,Icon,Table, Switch} from 'antd'
  const Option = Select.Option

export default class Product extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

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

        </Card>
    }
}