import { useEffect } from 'react';
import { useThemeContext } from '../../themes';
import { elementOnScrollObserver } from '../../utils';
import SectionHeadingText from '../../commons/SectionHeadingText';
import { primarySkills, secondarySkills } from './skillIcons';
import skillsLogo from '../../assets/images/skillsLogo.png';

import './index.scss';

const SkillsComponent = () => {
  const { isDarkTheme } = useThemeContext();
  const foundationalTools = ['HTML', 'CSS', 'SCSS', 'Git', 'Bitbucket', 'Webpack', 'Material UI'];

  useEffect(() => {
    elementOnScrollObserver('.skill-tile', 'square-animation');
  }, []);

  const cardClassName = isDarkTheme ? 'skill-card skill-card-dark' : 'skill-card skill-card-light';

  const renderSkillCard = (title, skills) => (
    <div className={cardClassName} key={title}>
      <div className="skill-card__header">{title}</div>
      <div className="skill-card__grid">
        {skills.map(({ name, Icon }) => (
          <div className="skill-tile" key={name}>
            <div className="skill-tile__icon">
              <Icon />
            </div>
            <div className="skill-tile__label">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills-container">
      <SectionHeadingText title="KEY SKILLS" />

      <div className="skills-logo-container">
        <img className="skills-logo" src={skillsLogo} alt="Skills illustration" />
      </div>

      <div className="skills-cards">
        {renderSkillCard('Primary Stack', primarySkills)}
        {renderSkillCard('Secondary Stack', secondarySkills)}
      </div>

      <div className="skills-foundation">
        <div className="skills-foundation__header">Frontend foundations &amp; tooling</div>
        <div className="skills-foundation__row">
          {foundationalTools.map((tool) => (
            <span className="skills-foundation__pill" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
