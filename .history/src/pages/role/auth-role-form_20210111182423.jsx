import React from 'react'
import { Form, Input, Button,message,Tree } from 'antd';
import menuList from '../../config/menuConfig'


export default class AuthRoleForm extends React.Component{
    formRef = React.createRef();//1.
    constructor(){
      super()
      this.state={
        checkedKeys:[]
      }
    }

componentWillMount(){
  const menus = this.props.role.menus
  this.setState({//根据传入角色的menus来更新checkedKeys的内容
    checkedKeys:menus
  })
}

//组件接收到新的标签属性时会执行，初始显示时是不会调用的  nextProps：接收到的新的属性的对象
componentWillReceiveProps(nextProps){
  const menus = nextProps.role.menus
  this.setState({//根据传入角色的menus来更新checkedKeys的内容
    checkedKeys:menus
  })
}

getMenus=()=>this.state.checkedKeys

      onFinish= (val)=>{
console.log(val)
      }
     
     //进行勾选操作时的回调  checkedKeys里面是最新的勾选的key的数组
      handCheck=(checkedKeys)=>{
        this.setState({
          checkedKeys:checkedKeys
        })
      }
      
    render(){
      const treeData=menuList
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
  
        const onSelect = (selectedKeys, info) => {
          console.log('selected', selectedKeys, info);
        };
      
        const onCheck = (checkedKeys, info) => {
          console.log('onCheck', checkedKeys, info);
        };
      const { role } = this.props
      const {checkedKeys} = this.state
       return <Form
                name="basic"
                onFinish={this.onFinish}
                ref={this.formRef} >
                <Form.Item
                    label="角色名称"
                    name="roleName"
                    rules={[{ required: true, message: '角色名称必填!' }]}
                > <Input value={role ? role.name :null} disabled={role ? true :false}/>
                <a href="#">{role._id}</a>
                </Form.Item>
                <Tree
                  defaultExpandAll
                  checkable
                  onSelect={onSelect}
                  onCheck={onCheck}
                  treeData={treeData}
                  checkedKeys={checkedKeys}
                  onCheck={this.handCheck}
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