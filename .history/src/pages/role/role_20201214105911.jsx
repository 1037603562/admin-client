import React from 'react'
import { Card, Button , Table, Modal,Input, } from 'antd'
import AddRoleForm from './add-role-form'
import {reqAddRole} from '../../api'
export default class Role extends React.Component{
     formRef = React.createRef();
   
    constructor(){
        super()
        this.state={
            roleList:[
                {name:'test1',create_time:'1554639521749',auth_time:'1558679920395',auth_name: "test007"},
                {name:'test2',create_time:'1554639521749',auth_time:'1558679920395',auth_name: "test007"},
                {name:'test3',create_time:'1554639521749',auth_time:'1558679920395',auth_name: "test007"}
            ],
            showStates:false
        }
    }
   componentWillMount(){
        this.initColumns()
   }
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
          key: 'create_time',
        },
        {
            title: '授权时间',
            dataIndex: 'auth_time',
            key: 'auth_time',
          },
          {
            title: '授权人',
            dataIndex: 'auth_name',
            key: 'auth_name',
          },
          {
            title: '操作',
            width:150,
            render: ()=>{
                return <a href="#">设置权限</a>
            }
            
          },
      ];
   }
   handleOk=()=>{
    this.setState({showStates:false})
    const role = this.formRef.current.onFinish()
    console.log(role)
   }
   handleCancel=()=>{
       this.setState({showStates:false})
   }
    render(){
        
          
        const title =(
            <Button type="primary" onClick={()=>{this.setState({showStates:true})}}>创建角色</Button>
        )
        return  <Card title={title} bordered={false}>
                    <Table
                        bordered
                        columns={this.columns}
                        dataSource={this.state.roleList}
                    ></Table>
                    <Modal
                        title="添加角色"
                        visible={this.state.showStates}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <AddRoleForm ref={this.formRef}></AddRoleForm>
                    </Modal>
                </Card>
    }
}