import useThemeChange from "../../hooks/useThemeChange";
import htmlIcon from '../../assets/images/htmlIcon.svg';
import cssIcon from '../../assets/images/cssIcon.svg';
import jsIcon from '../../assets/images/jsIcon.svg';
import reactIcon from '../../assets/images/reactIcon.svg';
import reduxIcon from '../../assets/images/reduxIcon.svg';
import debugIcon from '../../assets/images/debugIcon.svg';

const SkillsComponent = () => {
    const { isDarkTheme } = useThemeChange();
    return (
        <div className="skills-container">
        <div className="skills-header"> KEY SKILLS </div>
        <div class="skills-icon-container">
          <div>
            <img
              fetchPriority="high"
              src={isDarkTheme ? htmlIcon : htmlIcon}
              alt="logo"
              className="skills-icon"
            />
          </div>          <div>
            <img
              fetchPriority="high"
              src={isDarkTheme ? cssIcon : cssIcon}
              alt="logo"
              className="skills-icon"
            />
          </div>
          <div>
            <img
              fetchPriority="high"
              src={isDarkTheme ? jsIcon : jsIcon}
              alt="logo"
              className="skills-icon"
            />
          </div>
          <div>
            <img
              fetchPriority="high"
              src={isDarkTheme ? reactIcon : reactIcon}
              alt="logo"
              className="skills-icon"
            />
          </div>
          <div>
            <img
              fetchPriority="high"
              src={isDarkTheme ? reduxIcon : reduxIcon}
              alt="logo"
              className="skills-icon"
            />
          </div>
          <div title='Debugging'>
            <img
              fetchPriority="high"
              src={isDarkTheme ? debugIcon : debugIcon}
              alt="logo"
              className="skills-icon"
            />
          </div>
        </div>
      </div>
    )
}

export default SkillsComponent;