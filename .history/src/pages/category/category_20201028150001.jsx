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
      width:200,
      render: () => <a>修改分类</a>,
      
    },
   
  ];
  
  const data = [
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
  ];
export default class Category extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        const extra=(
            <Button type="primary">
                <PlusOutlined />
                添加
            </Button>
        )
        return  <Card extra={extra} >
                   <Table
                    bordered
                    columns={columns}
                    dataSource={data}
                    pagination={{defaultPageSize:2}}
                   >

                   </Table>
                </Card>
    }
}