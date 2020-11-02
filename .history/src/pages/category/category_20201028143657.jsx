import React from 'react'
import {Card,Button,Table} from 'antd'
import {PlusOutlined} from '@ant-design/icons';
export default class Category extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Cash Assets',
          className: 'column-money',
          dataIndex: 'money',
          align: 'right',
        },
        {
          title: 'Address',
          dataIndex: 'address',
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
                   >

                   </Table>
                </Card>
    }
}