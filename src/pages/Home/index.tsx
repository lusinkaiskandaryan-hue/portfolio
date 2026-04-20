import { DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Progress, Row, Space, Tag, Typography } from 'antd';
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_TITLE,
  EDUCATION_DEGREE,
  EDUCATION_PERIOD,
  EDUCATION_SCHOOL,
  EDUCATION_TITLE,
  EXPERIENCE_SIDE_LABEL,
  EXPERIENCE_TITLE,
  EXPERIENCES,
  EXPERTISE_ITEMS,
  EXPERTISE_SUBTITLE,
  EXPERTISE_TITLE,
  HERO_BODY,
  HERO_BODY_SECONDARY,
  HERO_TITLE_EMPHASIS,
  HERO_TITLE_PREFIX,
  PERSONAL_INFO,
  PROFILE_IMAGE_URL,
  PROFILE_NAME,
  PROFILE_ROLE,
  PROJECTS,
  PROJECTS_TITLE,
  QUOTE_TEXT,
  QUOTE_TITLE,
  SKILLS,
} from './consts';
import { homePageClassName, profileAvatarClassName } from './styles';
import { formatExpertisePercent, mapSkillToTagKey } from './utils';

export const HomePage = () => {
  return (
    <div className={homePageClassName}>
      <div className="home-page__grid">
        <aside className="home-sidebar">
          <Card className="home-card home-profile">
            <img src={PROFILE_IMAGE_URL} alt={PROFILE_NAME} className={profileAvatarClassName} />
            <Typography.Title level={3} className="home-profile__name">
              {PROFILE_NAME}
            </Typography.Title>
            <Typography.Text className="home-profile__role">{PROFILE_ROLE}</Typography.Text>
          </Card>

          <Card className="home-card home-meta">
            {PERSONAL_INFO.map((item) => (
              <div className="home-meta__row" key={item.label}>
                <Typography.Text className="home-meta__label">{item.label}</Typography.Text>
                <Typography.Text className="home-meta__value">{item.value}</Typography.Text>
              </div>
            ))}
          </Card>

          <Card className="home-card">
            <Typography.Title level={5} className="home-card__title">
              Skills
            </Typography.Title>
            <Space wrap>
              {SKILLS.map((skill) => (
                <Tag key={mapSkillToTagKey(skill)} className="home-skill-tag">
                  {skill}
                </Tag>
              ))}
            </Space>
          </Card>

          <Card className="home-card">
            <Typography.Title level={5} className="home-card__title">
              {EDUCATION_TITLE}
            </Typography.Title>
            <Typography.Text className="home-muted">{EDUCATION_PERIOD}</Typography.Text>
            <Typography.Paragraph className="home-education__degree">
              {EDUCATION_DEGREE}
            </Typography.Paragraph>
            <Typography.Text className="home-muted">{EDUCATION_SCHOOL}</Typography.Text>
          </Card>

          <Card className="home-card">
            <Typography.Title level={5} className="home-card__title">
              {CONTACT_TITLE}
            </Typography.Title>
            <Typography.Paragraph className="home-contact__text">{CONTACT_EMAIL}</Typography.Paragraph>
            <Typography.Text className="home-muted">{CONTACT_LOCATION}</Typography.Text>
          </Card>
        </aside>

        <section className="home-main">
          <Card className="home-card home-hero">
            <div className="home-hero__top">
              <Typography.Title level={1} className="home-hero__title">
                {HERO_TITLE_PREFIX} <span className="home-hero__title--accent">{HERO_TITLE_EMPHASIS}</span>
              </Typography.Title>
              <Button type="primary" icon={<DownloadOutlined />} className="home-hero__button">
                Download PDF
              </Button>
            </div>
            <Typography.Paragraph className="home-hero__body">{HERO_BODY}</Typography.Paragraph>
            <Typography.Paragraph className="home-hero__body home-hero__body--secondary">
              {HERO_BODY_SECONDARY}
            </Typography.Paragraph>
          </Card>

          <Card className="home-card">
            <div className="home-section-head">
              <Typography.Title level={3} className="home-section-head__title">
                {EXPERIENCE_TITLE}
              </Typography.Title>
              <Typography.Text className="home-section-head__meta">{EXPERIENCE_SIDE_LABEL}</Typography.Text>
            </div>
            <Space direction="vertical" size={20} className="home-full-width">
              {EXPERIENCES.map((item) => (
                <div className="home-experience" key={item.role}>
                  <div className="home-experience__head">
                    <Typography.Title level={5} className="home-experience__role">
                      {item.role}
                    </Typography.Title>
                    <Typography.Text className="home-muted">{item.period}</Typography.Text>
                  </div>
                  <Typography.Text className="home-experience__company">{item.company}</Typography.Text>
                  <Typography.Paragraph className="home-experience__summary">
                    {item.summary}
                  </Typography.Paragraph>
                  <Typography.Text className="home-experience__tags">
                    {item.tags.join('  •  ')}
                  </Typography.Text>
                </div>
              ))}
            </Space>
          </Card>

          <Card className="home-card">
            <Typography.Title level={3} className="home-card__heading">
              {EXPERTISE_TITLE}
            </Typography.Title>
            <Typography.Paragraph className="home-card__subtitle">{EXPERTISE_SUBTITLE}</Typography.Paragraph>
            <Row gutter={[16, 16]}>
              {EXPERTISE_ITEMS.map((item) => (
                <Col xs={24} md={12} key={item.label}>
                  <Typography.Text className="home-progress__label">{item.label}</Typography.Text>
                  <Progress
                    percent={item.value}
                    showInfo={false}
                    className="home-progress"
                    strokeColor="#87f5d5"
                    trailColor="rgba(255,255,255,0.1)"
                  />
                  <Typography.Text className="home-progress__value">
                    {formatExpertisePercent(item.value)}
                  </Typography.Text>
                </Col>
              ))}
            </Row>
            <div className="home-quote">
              <Typography.Text className="home-quote__title">{QUOTE_TITLE}</Typography.Text>
              <Typography.Paragraph className="home-quote__text">{QUOTE_TEXT}</Typography.Paragraph>
            </div>
          </Card>

          <Card className="home-card">
            <Typography.Title level={3} className="home-card__heading">
              {PROJECTS_TITLE}
            </Typography.Title>
            <Row gutter={[16, 16]}>
              {PROJECTS.map((project) => (
                <Col xs={24} md={12} key={project.name}>
                  <div className="home-project">
                    <img src={project.imageUrl} alt={project.name} className="home-project__thumb" />
                    <Typography.Title level={5} className="home-project__name">
                      {project.name}
                    </Typography.Title>
                    <Typography.Text className="home-muted">{project.subtitle}</Typography.Text>
                    <Typography.Text className="home-project__cta">{project.cta}</Typography.Text>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </section>
      </div>
    </div>
  );
};
