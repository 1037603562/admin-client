## 笔记
操作测试
1.在利用antd4.x的form表单做数据收集的时候，需要先在父组件当中定义ref，并引用到子组件上面，然后在子组件当中也要定义ref，并将其引用的子组件的form表单上面，
2.在子组件当中如下：注意：在antd4.x版本当中获取表单域数据有2中情况：1.一种是用于函数组件的--》Form.useForm 2.另一种是用于class组件的，本项目中使用的是class组件的 通过ref获取数据域
       componentDidUpdate() {//5.通过ref找到对应的form表单，将form表单的值传给formmsg
      this.formRef.current.setFieldsValue({
          formmsg: this.props.formmsg,
      });
  }
