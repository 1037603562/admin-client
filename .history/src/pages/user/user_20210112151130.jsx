import React from 'react'
import { Card, Button,Form,Table, message } from 'antd'
import {formateDate} from '../../utils/dateUtils'
import {reqUserLists} from '../../api/index'
export default class User extends React.Component{

    constructor(){
        super()
        this.state={
          users:[]
        }
    }










    initColumns=()=>{
      this.columns=[
       {
         title: '用户名',
         dataIndex: 'username',
         key: 'username',
       },
       {
           title: '邮箱',
         dataIndex: 'email',
         key:'email'
       },
       {
        title: '电话',
          dataIndex: 'phone',
          key:'email'
        },
       {
           title:'注册时间',
           dataIndex: 'create_time',
           render:(create_time)=>{
               return formateDate(create_time)
           }
         },
         {
           title:'所属角色',
           dataIndex:'role_id',
           key:'role_id',
         },
         {
           title: '操作',
               render: (role) => <a href='#'>修改</a> 
           // render: (role)=>{
           //     return <a href="#" onClick={()=>this.role=role,this.showAuth(role)}>设置权限</a>
           // }
           
         },
     ];
  }
componentWillMount(){
  this.initColumns()
  
}
componentDidMount(){
  this.getAllUser()
}
getAllUser=async()=>{
  const result = await reqUserLists()
  if(result.status === 0){
    message.success('获取用户列表成功')
    this.setState({
      users:result.users
    })
    console.log('cddddddddd'+result.users)
  }else{
    message.error('获取用户列表失败')
  }
  
}

    render(){
        const title =(
            <Button type="primary">创建用户</Button>
        )
        return  <Card title={title} bordered={false}>
                     <Table
                        bordered
                        columns={this.columns}
                        dataSource={this.state.users}
                        rowKey="_id"
                    ></Table>
                </Card>
    }
    
}
