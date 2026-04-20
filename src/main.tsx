import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App as AntdApp, ConfigProvider, theme } from 'antd';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#7af5cf',
          colorBgBase: '#050d2a',
          colorTextBase: '#d7e1ff',
          borderRadius: 16,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        },
      }}
    >
      <AntdApp>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>,
);
