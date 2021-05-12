import React from 'react'
import { Form, Input, Select } from 'antd';
import {reqRoleLists} from '../../api/index'
import PropTypes from 'prop-types'
const { Option } = Select;

export default class AddUpdateForm extends React.Component{
  formRef = React.createRef()//3.来到子组件当中 定义子组件ref
 
    constructor(){
        super();
        this.state={
          roleList:[]
        }
    }


    componentDidUpdate() {//5.通过ref找到对应的form表单，将form表单的值传给formmsg
      this.formRef.current.setFieldsValue({
          formmsg: this.props.formmsg,
      });
      this.getRoleName()
    console.log(this.state.roleList)
  }
  componentWillMount(){
    
  }

  getRoleName=async()=>{
    const result = await reqRoleLists()
    if(result.status === 0){
      console.log('请求角色列表成功'+result)
      this.setState({
        roleList:result.data.user
      })
      
    }
  }

    render(){
        // 指定Item布局的配置对象
    const formItemLayout = {
        labelCol: { span: 4 },  // 左侧label的宽度
        wrapperCol: { span: 18 }, // 右侧包裹的宽度
      }
        return(
            <Form  {...formItemLayout}
            onFinish={this.onFinish}
            name="basic"
            ref={this.formRef}
          >
            {/* 上方：4.在子组件的form组件上面给定ref */}
            <Form.Item 
              label="用户名"
              name="username"
              rules={[{ required: true, message: '用户名必填!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '密码必填!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="手机号"
              name="phone"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="邮箱"
              name="email"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="角色"
              name="role"
            >
             <Select
                placeholder="Select a option and change input text above"
               
                allowClear
              >
                <Option value="male">male1</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>


          </Form>
        )
    }
}