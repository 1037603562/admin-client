import React, { useState } from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar,Form,Input,Select,Button} from 'antd'

import {reqCategorys} from '../../api'
import memoryUtils from '../../utils/memoryUtils';


const Item = Form.Item
const Option=Select.Option
export default class ProductAddUpdate extends React.Component{
    constructor(){
        super()
        this.state = {
            categorys:[],
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

    // //dui对价格进行自定义验证
    // validatePrice = (values)=>{
    //     if (values === 11) {
    //         return {
    //           validateStatus: 'success',
    //           errorMsg: null,
    //         };
    //       }
    //     }

    componentDidMount(){
        this.getCategorys()
    }
    onFinish=(values,event)=>{
        console.log('Received values of form: ', values);
       
    }
    componentWillMount(){
        const product = memoryUtils.product
        console.log(memoryUtils.product)
        this.isUpdate = !!product._id//取反再取反（将一个数据强制转换为一个对应的布尔值），和下面一样
        // if(product._id){
        //     this.isUpdate = true
        // }else{
        //     this.isUpdate = false
        // }
    }
    render(){
        const {categorys} = this.state
        const {isUpdate,product} =this
        const title = (
            <span onClick={()=>this.props.history.goBack()}>
                <a href="#"><ArrowLeftOutlined /></a>
        <span> {isUpdate ? '修改商品' : '添加商品'}</span>
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
               
                onFinish={this.onFinish}
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
                        rules={[
                            { required: true, message: '必须输入商品价格!' },
                            // 自定义验证规则
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (value==='') {
                                    return Promise.resolve();
                                  }else if(value * 1 <=0){
                                    return Promise.reject('价格必须大于0');  
                                  }else{
                                    return Promise.resolve();
                                  }
                                },
                              }),
                        ]}
                    >
                        <Input addonAfter="元" type="number"/>
                    </Form.Item>

                    <Form.Item
                        label="商品分类"
                        name="categoryId"
                        rules={[{ required: true, message: '必须输入商品分类!' }]}
                    >
                        <Select>
                            <Option value=''>未选择</Option>
                            {
                                // categorys.map((item,i)=>{
                                //     return <Option value={item._id} key={item.id}>{item.name}</Option>
                                // })
                                categorys.map(item => <Option value={item._id} key={item._id}>{item.name}</Option>)
                            }
                        </Select>
                    </Form.Item>
                    
                    <Form.Item
                        label="商品图片"
                        name="price"
                        rules={[{ required: true, message: '必须输入商品价格!' }]}
                    >
                       <div>商品图片组件</div>
                    </Form.Item>

                    <Form.Item
                        label="商品详情"
                        name="price"
                        rules={[{ required: true, message: '必须输入商品价格!' }]}
                    >
                       <div>商品详情组件</div>
                    </Form.Item>

                    <Form.Item
                    >
                       <Button type="primary" htmlType="submit">提交</Button>
                    </Form.Item> 
                </Form>
            </Card>
        )
    }
}

// export default Form.create()(ProductAddUpdate)