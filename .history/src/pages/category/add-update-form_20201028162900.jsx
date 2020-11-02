import React from 'react'

import {Form,Input,} from 'antd'
import Item from 'antd/lib/list/Item'


export default class AddUpdateForm extends React.Component{//添加或修改分类的form组件

    // constructor(){
    //     super()
    //     this.state={}
    // }

    render(){
        return <Form>
                    <Form.Item>
                        <Input type="text" placeholder="请输入分类名称"></Input>
                    </Form.Item>
        </Form>
    }
}

// export default Form.create()(AddUpdateForm)