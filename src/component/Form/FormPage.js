import React from 'react';
import {
  Button,Form,Input,
  Layout,Menu,Breadcrumb,
  Row,Col
} from "antd";

const {Header,Content,Footer} = Layout;


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
        <div style={{background:'#fff',padding:24,minHeight:280}}>
          <Row>
            <Col span={8}>选择商品</Col>
            <Col span={16}>

            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{textAlign:'center'}}>
        copyright 2019 ^^
      </Footer>
    </Layout>
  );
}

export default FormPage;
