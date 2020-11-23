import React from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar,Form,Input,Select,Button} from 'antd'
const Item = Form.Item


import {reqCategorys} from '../../api'

class ProductAddUpdate extends React.Component{
    constructor(){
        super()
        this.state = {
            categors:[]
        }
    }

    getCategorys=async ()=>{
        const result = await reqCategorys()
        if(result.status ===0){
            const categorys = result.data
            this.setState({
                categors
            })
        }
    }


    componentDidMount(){
        this.getCategorys()
    }
    render(){

        const title = (
            <span onClick={()=>this.props.history.goBack()}>
                <a href="#"><ArrowLeftOutlined /></a>
                <span> 添加商品</span>
            </span>
        )


        return(
            <Card title={title}> 
               <Form>

               </Form>
            </Card>
        )
    }
}

export default Form.create()(ProductAddUpdate)