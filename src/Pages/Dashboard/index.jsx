import './index.scss';
import DisplayPicture from '../../components/DisplayPicture';
import SkillsComponent from '../../components/SkillsComponent';
import DarkModeToggle from '../../commons/DarkModeToggle';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DarkModeToggle />
      <DisplayPicture />
      <SkillsComponent />
    </div>
  );
};

export default Dashboard;
