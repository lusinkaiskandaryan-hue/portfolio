import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import { SectionTitle } from '../../components/SectionTitle';
import {
  LIVE_DEMO_TEXT,
  PAGE_SUBTITLE,
  PAGE_TITLE,
  PROJECTS,
  REPOSITORY_TEXT,
} from './consts';
import { descriptionClassName, pageContainerClassName } from './styles';
import { getProjectKey } from './utils';

export const ProjectsPage = () => {
  return (
    <Space direction="vertical" size={24} className={pageContainerClassName}>
      <SectionTitle title={PAGE_TITLE} subtitle={PAGE_SUBTITLE} />

      <Row gutter={[16, 16]}>
        {PROJECTS.map((project) => (
          <Col xs={24} md={12} key={getProjectKey(project)}>
            <Card title={project.name}>
              <Space direction="vertical" size={12}>
                <Typography.Paragraph className={descriptionClassName}>
                  {project.description}
                </Typography.Paragraph>
                <Space wrap>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </Space>
                <Space>
                  <Button icon={<LinkOutlined />} href={project.demoUrl} target="_blank">
                    {LIVE_DEMO_TEXT}
                  </Button>
                  <Button icon={<GithubOutlined />} href={project.repoUrl} target="_blank">
                    {REPOSITORY_TEXT}
                  </Button>
                </Space>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
};
