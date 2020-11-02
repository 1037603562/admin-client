import React from 'react'
import {Card,Button,Icon,Table} from 'antd'
export default class Category extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        const extra=(
            <Button>
                <Icon type="plus"></Icon>
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