import React from 'react'
import st from '../../utils/storageUtils'
import {
    PlusOutlined,
  } from '@ant-design/icons'
//引入接口请求函数
import {reqProducts,reqSearchProducts} from '../../api'
import { Card,Select,Input,Button,Table, Switch} from 'antd'
import {PAGE_SIZE} from '../../utils/Constants'
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
                dataIndex:'status',
                render:(status)=>{
                    let btnText = '下架'
                    let text = '目前在售'
                    if(status ===2){
                        btnText = '上架'
                        text = '已下架'
                    }
                    return (
                        <span>
                            <Button type="primary">{btnText}</Button>
                            <span>{text}</span>
                        </span>
                    )
                }
            },
            {
                title:"操作",
                render:(product)=>(
                    <span>
                        <Button>详情</Button>
                        <Button>修改</Button>
                    </span>
                )
            },
        ]
    }

    //异步获取指定页码商品分页（可能带搜索）列表显示
    getProducts = async (pageNum)=>{
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
            <Button type="primary">
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
                            pagination={{defaultPageSize:PAGE_SIZE,total:this.state.total,onChange:this.getProducts}}
                            loading={this.state.loading}
                        >
                        </Table>
        </Card>
    }
}