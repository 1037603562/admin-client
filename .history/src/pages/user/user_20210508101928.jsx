import React from 'react'
import { Card, Button,Form,Table, message ,Modal} from 'antd'
import {formateDate} from '../../utils/dateUtils'
import {reqUserLists,reqAddUser} from '../../api/index'
import AddUpdateForm from './add-update-form'
export default class User extends React.Component{
  formRef = React.createRef()//1.定义ref
    constructor(){
        super()
        this.state={
          users:[],
          roles:[],
          isShow:0//0：关闭窗口 1：添加窗口 2：修改窗口
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
          key:'phone'
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
           dataIndex:'_id',
           key:'_id'
           //render: _id => this.roleNames[_id]
           //render:(role_id)=>{
            //return this.roleNames[role_id]
            // }
         },
         {
           title: '操作',
           render: (user) => (
            <span>
              <a onClick={() => this.updateUser(user)}>修改</a>&nbsp;
              <a onClick={() => this.deleteUser(user)}>删除</a>
            </span>
            
          )
              // render: (user) => <a href='#' onClick={this.updateUser(user)}>修改</a> 
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
  console.log(result)
 
  this.roleNames= result.data.roles.reduce((pre,role)=>{
    pre[role._id] = role.name
    return pre
  },{})
  console.log(this.roleNames)


  if(result.status === 0){
    message.success('获取用户列表成功')
    this.setState({
      users:result.data.users,
      roles:result.data.roles
    })
    
  }else{
    message.error('获取用户列表失败')
  }
   
}

//添加用户
addUser=()=>{
  this.user = null // 去除前面保存的user
  this.setState({
    isShow:1
  })
}

//修改用户
updateUser=(user)=>{
  this.user=user
  this.setState({
    isShow:2
  })
}
//删除用户
deleteUser=(user)=>{
console.log(user)
}
//
handleOk=async()=>{
  if(this.state.isShow === 1){//如果isshow是1则表明是添加
      //alert('添加')
      //从子组件当中获取添加用户的数据信息
      const formmsg =this.formRef.current.formRef.current.getFieldsValue()//6.通过ref获取到表单值
   
      if(!formmsg.username || !formmsg.password) return
      const result=await reqAddUser(formmsg)
      if(result.status === 0){
        message.success('用户添加成功')
        this.getAllUser()
      }else{
        message.error(result.msg)
      }
    }else{//否则就是修改
    alert('修改')
  }
  this.setState({
    isShow:0
  })
}
handleCancel=()=>{//console.log(this.state.roles)
  this.setState({
    isShow:0
  })
}






    render(){
        const user = this.user || {}
        const title =(
            <Button type="primary" onClick={this.addUser}>创建用户</Button>
        )
        return  <Card title={title} bordered={false}>
                     <Table
                        bordered
                        columns={this.columns}
                        dataSource={this.state.users}
                        rowKey="_id"
                    ></Table>


          <Modal title={this.state.isShow===2 ? '修改用户':'添加用户'} visible={this.state.isShow} onOk={this.handleOk} onCancel={this.handleCancel}>
                                      {/* 2.将定义的ref给定到子组件上面 */}
              <AddUpdateForm ref={this.formRef} role={this.state.roles} user={user}  ></AddUpdateForm>
        </Modal>
                </Card>
    }
    
}
