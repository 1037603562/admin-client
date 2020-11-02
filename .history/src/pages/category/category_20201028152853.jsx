import React from 'react'
import {Card,Button,Table} from 'antd'
import {PlusOutlined} from '@ant-design/icons';

import {reqCategorys} from '../../api'
  
  
export default class Category extends React.Component{

    constructor(){
        super()
        this.state={
            categorys:[
                // {
                //     "_id": "5c2ed631f352726338607046",
                //     "name": "分类001"
                //   },
                //   {
                //     "_id": "5c2ed647f352726338607047",
                //     "name": "分类2"
                //   },
                //   {
                //     "_id": "5c2ed64cf352726338607048",
                //     "name": "1分类3"
                //   }
            ],//所有分类的列表
        }
    }


    initColumns=()=>{//初始化tabal的所有列的信息
        this.columns = [
            {
              title: '分类的名称',
              dataIndex: 'name',
              
            },
            {
              title: '操作',
              width:300,
              render: () => <a>修改分类</a>,
              
            },
           
          ];
    }

    getCategorys=async()=>{//异步获取分类列表显示
       const result = await reqCategorys()
       if(result.status===0){//请求成功
            //取出分类列表数据
            const categorys = result.data
            //更新状态数据
            this.setState({
                categorys
            })
       }else{
           message.error('获取分类列表数据失败')
       }
    }


componentWillMount(){
    this.initColumns()
    
}

componentDidMount(){//
    this.getCategorys()
}

    render(){
        //取出状态数据
        
        const extra=(
            <Button type="primary">
                <PlusOutlined />
                添加
            </Button>
        )
        return  <Card extra={extra} >
                   <Table
                    bordered
                    rowKey="_id"
                    columns={this.columns}
                    dataSource={this.state.categorys}
                    pagination={{defaultPageSize:2}}
                   >

                   </Table>
                </Card>
    }
}