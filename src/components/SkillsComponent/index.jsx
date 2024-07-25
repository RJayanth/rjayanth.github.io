import htmlIcon from '../../assets/images/htmlIcon.svg';
import htmlIconDark from '../../assets/images/htmlIconDark.svg';
import cssIcon from '../../assets/images/cssIcon.svg';
import cssIconDark from '../../assets/images/cssIconDark.svg';
import jsIcon from '../../assets/images/jsIcon.svg';
import reactIcon from '../../assets/images/reactIcon.svg';
import reduxIcon from '../../assets/images/reduxIcon.svg';
import debugIcon from '../../assets/images/debugIcon.svg';
import skillsLogo from '../../assets/images/skillsLogo.png';
import { useThemeContext } from '../../themes';

import './index.scss';

const SkillsComponent = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className="skills-container">
      <div className="skills-header"> KEY SKILLS </div>
      <div>
        <img className='skills-logo' src={skillsLogo} alt='Skills Logo' />
      </div>
      
      <div className="skills-icons-container">
        <div className='skill-icon-container'>
          <img
            src={isDarkTheme ? htmlIconDark : htmlIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
          <div className='skill-desc'>HTML</div>
        </div>
        <div className='skill-icon-container'>
          <img
            src={isDarkTheme ? cssIconDark : cssIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
          <div className='skill-desc'>CSS</div>
        </div>
        <div className='skill-icon-container'>
          <img
            src={isDarkTheme ? jsIcon : jsIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
          <div className='skill-desc'>Javascript</div>
        </div>
        <div className='skill-icon-container'>
          <img
            src={isDarkTheme ? reactIcon : reactIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
          <div className='skill-desc'>React</div>
        </div>
        <div className='skill-icon-container'>
          <img
            src={isDarkTheme ? reduxIcon : reduxIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
          <div className='skill-desc'>Redux</div>
        </div>
        <div title="Debugging" className='skill-icon-container'>
          <img
            src={isDarkTheme ? debugIcon : debugIcon}
            alt="logo"
            className={`skills-icon ${isDarkTheme ? 'skills-icon-dark' : 'skills-icon-light' }`}
          />
          <div className='skill-desc'>Debugging</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
