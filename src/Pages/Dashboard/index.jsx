import './index.scss';
import SkillsComponent from '../../components/SkillsComponent';
import DarkModeToggle from '../../commons/DarkModeToggle';
import AboutMeComponent from '../../components/AboutMeComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DarkModeToggle />
      <AboutMeComponent />
      <SkillsComponent />
    </div>
  );
};

export default Dashboard;
