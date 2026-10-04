import { useEffect } from 'react';
import { useThemeContext } from '../../themes';
import { elementOnScrollObserver } from '../../utils';
import SectionHeadingText from '../../commons/SectionHeadingText';
import { primarySkills, secondarySkills } from './skillIcons';

import './index.scss';

const SkillsComponent = () => {
  const { isDarkTheme } = useThemeContext();

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

      <div className="skills-cards">
        {renderSkillCard('Primary Stack', primarySkills)}
        {renderSkillCard('Secondary Stack', secondarySkills)}
      </div>
    </div>
  );
};

export default SkillsComponent;
