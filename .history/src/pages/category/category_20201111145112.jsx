import React from 'react'
import {Card,Button,Table,message,Modal} from 'antd'
import {PlusOutlined} from '@ant-design/icons';

import {reqCategorys,reqAddCategory,reqUpdateCategory} from '../../api'
import AddUpdateForm from './add-update-form'
  
export default class Category extends React.Component{
    formRef = React.createRef();
    constructor(){
        super()
        this.state={
            categorys:[
                // {
                //     "_id": "5c2ed631f352726338607046",
                //     "name": "分类001"
                //   },
                //   {
                //     "_id": "5c2ed647f352726338607047",
                //     "name": "分类2"
                //   },
                //   {
                //     "_id": "5c2ed64cf352726338607048",
                //     "name": "1分类3"
                //   }
            ],//所有分类的列表
            loading:false,//是否正在加载中
            showStates:0,//0:不显示，1：显示添加 2:显示修改
            addMsg:null,
        }
    }


    initColumns=()=>{//初始化tabal的所有列的信息
        this.columns = [
            {
              title: '分类的名称',
              dataIndex: 'name',
              
            },
            {
              title: '操作',
              width:300,
              render: (category) => <a onClick={()=>{
                this.category=category//保存当前分类 其他地方都可以读取到  
                this.setState({
                    showStates:2
                })
               
            }}>修改分类</a>,
              
            },
           
          ];
          
    }

    getCategorys=async()=>{//异步获取分类列表显示
        //显示loading
        this.setState({
            loading:true
        })
       const result = await reqCategorys()
       //隐藏loading
       this.setState({
            loading:false
        })
       if(result.status===0){//请求成功
            //取出分类列表数据
            const categorys = result.data
            //更新状态数据
            this.setState({
                categorys
            })
       }else{
           message.error('获取分类列表数据失败')
       }
    }

    // getAddMsg=(msg)=>{
    //     // this.setState({
    //     //     addMsg:msg
    //     // })
    //     console.log(msg)
        
    // }
    //点击确定的回调：去添加或者修改分类
    handleOk=async()=>{
      // console.log(this.formRef.current.formRef.current.getFieldsValue().category)

        //进行表单验证
        // this.form.validateFields(async (err,values)=>{
        //     if(!err){
           
        //     }
        // })
      //yan验证通过后得到输入数据
      //const {categoryName} =this.formRef.current.formRef.current.getFieldsValue()
      let categoryNames =this.formRef.current.formRef.current.getFieldsValue().category //1  
       
        const {showStates} = this.state
        let result
        if(showStates===1){//如果showstates值是1 ze则表明是添加
            //fa发添加分类请求
           
            result = await reqAddCategory(categoryNames)
            
        }else{
            //修改
            const categoryId = this.category._id
            result = await  reqUpdateCategory({categoryNames,categoryId})
        }
     this.setState({showStates:0})



    //根据响应结果做不同处理
    const action = showStates ===1 ? '添加' : '修改'
    if(result.status===0){
         this.getCategorys()//重新获取分类列表显示
         
         message.success(action+'添加成功')
    }else{
        message.error(action+'分类失败')
    }
    }
    //dia点击取消的回调
    handleCancel=()=>{
        this.setState({
            showStates:0
        })
    }

componentWillMount(){
    this.initColumns()
    
    
}

componentDidMount(){//
    this.getCategorys()
 
}

    render(){
        //读取更新的分类名称
        const category = this.category || {}
        
        const extra=(
            <Button type="primary" onClick={()=>{this.setState({showStates:1})}}>
                <PlusOutlined />
                添加
            </Button>
        )
        return  <Card extra={extra} >
                   <Table
                    bordered
                    rowKey="_id"
                    columns={this.columns}
                    dataSource={this.state.categorys}
                    pagination={{defaultPageSize:10}}
                    loading={this.state.loading}
                   >
                   </Table>

                   <Modal
                    title={this.state.showStates ===1 ?'添加分类' : '修改分类'}
                    visible={this.state.showStates!==0}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                        {/* 将子组件传递过来的form对象保存的当前组件对象上 */}
                        {/* <AddUpdateForm setForm={(form) =>{this.form=form}}></AddUpdateForm> */}
                        <AddUpdateForm ref={this.formRef} categoryName={category.name}></AddUpdateForm>
                        {/* //2 */}
                       
                    </Modal>
                </Card>
    }
}