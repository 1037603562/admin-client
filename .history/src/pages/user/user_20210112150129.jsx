import React from 'react'
import { Card, Button,Form,Table, message } from 'antd'
import {formateDate} from '../../utils/dateUtils'
import {reqUserLists} from '../../api/index'
export default class User extends React.Component{

    constructor(){
        super()
        this.state={
          users:{"status":0,"data":{"users":[{"_id":"5ffd47e104546b28201f1f7d","username":"xiaojunjun","password":"e10adc3949ba59abbe56e057f20f883e","create_time":1610434529687,"__v":0}],"roles":[{"menus":["/products","/category","/product"],"_id":"5fd702136bc23524e4a991b1","name":"sdf","create_time":1607926291020,"__v":0,"auth_name":"admin","auth_time":1610418738499},{"menus":["/products","/category","/product"],"_id":"5fd7140e6bc23524e4a991b2","name":"用户甲","create_time":1607930894395,"__v":0,"auth_name":"admin","auth_time":1610418783222},{"menus":["/products","/category","/product"],"_id":"5fd714c16bc23524e4a991b3","name":"用户乙","create_time":1607931073924,"__v":0,"auth_name":"admin","auth_time":1610422989948},{"menus":[],"_id":"5fd723b90e69fa2aec84eabd","name":"用户丙","create_time":1607934905553,"__v":0},{"menus":[],"_id":"5fd723be0e69fa2aec84eabe","name":"用户丙","create_time":1607934910568,"__v":0},{"menus":[],"_id":"5fd724080e69fa2aec84eabf","name":"水电费","create_time":1607934984521,"__v":0},{"menus":[],"_id":"5fd7247e0e69fa2aec84eac0","name":"dd","create_time":1607935102019,"__v":0},{"menus":[],"_id":"5fd724d90e69fa2aec84eac1","name":"ssss","create_time":1607935193187,"__v":0},{"menus":[],"_id":"5fd725020e69fa2aec84eac2","name":"dsf","create_time":1607935234205,"__v":0},{"menus":[],"_id":"5fd725670e69fa2aec84eac3","name":"dsfs","create_time":1607935335320,"__v":0},{"menus":[],"_id":"5fe9329f1eeb1710d4081a43","name":"ss","create_time":1609118367734,"__v":0},{"menus":[],"_id":"5ffbcc70bd121b230cfec305","name":"是","create_time":1610337392401,"__v":0},{"menus":[],"_id":"5ffbcca2bd121b230cfec306","name":"是","create_time":1610337442165,"__v":0},{"menus":[],"_id":"5ffbccbbbd121b230cfec307","name":"合格v","create_time":1610337467091,"__v":0},{"menus":[],"_id":"5ffc0c80a2c83324d08fa0bb","name":"cssss","create_time":1610353792478,"__v":0},{"menus":["/products","/category","/product"],"_id":"5ffd091304546b28201f1f73","name":"mzj","create_time":1610418451737,"__v":0,"auth_name":"admin","auth_time":1610433869768}]}}
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
  this.getAllUser()
}

getAllUser=async()=>{
  const result = await reqUserLists()
  if(result.status === 0){
    message.success('获取用户列表成功')
    this.setState({
      users:result.users
    })
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
