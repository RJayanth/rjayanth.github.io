import { ABOUT_ME } from "../../constants";
import { useThemeContext } from "../../themes";
import DisplayPicture from "../DisplayPicture";

import './index.scss';

const AboutMeComponent = () => {
    const { isDarkTheme } = useThemeContext();
    return (
        <div className={`about-me-container ${isDarkTheme ? 'am-dark' : 'am-light'}`}>
            <DisplayPicture />
            <div className="am-heading">About me</div>
            <div className="am-description-container">
                <p className="am-desc">{ABOUT_ME.HEADING}</p>
                <p className="am-desc">{ABOUT_ME.EXPERIENCE}</p>
                <p className="am-desc">{ABOUT_ME.ROLE}</p>
            </div>
        </div>
    )
}

export default AboutMeComponent;