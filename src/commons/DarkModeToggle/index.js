import modeToggleLight from '../../assets/images/modeToggleLight.svg';
import modeToggleDark from '../../assets/images/modeToggleDark.svg';
import { useThemeContext } from '../../themes';

import './index.css';
import ModeToggle from '../ModeToggle';

const DarkModeToggle = () => {

  const { toggleTheme, isDarkTheme } = useThemeContext();
  return (
    <div className="mode-toggle-container" onClick={toggleTheme}>
      {/* <img
        src={isDarkTheme ? modeToggleDark : modeToggleLight}
        alt="Turn on / off Dark mode"
        className="mode-toggle-icon"
      /> */}
      <ModeToggle />
    </div>
  );
};

export default DarkModeToggle;
