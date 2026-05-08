import { Card, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import type { ExperienceSectionProps } from './consts';
import {
  experienceCardClassName,
  experienceCompanyClassName,
  experienceHeadClassName,
  experienceItemClassName,
  experienceListClassName,
  experiencePeriodClassName,
  experienceRoleClassName,
  experienceSectionHeadClassName,
  experienceSectionMetaClassName,
  experienceSectionTitleClassName,
  experienceSummaryClassName,
} from './styles';
import { getExperienceKey } from './utils';

export const ExperienceSection = ({ title, sideLabel, items, cardId }: ExperienceSectionProps) => {
  return (
    <Card id={cardId} className={experienceCardClassName}>
      <div className={experienceSectionHeadClassName}>
        <Typography.Title level={3} className={experienceSectionTitleClassName}>
          {title}
        </Typography.Title>
        <Link to="/experience" className={`${experienceSectionMetaClassName} home-section-head__meta-link`}>
          {sideLabel}
        </Link>
      </div>
      <Space direction="vertical" size={20} className={experienceListClassName}>
        {items.map((item) => (
          <div className={experienceItemClassName} key={getExperienceKey(item)}>
            <div className={experienceHeadClassName}>
              <Typography.Title level={5} className={experienceRoleClassName}>
                {item.role}
              </Typography.Title>
              <Typography.Text className={experiencePeriodClassName}>{item.period}</Typography.Text>
            </div>
            <Typography.Text className={experienceCompanyClassName}>{item.company}</Typography.Text>
            <Typography.Paragraph className={experienceSummaryClassName}>{item.summary}</Typography.Paragraph>
          </div>
        ))}
      </Space>
    </Card>
  );
};
