import React from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar,Form,Input,Select,Button} from 'antd'

import {reqCategorys} from '../../api'


const Item = Form.Item
export default class ProductAddUpdate extends React.Component{
    constructor(){
        super()
        this.state = {
            categorys:[]
        }
    }

    getCategorys=async ()=>{
        const result = await reqCategorys()
        if(result.status ===0){
            const categorys = result.data
            this.setState({
                categorys
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

        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 8 },
          };
        return(
            
            <Card title={title}> 
           
               <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="商品名称"
                        name="name"
                        rules={[{ required: true, message: '必须输入商品名称!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="商品描述"
                        name="desc"
                        rules={[{ required: true, message: '必须输入商品描述!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="商品价格"
                        name="price"
                        rules={[{ required: true, message: '必须输入商品价格!' }]}
                    >
                        <Input addonAfter="元/>
                    </Form.Item>

                </Form>
            </Card>
        )
    }
}

// export default Form.create()(ProductAddUpdate)