import {
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MailOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: '/home', icon: <HomeOutlined />, label: 'Home' },
  { key: '/projects', icon: <ProjectOutlined />, label: 'Projects' },
  { key: '/contact', icon: <MailOutlined />, label: 'Contact' },
];

export function PortfolioLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <Typography.Title level={4} className="brand-title">
          Your Name
        </Typography.Title>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={navItems}
          onClick={({ key }) => navigate(key)}
          className="nav-menu"
        />
      </Header>

      <Content className="app-content">
        <div className="page-shell">
          <Outlet />
        </div>
      </Content>

      <Footer className="app-footer">
        <Space size={16}>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <GithubOutlined />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <LinkedinOutlined />
          </a>
          <a href="mailto:hello@example.com">
            <MailOutlined />
          </a>
        </Space>
        <Typography.Text type="secondary">
          {new Date().getFullYear()} Your Name. Built with React + Ant Design.
        </Typography.Text>
      </Footer>
    </Layout>
  );
}
