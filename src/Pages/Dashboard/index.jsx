import './index.scss';
import DisplayPicture from '../../components/DisplayPicture';
import SkillsComponent from '../../components/SkillsComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DisplayPicture />
      <SkillsComponent />
    </div>
  );
};

export default Dashboard;
