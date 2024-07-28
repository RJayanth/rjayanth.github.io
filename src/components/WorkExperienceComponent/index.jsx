import SectionHeadingText from '../../commons/SectionHeadingText';
import IBM from '../../assets/images/IBM.png';
import OracleCerner from '../../assets/images/OracleCerner.jpg';
import { WORK_EXPERIENCE } from '../../constants';

import './index.scss';
import { useThemeContext } from '../../themes';
import { useEffect } from 'react';
import { elementOnScrollObserver } from '../../utils';

const WorkExperienceComponent = () => {
  const { isDarkTheme } = useThemeContext();
  useEffect(() => {
    elementOnScrollObserver('.ec-ibm', ['animated', 'rollIn']);
    elementOnScrollObserver('.ec-cerner', ['animated', 'slideInUp']);
  }, []);
  const ExperienceCard = ({
    companyName,
    companyLogo,
    employmentPeriod,
    overview,
    keyResponsibilities,
    customClassName=''
  }) => {
    return (
      <div className={`experience-card ${customClassName}`}>
        <div className="ec-header">
          <img src={companyLogo} alt={companyName} className="ec-header-icon" />
          <h3>{employmentPeriod}</h3>
        </div>
        <div className="ec-body">
          <span className="ec-body-heading">Overview: </span>
          <p className='overview-text'>{overview}</p>
          <span className="ec-body-heading">Key Responsibilities: </span>
          <ul>
            {keyResponsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="ec-footer"></div>
      </div>
    );
  };
  return (
    <div className={`experience-container ${isDarkTheme ? 'ec-container-dark' : 'ec-container-light'}`}>
      <SectionHeadingText title="Work Experience" />
      <div className="experience-cards-container">
        <ExperienceCard
          companyName="IBM"
          companyLogo={IBM}
          employmentPeriod="May 2022 - Present"
          overview={WORK_EXPERIENCE.IBM.OVERVIEW}
          keyResponsibilities={WORK_EXPERIENCE.IBM.RESPONSIBILITIES}
          customClassName='ec-ibm'
        />
        <ExperienceCard
          companyName="Oracle Cerner"
          companyLogo={OracleCerner}
          employmentPeriod="Jul 2016 - April 2022"
          overview={WORK_EXPERIENCE.CERNER.OVERVIEW}
          keyResponsibilities={WORK_EXPERIENCE.CERNER.RESPONSIBILITIES}
          customClassName='ec-cerner'
        />
      </div>
    </div>
  );
};

export default WorkExperienceComponent;
