import { Card, Col, Progress, Row, Typography } from 'antd';
import {
  EXPERIENCES,
  EXPERIENCE_SIDE_LABEL,
  EXPERIENCE_TITLE,
} from '../../components/ExperienceSection/consts';
import { ExperienceSection } from '../../components/ExperienceSection';
import {
  CONTACT_EMAIL_LABEL,
  CONTACT_EMAIL_VALUE,
  CONTACT_LOCATION_LABEL,
  CONTACT_LOCATION_VALUE,
  CONTACT_TITLE,
  EDUCATION_DEGREE,
  EDUCATION_PERIOD,
  EDUCATION_SCHOOL,
  EDUCATION_TITLE,
  EXPERTISE_ITEMS,
  EXPERTISE_SUBTITLE,
  EXPERTISE_TITLE,
  HERO_BODY_SECONDARY,
  HERO_BODY_TERTIARY,
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
import { getAboutMe } from './CVText/cvText';

export const HomePage = () => {
  const aboutMe = getAboutMe();
  console.log('aboutMe', aboutMe);
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

          <Card id="skills" className="home-card home-sidebar-section">
            <Typography.Title level={5} className="home-card__title">
              <span className="home-card__title-mark" aria-hidden="true" /> Skills
            </Typography.Title>
            <div className="home-skill-grid">
              {SKILLS.map((skill) => (
                <Typography.Text key={mapSkillToTagKey(skill)} className="home-skill-item">
                  {skill}
                </Typography.Text>
              ))}
            </div>
          </Card>

          <Card id="education" className="home-card home-sidebar-section">
            <Typography.Title level={5} className="home-card__title">
              <span className="home-card__title-mark" aria-hidden="true" /> {EDUCATION_TITLE}
            </Typography.Title>
            <Typography.Text className="home-sidebar-meta home-sidebar-accent">{EDUCATION_PERIOD}</Typography.Text>
            <Typography.Paragraph className="home-sidebar-main">
              {EDUCATION_DEGREE}
            </Typography.Paragraph>
            <Typography.Text className="home-sidebar-school">{EDUCATION_SCHOOL}</Typography.Text>
          </Card>

          <Card id="contact" className="home-card home-sidebar-section">
            <Typography.Title level={5} className="home-card__title">
              <span className="home-card__title-mark" aria-hidden="true" /> {CONTACT_TITLE}
            </Typography.Title>
            <div className="home-contact-row">
              <Typography.Text className="home-contact-label">{CONTACT_EMAIL_LABEL}</Typography.Text>
              <Typography.Text className="home-contact-value">{CONTACT_EMAIL_VALUE}</Typography.Text>
            </div>
            <div className="home-contact-row">
              <Typography.Text className="home-contact-label">{CONTACT_LOCATION_LABEL}</Typography.Text>
              <Typography.Text className="home-contact-value">{CONTACT_LOCATION_VALUE}</Typography.Text>
            </div>
          </Card>
        </aside>

        <section className="home-main">
          <Card className="home-card home-hero">
            <div className="home-hero__top">
              <Typography.Title level={1} className="home-hero__title">
                {HERO_TITLE_PREFIX} <span className="home-hero__title--accent">{HERO_TITLE_EMPHASIS}</span>
              </Typography.Title>
            </div>
            {!aboutMe ? <>
              <Typography.Paragraph className="home-hero__body">{aboutMe}</Typography.Paragraph>
              <Typography.Paragraph className="home-hero__body home-hero__body--secondary">
                {HERO_BODY_SECONDARY}
              </Typography.Paragraph>
              <Typography.Paragraph className="home-hero__body home-hero__body--secondary">
                {HERO_BODY_TERTIARY}
              </Typography.Paragraph>
            </> : <>
              <Typography.Paragraph className="home-hero__body home-hero__body--secondary">
                {aboutMe}
              </Typography.Paragraph>
            </>   
            }
          </Card>

          <ExperienceSection
            cardId="experience"
            title={EXPERIENCE_TITLE}
            sideLabel={EXPERIENCE_SIDE_LABEL}
            items={EXPERIENCES}
          />

          <Card id="expertise" className="home-card home-card--expertise">
            <Typography.Title level={3} className="home-card__heading">
              {EXPERTISE_TITLE}
            </Typography.Title>
            <Typography.Paragraph className="home-card__subtitle">{EXPERTISE_SUBTITLE}</Typography.Paragraph>
            <Row gutter={[16, 16]}>
              {EXPERTISE_ITEMS.map((item) => (
                <Col xs={24} md={12} key={item.label}>
                  <div className="home-progress__head">
                    <Typography.Text className="home-progress__label">{item.label}</Typography.Text>
                    <Typography.Text className="home-progress__value">
                      {formatExpertisePercent(item.value)}
                    </Typography.Text>
                  </div>
                  <Progress
                    percent={item.value}
                    showInfo={false}
                    className="home-progress"
                    strokeColor="var(--active-color)"
                    trailColor="rgba(155, 170, 214, 0.18)"
                  />
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
