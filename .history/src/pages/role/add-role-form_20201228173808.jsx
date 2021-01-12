import React from 'react'
import { Form, Input, Button,message,Tree } from 'antd';
// import menuList from '../../config/menuConfig'


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

      onFinish= (val)=>{
console.log(val)
      }
     
      componentDidUpdate() {
        this.formRef.current.setFieldsValue({
          roleName: this.props.roleName,
        });
    }       
    render(){
      // const treeData=menuList
      // const treeData = [
      //   {
      //     title: '平台权限',
      //     key: 'all',
      //     children: [
      //       {
      //         title: 'parent 1-0',
      //         key: '0-0-0',
      //         disabled: true,
      //         children: [
      //           {
      //             title: 'leaf',
      //             key: '0-0-0-0',
      //             disableCheckbox: true,
      //           },
      //           {
      //             title: 'leaf',
      //             key: '0-0-0-1',
      //           },
      //         ],
      //       },
      //       {
      //         title: 'parent 1-1',
      //         key: '0-0-1',
      //         children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      //       },
      //     ],
      //   },
      // ];
  
        // const onSelect = (selectedKeys, info) => {
        //   console.log('selected', selectedKeys, info);
        // };
      
        // const onCheck = (checkedKeys, info) => {
        //   console.log('onCheck', checkedKeys, info);
        // };
      // const { role } = this.props
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