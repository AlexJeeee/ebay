import React from 'react';
import {Button,Card,Row,Col,Icon,PageHeader,Avatar} from "antd";
import {Link} from 'react-router-dom'
import './HomePage.css'
const { Meta } = Card;



function HomePage() {
    return (
        <div>
            <PageHeader  title="店铺推荐" subTitle="（用户关注的店铺的上新或卖家秀）" />
            <div>
                <div className='containerBox'>
                    <Row gutter={16} type="flex" justify="start" align="bottom">
                        <div>当前商铺：</div>
                        <div className='shopName'>花梨文具店</div>
                    </Row>
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={2} className='leftAndRight'>
                            <Icon type="left-circle" style={{ fontSize: '26px', color: '#797979' }}/>
                            <div className="textTip">前一店铺</div>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="penink"
                                        src={require('../../pictures/penink.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    title="Pilot 钢笔墨水24色  US $18.93"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="papertape"
                                        src={require('../../pictures/papertape.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    title="花瓣美纹纸胶带  GBP 1.99"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="pen"
                                        src={require('../../pictures/pen.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    title="Muji 圆珠笔0.38mm  US $3.70"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="paper"
                                        src={require('../../pictures/paper.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    title="弹簧活页夹内页  US $3.88"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={2} className='leftAndRight'>
                            <div className="textTip">后一店铺</div>
                            <Icon type="right-circle" style={{ fontSize: '26px', color: '#797979' }}/>
                        </Col>
                    </Row>
                </div>
            </div>
            <Row gutter={16} type="flex" justify="space-between" align="middle">
                <PageHeader  title="商品推荐" subTitle="（根据用户最近浏览纪录而推荐的商品或买家秀）" />
                <Link to="/form"><Button className="recommendButton" icon="smile">我要推荐</Button></Link>
            </Row>
            <div>
                <div className='containerBox'>
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={2} className='leftAndRight'>
                            <Icon type="left-circle" style={{ fontSize: '26px', color: '#797979' }}/>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="penink"
                                        src={require('../../pictures/pet1.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={require('../../pictures/Avatar1.jpg')} height='32px'/>}
                                    title="尼龙嚼骨狗玩具三重装  GBP 11.99"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="papertape"
                                        src={require('../../pictures/pet2.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={require('../../pictures/Avatar2.jpg')} height='32px'/>}
                                    title="宠物狗可爱连帽服装  US $9.39"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="pen"
                                        src={require('../../pictures/pet3.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={require('../../pictures/Avatar3.jpg')} height='32px'/>}
                                    title="柔软温暖的狗窝垫毯子  US $4.69"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card
                                cover={
                                    <img
                                        alt="paper"
                                        src={require('../../pictures/pet4.jpg')}
                                    />
                                }
                                actions={[
                                    <div><img src={require('../../pictures/seed.png')} height='18px'/><span> 种草</span></div>,
                                    <div><Icon type="ellipsis" key="ellipsis" /><span> 查看评论</span></div>,
                                    <div><Icon type="edit" key="edit" /><span> 写评论</span></div>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={require('../../pictures/Avatar4.jpg')} height='32px'/>}
                                    title="宠物狗粮20-40公斤  AU $103.98"
                                    description="This is very very very very very very very very very very very very beautiful!"
                                />
                            </Card>
                        </Col>
                        <Col span={2} className='leftAndRight'>
                            <Icon type="right-circle" style={{ fontSize: '26px', color: '#797979' }}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
