import React from 'react'
import { Form, Input, Button,message,Tree } from 'antd';


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

      onFinish= (val)=>{
console.log(val)
      }
     
         
    render(){
      const Demo = () => {
        const onSelect = (selectedKeys, info) => {
          console.log('selected', selectedKeys, info);
        }
      
        const onCheck = (checkedKeys, info) => {
          console.log('onCheck', checkedKeys, info);
        }
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
              defaultExpandedKeys={['0-0-0', '0-0-1']}
              defaultSelectedKeys={['0-0-0', '0-0-1']}
              defaultCheckedKeys={['0-0-0', '0-0-1']}
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={treeData}
            />
       </Form>
    }



}
