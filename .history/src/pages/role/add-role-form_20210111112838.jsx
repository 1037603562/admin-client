import React from 'react'
import { Form, Input,} from 'antd';
// import menuList from '../../config/menuConfig'


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

    //   onFinish= (values)=>{
    //     console.log(values)
    //     this.props.fun(values)
    //   }
    //  getRoleName=()=>{
    //    return 
    //  }
      componentDidUpdate() {
        this.formRef.current.setFieldsValue({
          roleName: this.props.roleName,
        });
    }       
    render(){
       return <Form
                name="basic"
                onFinish={this.onFinish}
                ref={this.formRef}>
                <Form.Item
                    label="角色名称"
                    name="roleName"
                    rules={[{ required: true, message: '角色名称必填!' }]}
                > <Input />
                </Form.Item>
           </Form>
    }



}