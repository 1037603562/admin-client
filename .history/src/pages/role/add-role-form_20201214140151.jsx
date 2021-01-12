import React from 'react'
import { Form, Input, Button,message} from 'antd';


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

      onFinishFailed= ()=>{

      }
      onFinish = async (values) => {
       
        console.log('ok--'+values)
         };
         componentDidUpdate() {
            this.formRef.current.setFieldsValue({
                roleName: this.props.roleName,
            });
        }
    render(){
       return <Form
                name="basic"
                ref={this.formRef} 
                initialValues={{  roleName:this.props.roleName }}
                onFinish={this.onFinish}
                
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
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