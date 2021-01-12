import React from 'react'
import { Form, Input, Button,message,Tree } from 'antd';


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

      onFinish= (val)=>{
console.log(val)
      }
     
         
    render(){
     
      const { role } = this.props
       return <Form
                name="basic"
                onFinish={this.onFinish}
                ref={this.formRef} >
                <Form.Item
                    label="角色名称"
                    name="roleName"
                    rules={[{ required: true, message: '角色名称必填!' }]}
                > <Input value={role.name} disabled/>
                </Form.Item>
                <Tree
              checkable
             
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={treeData}
            />
       </Form>
    }



}
/*
用户名/密码的的合法性要求
  1). 必须输入
  2). 必须大于等于4位
  3). 必须小于等于12位
  4). 必须是英文、数字或下划线组成
 */