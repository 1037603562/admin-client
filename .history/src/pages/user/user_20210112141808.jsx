import React from 'react'
import { Card, Button,Form, } from 'antd'
import {formateDate} from '../../utils/dateUtils'
export default class User extends React.Component{

    // constructor(){
    //     super()
    //     this.state={}
    // }










    initColumns=()=>{
      this.columns=[
       {
         title: '角色名称',
         dataIndex: 'name',
         key: 'name',
       },
       {
           title: '创建时间',
         dataIndex: 'create_time',
         render:(create_time)=>{
             return formateDate(create_time)
         }
       },
       {
           title:'授权时间',
           dataIndex: 'auth_time',
           render:(auth_time)=>{
               return formateDate(auth_time)
           }
         },
         {
           title:'授权人',
           dataIndex:'auth_name',
           key:'auth_name',
         },
         {
           title: '操作',
               render: (role) => <a onClick={() => this.showAuth(role)}>设置权限</a> 
           // render: (role)=>{
           //     return <a href="#" onClick={()=>this.role=role,this.showAuth(role)}>设置权限</a>
           // }
           
         },
     ];
  }
componentWillMount(){
  this.initColumns()
}



    render(){
        const title =(
            <Button type="primary">创建用户</Button>
        )
        return  <Card title={title} bordered={false}>
                     <Table
                        bordered
                        columns={this.columns}
                        dataSource={this.state.roleList}
                        rowKey="_id"
                    ></Table>
                </Card>
    }
    
}
