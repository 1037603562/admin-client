import React from 'react'
import {Card,Button,Icon,Table} from 'antd'
export default class Category extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        return  <Card title="Default size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
    }
}