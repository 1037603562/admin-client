import React from 'react'
import { Form, Input, Button,message} from 'antd';


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

      onFinishFailed= ()=>{

      }
     
         
    render(){
       return <Form
                name="basic"
                ref={this.formRef} >
                <Form.Item
                    label="角色名称"
                    name="roleName"
                    rules={[{ required: true, message: '必填项' }]}
                >
                    <Input />
                </Form.Item>
           
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