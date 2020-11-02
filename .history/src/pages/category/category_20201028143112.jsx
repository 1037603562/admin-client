import React from 'react'
import {Card,Button,Table} from 'antd'
import {PlusOutlined} from '@ant-design/icons';
export default class Category extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        const extra=(
            <Button>
                <PlusOutlined />
                添加
            </Button>
        )
        return  <Card extra={extra} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
    }
}