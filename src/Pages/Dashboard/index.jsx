import './index.scss';
import SkillsComponent from '../../components/SkillsComponent';
import DarkModeToggle from '../../commons/DarkModeToggle';
import AboutMeComponent from '../../components/AboutMeComponent';
import KeyImpactAchievements from '../../components/KeyImpactAchievements';
import ProjectsComponent from '../../components/ProjectsComponent';
import WorkExperienceComponent from '../../components/WorkExperienceComponent';
import FooterComponent from '../../components/FooterComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DarkModeToggle />
      <AboutMeComponent />
      <KeyImpactAchievements />
      <SkillsComponent />
      <WorkExperienceComponent />
      <ProjectsComponent />
      <FooterComponent />
    </div>
  );
};

export default Dashboard;
