import htmlIcon from '../../assets/images/htmlIcon.svg';
import htmlIconDark from '../../assets/images/htmlIconDark.svg';
import cssIcon from '../../assets/images/cssIcon.svg';
import cssIconDark from '../../assets/images/cssIconDark.svg';
import jsIcon from '../../assets/images/jsIcon.svg';
import reactIcon from '../../assets/images/reactIcon.svg';
import reduxIcon from '../../assets/images/reduxIcon.svg';
import debugIcon from '../../assets/images/debugIcon.svg';
import skillsLogo from '../../assets/images/skillsLogo.png';
import git from '../../assets/images/git.svg';
import mui from '../../assets/images/mui.svg';
import es6 from '../../assets/images/es6.svg'
import scss from '../../assets/images/scss.svg'
import bitbucket from '../../assets/images/bitbucket.svg'
import webpack from '../../assets/images/webpack.svg'
import { useThemeContext } from '../../themes';

import './index.scss';
import { elementOnScrollObserver } from '../../utils';
import { useEffect } from 'react';
import SectionHeadingText from '../../commons/SectionHeadingText';

const SkillsComponent = () => {
  const { isDarkTheme } = useThemeContext();
  useEffect(() => {
    elementOnScrollObserver('.skills-icons-container', 'square-animation');
  }, [])

  return (
    <div className="skills-container">
      <SectionHeadingText title="KEY SKILLS" />
      <div className="skills-logo-container">
        <img className="skills-logo" src={skillsLogo} alt="Skills Logo" />
      </div>

      <div className="skills-icons-container">
        <div className="skill-icon-container">
          <img
            src={isDarkTheme ? htmlIconDark : htmlIcon}
            alt="logo"
            className={`skills-icon ${
              isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
            }`}
          />
          <div className="skill-desc">HTML</div>
        </div>
        <div className="skill-icon-container">
          <img
            src={isDarkTheme ? cssIconDark : cssIcon}
            alt="logo"
            className={`skills-icon ${
              isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
            }`}
          />
          <div className="skill-desc">CSS</div>
        </div>
        <div className="skill-icon-container">
          <img
            src={isDarkTheme ? jsIcon : jsIcon}
            alt="logo"
            className={`skills-icon ${
              isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
            }`}
          />
          <div className="skill-desc">Javascript</div>
        </div>
        <div className="skill-icon-container">
          <img
            src={isDarkTheme ? reactIcon : reactIcon}
            alt="logo"
            className={`skills-icon ${
              isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
            }`}
          />
          <div className="skill-desc">React</div>
        </div>
        <div className="skill-icon-container">
          <img
            src={isDarkTheme ? reduxIcon : reduxIcon}
            alt="logo"
            className={`skills-icon ${
              isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
            }`}
          />
          <div className="skill-desc">Redux</div>
        </div>
        <div title="Debugging" className="skill-icon-container">
          <img
            src={isDarkTheme ? debugIcon : debugIcon}
            alt="logo"
            className={`skills-icon ${
              isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
            }`}
          />
          <div className="skill-desc">Debugging</div>
        </div>
      </div>
      <div className="additional-tech-tools-container">
        <SectionHeadingText title="Additional Technologies & Tools" customClassName='additional-tech-tools-text'/>
        <div className="skills-icons-container tech-tools-container">
        <div className="skill-icon-container">
            <img
              src={es6}
              alt="Ecma Script"
              className={`skills-icon ${
                isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
              }`}
            />
            <div className="skill-desc">Ecma Script 6</div>
          </div>
          <div className="skill-icon-container">
            <img
              src={scss}
              alt="git"
              className={`skills-icon ${
                isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
              }`}
            />
            <div className="skill-desc">SCSS</div>
          </div>
          <div className="skill-icon-container">
            <img
              src={mui}
              alt="Material UI"
              className={`skills-icon ${
                isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
              }`}
            />
            <div className="skill-desc">Material UI</div>
          </div>
          <div className="skill-icon-container">
            <img
              src={git}
              alt="git"
              className={`skills-icon ${
                isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
              }`}
            />
            <div className="skill-desc">Git</div>
          </div>
          <div className="skill-icon-container">
            <img
              src={bitbucket}
              alt="Bitbucket"
              className={`skills-icon ${
                isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
              }`}
            />
            <div className="skill-desc">Bitbucket</div>
          </div>
          <div className="skill-icon-container">
            <img
              src={webpack}
              alt="Webpack"
              className={`skills-icon ${
                isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light'
              }`}
            />
            <div className="skill-desc">Webpack</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
