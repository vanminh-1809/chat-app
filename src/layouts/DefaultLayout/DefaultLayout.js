import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import { Row, Col } from 'antd';

function DefaultLayout() {
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Sidebar></Sidebar>
                </Col>
                <Col span={18}>
                    <Content></Content>
                </Col>
            </Row>
        </div>
    )
}

export default DefaultLayout;