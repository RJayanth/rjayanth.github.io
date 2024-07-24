import htmlIcon from '../../assets/images/htmlIcon.svg';
import htmlIconDark from '../../assets/images/htmlIconDark.svg';
import cssIcon from '../../assets/images/cssIcon.svg';
import cssIconDark from '../../assets/images/cssIconDark.svg';
import jsIcon from '../../assets/images/jsIcon.svg';
import reactIcon from '../../assets/images/reactIcon.svg';
import reduxIcon from '../../assets/images/reduxIcon.svg';
import debugIcon from '../../assets/images/debugIcon.svg';
import { useThemeContext } from '../../themes';

import './index.scss';

const SkillsComponent = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className="skills-container">
      <div className="skills-header"> KEY SKILLS </div>
      <div className="skills-icon-container">
        <div>
          <img
            src={isDarkTheme ? htmlIconDark : htmlIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
        </div>
        <div>
          <img
            src={isDarkTheme ? cssIconDark : cssIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
        </div>
        <div>
          <img
            src={isDarkTheme ? jsIcon : jsIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
        </div>
        <div>
          <img
            src={isDarkTheme ? reactIcon : reactIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
        </div>
        <div>
          <img
            src={isDarkTheme ? reduxIcon : reduxIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
        </div>
        <div title="Debugging">
          <img
            src={isDarkTheme ? debugIcon : debugIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
