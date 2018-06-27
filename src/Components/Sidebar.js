import React, {Component} from 'react'
import {Layout, Menu, Icon, Row, Col} from 'antd';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const defaultSideInfo = {avatar: "./logo.svg", name: "未登录", id: "点击来登陆"};

class Sidebar extends Component {
  state = {
    collapsed: false,
    logged: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  };
  onUpdate = (state) => {
    this.setState
  };

  render() {
    return (
        <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
        >
          <Row>
            <Col span={9}>
              <div className="side-avatar"></div>
            </Col>
            <Col span={15}>
              <div className="side-avatar-content">
                <span>未登陆<br/></span>
                <span>点击登陆</span>
              </div>
            </Col>
          </Row>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop"/>
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type="user"/>
              <span>User</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type="team"/>
              <span>Team</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="file"/>
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default Sidebar;