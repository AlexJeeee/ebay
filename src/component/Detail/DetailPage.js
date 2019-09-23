import React from 'react';
import {Button,Carousel,Breadcrumb,Row,Col,Icon,PageHeader,Card,Avatar,Input,Tooltip} from "antd";
import {Link} from "react-router-dom";
import './DetailPage.css'
const { Meta } = Card;

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
                <Col span={8} offset={6}>
                    <Carousel autoplay>
                        <div>
                            <img  alt="pilot1"  src={require('../../pictures/pilot1.jpg')}  height={'400px'} />
                        </div>
                        <div>
                            <img  alt="pilot2"  src={require('../../pictures/pilot2.jpg')}  height={'400px'} />
                        </div>
                        <div>
                            <img  alt="pilot3"  src={require('../../pictures/pilot3.jpg')}  height={'400px'} />
                        </div>
                        <div>
                            <img  alt="pilot4"  src={require('../../pictures/pilot4.jpg')}  height={'400px'} />
                        </div>
                    </Carousel>
                    <h2>Pilot 钢笔墨水24色</h2>
                    <div>具体描述！！！！！！！编~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                    <div className='line'></div>
                    <h4>评论：</h4>
                    <Meta className='comment'
                    avatar={<Avatar src={require('../../pictures/Avatar2.jpg')} />}
                    title="网友1"
                    description="This is the description"
                    />
                    <Meta className='comment'
                        avatar={<Avatar src={require('../../pictures/Avatar3.jpg')} />}
                        title="网友2"
                        description="This is the description"
                    />
                    <Input className='comment'
                        placeholder="跟大家分享自己的困惑或心得吧~"
                        prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </Col>
                <Col span={8} >
                    <Row style={{'marginBottom':'20px'}}>
                        <PageHeader  title="该商品的其他测评" subTitle=" " />
                        <Button className="inviteButton" icon="smile">邀请测评</Button>
                    </Row>
                    <Card>
                        <Meta className='comment'
                              avatar={<Avatar src={require('../../pictures/pilot5.jpg')} />}
                              title="测评标题1"
                              description="This is the description"
                        />
                        <div className='line'></div>
                        <Meta className='comment'
                              avatar={<Avatar src={require('../../pictures/pilot6.jpg')} />}
                              title="测评标题2"
                              description="This is the description"
                        />
                        <div className='line'></div>
                        <Meta className='comment'
                              avatar={<Avatar src={require('../../pictures/pilot7.jpg')} />}
                              title="测评标题3"
                              description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default DetailPage;
