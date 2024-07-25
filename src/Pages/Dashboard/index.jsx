import './index.scss';
import SkillsComponent from '../../components/SkillsComponent';
import DarkModeToggle from '../../commons/DarkModeToggle';
import AboutMeComponent from '../../components/AboutMeComponent';
import ProjectsComponent from '../../components/ProjectsComponent';
import WorkExperienceComponent from '../../components/WorkExperienceComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DarkModeToggle />
      <AboutMeComponent />
      <SkillsComponent />
      <WorkExperienceComponent />
      <ProjectsComponent />
    </div>
  );
};

export default Dashboard;
