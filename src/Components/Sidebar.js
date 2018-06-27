import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  render() {
    return (
        <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
        >
          <div align="center" className="avatar"/>
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