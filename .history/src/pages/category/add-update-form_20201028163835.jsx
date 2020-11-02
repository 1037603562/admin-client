import React from 'react'

import {Form,Input,} from 'antd'


export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        return <Form name="basic"
        initialValues={{ remember: true }}
      >
                    {/* <Form.Item   rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input type="text" placeholder="请输入分类名称"></Input>
                    </Form.Item> */}
                       <Form.Item
                    
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
        </Form>
    }
}

// export default Form.create()(AddUpdateForm)