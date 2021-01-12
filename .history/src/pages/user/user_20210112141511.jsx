import React from 'react'
import { Card, Button,Form, } from 'antd'

export default class User extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        const title =(
            <Button type="primary">创建用户</Button>
        )
        return  <Card title={title} bordered={false}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
    }
    
}
