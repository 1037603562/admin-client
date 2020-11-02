import React from 'react'

import {Form,Input,} from 'antd'


export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        return <Form>
                    <Form.Item  rules={[{ required: true, message: '分类名称必须输入' }]}>
                        <Input type="text" placeholder="请输入分类名称"></Input>
                    </Form.Item>
        </Form>
    }
}

// export default Form.create()(AddUpdateForm)