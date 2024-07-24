import './index.scss';
import SkillsComponent from '../../components/SkillsComponent';
import DarkModeToggle from '../../commons/DarkModeToggle';
import AboutMeComponent from '../../components/AboutMeComponent';
import DisplayPicture from '../../components/DisplayPicture';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DarkModeToggle />
      <DisplayPicture />
      <AboutMeComponent />
      <SkillsComponent />
    </div>
  );
};

export default Dashboard;
