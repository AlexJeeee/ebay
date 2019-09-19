import React from 'react';
import {
  Button,Form,Input,Checkbox,
  Layout,Menu,Breadcrumb,
  Row,Col,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Upload,
    Icon,
    Rate,
    PageHeader,
} from "antd";
//import WrappedFormDetail from 'FormDetail'

const {Header,Content,Footer} = Layout;
const { Option } = Select;

class FormDetail extends React.Component {
    state = {

        textAreaValue: '',

    };
    onChange = ({ target: { textAreaValue } }) => {
        this.setState({ textAreaValue });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { TextArea } = Input;
        const { textAreaValue } = this.state.textAreaValue;
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item label="选择商品" hasFeedback>
                    {getFieldDecorator('select', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="请选择您要种草的商品">
                            <Option value="pen">长刀研</Option>
                            <Option value="ink">墨水</Option>
                            <Option value="pants">优衣库松紧裤</Option>
                        </Select>,
                    )}
                </Form.Item>

                <Form.Item label="上传图片" extra="上传您要种草的商品图片，吸引更多的人来看~">
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> 点击上传
                            </Button>
                        </Upload>,
                    )}
                </Form.Item>

                <Form.Item label='添加描述'>
                    <TextArea
                        value={textAreaValue}
                        onChange={this.onChange}
                        placeholder="写下您对商品独到的测评吧"
                        autosize={{ minRows: 3, maxRows: 10 }}
                        style={{resize:'none'}}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

const WrappedFormDetail = Form.create({ name: 'validate_other' })(FormDetail);


function FormPage() {
  return (
    <Layout>
      <Header>

      </Header>
      <Content style={{padding:'0 50px'}}>
        <Breadcrumb style={{margin:'16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Form</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background:'#fff',padding:24,minHeight:600}}>
            <PageHeader onBack={() => null} title="新种草" subTitle="撰写我自己的种草" />
            <WrappedFormDetail />
        </div>
      </Content>
      <Footer style={{textAlign:'center'}}>
        copyright 2019 ^^
      </Footer>
    </Layout>
  );
}

export default FormPage;
