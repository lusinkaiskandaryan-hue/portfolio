import { LinkOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  EXPERIENCES,
  EXPERIENCE_SIDE_LABEL,
  EXPERIENCE_TITLE,
} from '../../components/ExperienceSection/consts';
import { ExperienceSection } from '../../components/ExperienceSection';
import { SectionTitle } from '../../components/SectionTitle';
import {
  LIVE_DEMO_TEXT,
  PAGE_SUBTITLE,
  PAGE_TITLE,
  PROJECTS,
  PROJECTS_TITLE,
  SELECTED_WORKS_CTA_BODY,
  SELECTED_WORKS_CTA_BUTTON,
  SELECTED_WORKS_CTA_TITLE_ACCENT,
  SELECTED_WORKS_CTA_TITLE_PRIMARY,
} from './consts';
import { pageContainerClassName } from './styles';

export const ExperiencePage = () => {
  return (
    <Space direction="vertical" size={24} className={pageContainerClassName}>
      <SectionTitle title={PAGE_TITLE} subtitle={PAGE_SUBTITLE} />

      <ExperienceSection title={EXPERIENCE_TITLE} sideLabel={EXPERIENCE_SIDE_LABEL} items={EXPERIENCES} />

      <Card className="projects-card">
        <Typography.Title level={3} className="projects-card__heading">
          {PROJECTS_TITLE}
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {PROJECTS.map((project) => (
            <Col xs={24} md={12} key={project.name}>
              <div className="projects-project">
                <img src={project.imageUrl} alt={project.name} className="projects-project__thumb" />
                <Typography.Title level={5} className="projects-project__name">
                  {project.name}
                </Typography.Title>
                <Typography.Text className="projects-muted">{project.subtitle}</Typography.Text>
                <Typography.Text className="projects-project__cta">{project.cta}</Typography.Text>
                {project.demoUrl && <Button icon={<LinkOutlined />} href={project.demoUrl} target="_blank">
                  {LIVE_DEMO_TEXT}
                </Button>}
              </div>
            </Col>
          ))}
        </Row>

        <div className="experience-selected-cta" aria-labelledby="experience-selected-cta-heading">
          <Typography.Title level={2} className="experience-selected-cta__title" id="experience-selected-cta-heading">
            <span className="experience-selected-cta__title-line">{SELECTED_WORKS_CTA_TITLE_PRIMARY}</span>
            <span className="experience-selected-cta__title-line experience-selected-cta__title-line--accent">
              {SELECTED_WORKS_CTA_TITLE_ACCENT}
            </span>
          </Typography.Title>
          <Typography.Paragraph className="experience-selected-cta__body">{SELECTED_WORKS_CTA_BODY}</Typography.Paragraph>
          <Link to="/contact" className="experience-selected-cta__button">
            {SELECTED_WORKS_CTA_BUTTON}
          </Link>
        </div>
      </Card>
    </Space>
  );
};
