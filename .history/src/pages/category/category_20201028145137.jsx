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
      render: text => <a>{修改分类}</a>,
      dataIndex: 'money',
      align: 'right',
    },
   
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
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