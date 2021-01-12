import React from 'react'
import { Card, Button , Table, Modal,Input, message, } from 'antd'
import AddRoleForm from './add-role-form'
import AuthRoleForm from './auth-role-form'
import {reqAddRole,reqRoleLists} from '../../api'
import {formateDate} from '../../utils/dateUtils'
export default class Role extends React.Component{
     formRef = React.createRef();
   
    constructor(){
        super()
        this.state={
            roleList:[
                // {name:'test1',create_time:'1554639521749',auth_time:'1558679920395',auth_name: "test007"},
                // {name:'test2',create_time:'1554639521749',auth_time:'1558679920395',auth_name: "test007"},
                // {name:'test3',create_time:'1554639521749',auth_time:'1558679920395',auth_name: "test007"}
            ],
            showStates:false,
          
            
        }
    }
   componentWillMount(){
        this.initColumns()
   }
   componentDidMount(){
       this.getRoleLists()
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
          render:(create_time)=>{
              return formateDate(create_time)
          }
        },
        {
            title:'授权时间',
            dataIndex: 'auth_time',
            key:'auth_time',
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
            //     return <a href="#" onClick={()=>this.role=role,this.setState({showStates:true,roleType:1})}>设置权限</a>
            // }
            
          },
      ];
   }
   showAuth=(role)=>{
       this.role=role
    this.setState({
        showStates:true,
    })
   }
   //获取角色列表信息
   getRoleLists=async ()=>{
    const result = await reqRoleLists()
    if(result.status === 0){
        console.log(result)

        this.setState({roleList:result.data})
    }
   }
   addHandleOk=async()=>{
    this.setState({showStates:false,})
    //const role = await this.formRef.current.onFinish()
    const role =this.formRef.current.formRef.current.getFieldsValue().roleName //1
    if(role){
        console.log('验证通过--'+role)
        const result = await reqAddRole(role)
        if(result.status ===0){
            message.success('角色添加成功')
            this.getRoleLists()
           
        }else{
            message.error('角色添加失败')
        }
    } 
    // console.log(role)
   }
   addHandleCancel=()=>{
       this.setState({showStates:false,})
   }


   updateHandleOk=()=>{
        this.setState({showStates:false,})

        }
    updateHandleCancel=()=>{
        this.setState({showStates:false,})
    }

    render(){
        
        const role = this.role 
        const title =(
            <Button type="primary" onClick={()=>{this.setState({showStates:true,})}}>创建角色</Button>
        )
        return  <Card title={title} bordered={false}>
                    <Table
                        bordered
                        columns={this.columns}
                        dataSource={this.state.roleList}
                        rowKey="_id"
                    ></Table>
                    <Modal
                        title='添加角色'
                        visible={this.state.showStates}
                        onOk={this.addHandleOk}
                        onCancel={this.addHandleCancel}
                    >
                        <AddRoleForm ref={this.formRef} role={role}></AddRoleForm>
                    </Modal>

                    <Modal
                        title='设置权限'
                        visible={this.state.showStates}
                        onOk={this.updateHandleOk}
                        onCancel={this.updateHandleCancel}
                    >
                        <AuthRoleForm  role={role}></AuthRoleForm>
                    </Modal>
                </Card>
    }
}