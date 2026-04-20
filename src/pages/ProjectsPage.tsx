import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import { SectionTitle } from '../components/SectionTitle';

type Project = {
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    name: 'Project One',
    description: 'Short project description focusing on problem, solution and impact.',
    technologies: ['React', 'TypeScript', 'Antd'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'Project Two',
    description: 'Another project summary. Mention business or user value.',
    technologies: ['Vite', 'React Query', 'Jest'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
];

export function ProjectsPage() {
  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <SectionTitle
        title="Projects"
        subtitle="A curated selection of my frontend work."
      />

      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} md={12} key={project.name}>
            <Card title={project.name}>
              <Space direction="vertical" size={12}>
                <Typography.Paragraph style={{ marginBottom: 0 }}>
                  {project.description}
                </Typography.Paragraph>
                <Space wrap>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </Space>
                <Space>
                  <Button icon={<LinkOutlined />} href={project.demoUrl} target="_blank">
                    Live Demo
                  </Button>
                  <Button icon={<GithubOutlined />} href={project.repoUrl} target="_blank">
                    Repository
                  </Button>
                </Space>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
}
