import React from 'react'
import {
    PlusOutlined,
  } from '@ant-design/icons'
//引入接口请求函数
import {reqProducts,reqSearchProducts,reqUpdateStatus} from '../../api'
import { Card,Select,Input,Button,Table, Switch, message} from 'antd'
import {PAGE_SIZE} from '../../utils/Constants'
import memoryUtils from '../../utils/memoryUtils'
  const Option = Select.Option

export default class Product extends React.Component{

    constructor(){
        super()
        this.state={
            loading:false,//是否正在加载中
            products:[],//商品列表
            total:0,//商品的总数量
            searchType:'productName',//默认是按照商品名称搜索
            searchName:'',//搜索的关键字

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
                width:100,
                //dataIndex:'status',
                render:({_id,status})=>{
                    let btnText = '下架'
                    let text = '目前在售'
                    if(status ===2){
                        btnText = '上架'
                        text = '已下架'
                    }
                    return (
                        <span>
                            <Button type="primary" onClick={()=>{this.updataStatus(_id,status)}}>{btnText}</Button>
                            <span>{text}</span>
                        </span>
                    )
                }
            },
            {
                title:"操作",
                render:(product)=>(
                    <span>
                        <Button 
                            onClick={()=>{
                                memoryUtils.product = product//在内存中保存product给detail使用
                                this.props.history.push('/product/detail')
                            }}
                        >详情</Button>
                        <Button 
                            onClick={()=>{
                                memoryUtils.product = product//在内存中保存product给detail使用
                                this.props.history.push('/product/addupdate')
                            }}
                        >修改</Button>
                    </span>
                )
            },
        ]
    }

    //上架下架
    updataStatus=async(productId,status)=>{
        //获取状态值
         status= status===1?2:1
        const result = await reqUpdateStatus(productId,status)
        if(result.status === 0){
            message.success('更新商品状态成功！')
            this.getProducts(this.pageNum)
        }
    }



    //异步获取指定页码商品分页（可能带搜索）列表显示
    getProducts = async (pageNum)=>{
        this.pageNum = pageNum
        const { searchName,searchType} =this.state
        let result
        if(!searchName){//rugu如果是一般分页
                //发请求获取数据
             result = await reqProducts(pageNum,PAGE_SIZE)
        }else{
             result = await reqSearchProducts({pageNum,pageSize:PAGE_SIZE,searchName,searchType})
        }
    
        if(result.status===0){
            //取出数据
            const {total,list} = result.data
            //ge更新状态
            this.setState({
                products:list,
                total:total
            })
        }
    }


    componentWillMount(){
        this.initColumns()    
    }

    componentDidMount(){
        this.getProducts(1)//获取第一页显示
    }

    render(){
        const title = (
            <span>
                <Select 
                    style={{width:200}} 
                    value={this.state.searchType} 
                    onChange={(value)=>this.setState({searchType:value})}>
                    <Option value="productName">按名称搜索</Option>
                    <Option value="productDesc">按描述搜索</Option>
                </Select>
                <Input 
                    style={{width:200,margin:'0 10px'}} 
                    placeholder="关键字" value={this.state.searchName}
                    onChange={(e)=>this.setState({searchName:e.target.value})}>

                    </Input>
                <Button type="primary" onClick={()=>{this.getProducts(1)}}>搜索</Button>
            </span>
        )
        const extra = (
            <Button type="primary" onClick ={()=>this.props.history.push('/product/addupdate')}>
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
                            pagination={{defaultPageSize:PAGE_SIZE,
                                        total:this.state.total,
                                        onChange:this.getProducts,
                                        current:this.pageNum}}
                            loading={this.state.loading}
                        >
                        </Table>
                        
        </Card>
    }
}