import logo from './logo.svg';
import LaunchingSoon from './components/LaunchingSoon/LaunchingSoon';
import './App.css';
import CreditsComponent from './components/CreditsComponent/CreditsComponent';
import ThankYouComponent from './components/ThankYouComponent/ThankYouComponent';
import { ContactMeComponent } from './components/ContactMeComponent/ContactMeComponent';
import SociaMedicaComponents from './components/SociaMedicaComponents/SociaMedicaComponents';
import Dashboard from './Pages/Dashboard';
import ThemeWrapper from './themes';
import Test from './test';
import Loader from './commons/Loader';

function App() {
  return (
    <div className="App">
      {/* <div className="flex-container1">
      <ThankYouComponent/>
      <hr></hr>
      </div> */}
      {/* <div className="flex-container2">
        <ThankYouComponent/>
        <CreditsComponent/>
      </div> */}
      {/* <div className="flex-container3">
        <ContactMeComponent />
      </div>
      <div className="flex-container4">
        <SociaMedicaComponents />
      </div> */}
      <ThemeWrapper>
        <Dashboard />
        {/* <Test /> */}
      </ThemeWrapper>
    </div>
  );
}

export default App;
