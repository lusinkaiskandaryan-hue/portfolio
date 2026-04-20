import { DownloadOutlined, HomeOutlined, MailOutlined, ProjectOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Space, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: '/home', icon: <HomeOutlined />, label: 'Home' },
  { key: '/projects', icon: <ProjectOutlined />, label: 'Portfolio' },
  { key: '/contact', icon: <MailOutlined />, label: 'Contact' },
];

export const PortfolioLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <Typography.Title level={4} className="brand-title">
          The Digital Curator
        </Typography.Title>
        <div className="header-actions">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={navItems}
            onClick={({ key }) => navigate(key)}
            className="nav-menu"
          />
          <Button type="primary" icon={<DownloadOutlined />} className="header-download">
            Download PDF
          </Button>
        </div>
      </Header>

      <Content className="app-content">
        <div className="page-shell">
          <Outlet />
        </div>
      </Content>

      <Footer className="app-footer">
        <Space size={16}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            TWITTER
          </a>
        </Space>
        <Typography.Text type="secondary">
          {new Date().getFullYear()} The Digital Curator. Crafted with React and TypeScript.
        </Typography.Text>
      </Footer>
    </Layout>
  );
};
