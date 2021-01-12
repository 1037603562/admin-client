import React from 'react'
import { Form, Input, Button,message,Tree } from 'antd';
import menuList from '../../../../reactProject/reactProject/code/admin-client_final/src/config/menuConfig';


export default class AddRoleForm extends React.Component{
    formRef = React.createRef();//1.
    

      onFinish= (val)=>{
console.log(val)
      }
     
      getNodes=(menuList)=>{
        return menuList.redce((pre,item)=>{
            pre.push(
             { title: item.title,key: item.key,item.children ? this.getNodes(item.children) : null}
            )
          return pre
        },[])
      }       
    render(){
      const treeData = [
        {
          title: '平台权限',
          key: 'all',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
              children: [
                {
                  this.getNodes(menuList)
                }
                // {
                //   title: 'leaf',
                //   key: '0-0-0-0',
                //   disableCheckbox: true,
                // },
                // {
                //   title: 'leaf',
                //   key: '0-0-0-1',
                // },
              ],
            },
            // {
            //   title: 'parent 1-1',
            //   key: '0-0-1',
            //   children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
            // },
          ],
        },
      ];
  
        const onSelect = (selectedKeys, info) => {
          console.log('selected', selectedKeys, info);
        };
      
        const onCheck = (checkedKeys, info) => {
          console.log('onCheck', checkedKeys, info);
        };
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
               defaultExpandAll
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