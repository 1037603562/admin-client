import React from 'react'
import { Form, Input, } from 'antd';
import PropTypes from 'prop-types'


export default class AddUpdateForm extends React.Component{
  //2.父组件传过来的属性setForm要先声明接收一下
  static propTypes={
    setForm:PropTypes.func.isRequired//先说明一下我接收一个什么名字的属性即属性名叫setform ：是一个函数类型的且不可为空

  }
    constructor(){
        super();
        this.state={}
    }

    onFinish=(values)=>{
      // this.props.getMsg(values)
    }

    componentWillMount(){//3.调用父组件的setform方法将form值传过去
      this.props.setForm(this.props.basic)      
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
          >
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
              <Input />
            </Form.Item>


          </Form>
        )
    }
}