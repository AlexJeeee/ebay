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
import {Link} from "react-router-dom";


function DetailPage() {
    return (
        <div>
            <Breadcrumb style={{margin:'16px 0'}}>
                <Link to="/">
                    <Breadcrumb.Item>
                        <Icon type="home" />
                        <span>   Home</span>
                    </Breadcrumb.Item>
                </Link>
                <Breadcrumb.Item>Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={16}>
                <Col span={10} offset={2}></Col>
                <Col span={10} ></Col>
            </Row>
        </div>
    );
}

export default DetailPage;
