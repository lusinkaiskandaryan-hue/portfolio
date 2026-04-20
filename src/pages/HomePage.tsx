import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';

const skills = ['React', 'TypeScript', 'Ant Design', 'Vite', 'Testing', 'REST API'];

export function HomePage() {
  return (
    <Space direction="vertical" size={32} style={{ width: '100%' }}>
      <SectionTitle
        title="Frontend Developer"
        subtitle="I build fast, accessible and maintainable web interfaces."
      />

      <Card>
        <Space direction="vertical" size={16}>
          <Typography.Title level={4} style={{ margin: 0 }}>
            About me
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 0 }}>
            Replace this text with your professional summary, years of experience, industries,
            and the type of products you like to build.
          </Typography.Paragraph>
          <Space wrap>
            {skills.map((skill) => (
              <Tag key={skill} color="blue">
                {skill}
              </Tag>
            ))}
          </Space>
          <Button type="primary">
            <Link to="/projects">
              View my projects <ArrowRightOutlined />
            </Link>
          </Button>
        </Space>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Experience">
            <Typography.Text type="secondary">
              Add your work experience timeline here.
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Highlights">
            <Typography.Text type="secondary">
              Add your strongest achievements and outcomes.
            </Typography.Text>
          </Card>
        </Col>
      </Row>
    </Space>
  );
}
