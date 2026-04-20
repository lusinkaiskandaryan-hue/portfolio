import { Space, Typography } from 'antd';
import type { ReactNode } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
};

export const SectionTitle = ({ title, subtitle, extra }: SectionTitleProps) => {
  return (
    <Space direction="vertical" size={4} className="section-title">
      <Space align="start" className="section-title__header">
        <Typography.Title level={2} className="section-title__text">
          {title}
        </Typography.Title>
        {extra}
      </Space>
      {subtitle ? <Typography.Text className="section-title__subtitle">{subtitle}</Typography.Text> : null}
    </Space>
  );
};
