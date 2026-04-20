import { Space, Typography } from 'antd';
import type { ReactNode } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
};

export function SectionTitle({ title, subtitle, extra }: SectionTitleProps) {
  return (
    <Space direction="vertical" size={4} style={{ width: '100%' }}>
      <Space align="start" style={{ width: '100%', justifyContent: 'space-between' }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        {extra}
      </Space>
      {subtitle ? <Typography.Text type="secondary">{subtitle}</Typography.Text> : null}
    </Space>
  );
}
