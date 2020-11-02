import React from 'react'
import {Card,Button,Table} from 'antd'
import {PlusOutlined} from '@ant-design/icons';
const columns = [
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
  
  
export default class Category extends React.Component{

    constructor(){
        super()
        this.state={
            categorys:[
                {
                    "_id": "5c2ed631f352726338607046",
                    "name": "分类001"
                  },
                  {
                    "_id": "5c2ed647f352726338607047",
                    "name": "分类2"
                  },
                  {
                    "_id": "5c2ed64cf352726338607048",
                    "name": "1分类3"
                  }
            ],//所有分类的列表
        }
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
                    columns={columns}
                    dataSource={this.state.categorys}
                    pagination={{defaultPageSize:2}}
                   >

                   </Table>
                </Card>
    }
}