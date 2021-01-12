import React, { useState } from 'react'

import {
    ArrowLeftOutlined
  } from '@ant-design/icons';

import {Card,List,Avatar,Form,Input,Select,Button, message} from 'antd'

import {reqCategorys,reqAddUpdateProduct} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import PicturesWall from './picturesWall'
import RichTextEditor from './rich-text-editor'

const Item = Form.Item
const Option=Select.Option
export default class ProductAddUpdate extends React.Component{
    constructor(){
        super()
        this.pwRef = React.createRef()//refs
        this.editorRef = React.createRef()//refs
        this.state = {
            categorys:[],
            myid:''
        }
    }

    getCategorys=async ()=>{
        const result = await reqCategorys()
        if(result.status ===0){
            const categorys = result.data
            this.setState({
                categorys,
                product:''
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
    onFinish=async(values,event)=>{
        console.log('Received values of form: ', values);
        console.log('ce',this.state.myid)
        const {name,desc,price,categoryId}=values
        const imgs = this.pwRef.current.getImgs()//收集上传图片文件的名称的数组
        console.log('imgs',imgs)
        //输入的商品详情的标签字符串
        const detail = this.editorRef.current.getDetail()
        console.log('detail',detail)

        //封装一个product对象
        const product ={name,desc,price,categoryId,imgs,detail}
        if(this.isUpdate){
            product._id =this.product._id
            
        }
        //发请求，添加或者修改
       const result = await reqAddUpdateProduct(product)
       if(result.status === 0){
           message.success(`${this.isUpdate ? '修改' : '添加'}商品成功`)
           this.props.history.replace('/product')
       }else{
           message.error(result.msg)
       }
       
    }
    componentWillMount(){
        const product = memoryUtils.product
        this.setState({product:memoryUtils.product})
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
        this.state.myid = this.product
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
                         initialValue={this.state.product.name}
                        label="商品名称"
                        name="name"
                        rules={[{ required: true, message: '必须输入商品名称!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        initialValue={this.state.product.desc}
                        label="商品描述"
                        name="desc"
                        rules={[{ required: true, message: '必须输入商品描述!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        initialValue={this.state.product.price}
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
                        initialValue={this.state.product.categoryId ||''}
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
                        name="imgs"
                      
                    >
                       <PicturesWall ref={this.pwRef} imgs={this.state.product.imgs}></PicturesWall>
                    </Form.Item>

                    <Form.Item
                        label="商品详情"
                        name="details"
                       
                        wrapperCol={ {span: 20} }
                    >
                       <RichTextEditor detail={this.state.product.detail} ref={this.editorRef}/>
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