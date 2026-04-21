import { Button, Layout, Menu, Space, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  BRAND_TITLE,
  DOWNLOAD_BUTTON_TEXT,
  FOOTER_LINKS,
  FOOTER_TEXT,
  NAV_ITEMS,
} from './consts';
import {
  appContentClassName,
  appFooterClassName,
  appHeaderClassName,
  appLayoutClassName,
  brandTitleClassName,
  headerActionsClassName,
  headerDownloadClassName,
  navMenuClassName,
  pageShellClassName,
} from './styles';
import { getFooterText, getSelectedMenuKey } from './utils';

const { Header, Content, Footer } = Layout;

export const PortfolioLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className={appLayoutClassName}>
      <Header className={appHeaderClassName}>
        <Typography.Title level={4} className={brandTitleClassName}>
          {BRAND_TITLE}
        </Typography.Title>
        <div className={headerActionsClassName}>
          <Menu
            mode="horizontal"
            selectedKeys={[getSelectedMenuKey(location.pathname, location.hash)]}
            items={NAV_ITEMS}
            onClick={({ key }) => navigate(key)}
            className={navMenuClassName}
          />
          <Button type="primary" className={headerDownloadClassName}>
            {DOWNLOAD_BUTTON_TEXT}
          </Button>
        </div>
      </Header>

      <Content className={appContentClassName}>
        <div className={pageShellClassName}>
          <Outlet />
        </div>
      </Content>

      <Footer className={appFooterClassName}>
        <Space size={16}>
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </Space>
        <Typography.Text type="secondary">
          {getFooterText(new Date().getFullYear(), FOOTER_TEXT)}
        </Typography.Text>
      </Footer>
    </Layout>
  );
};
