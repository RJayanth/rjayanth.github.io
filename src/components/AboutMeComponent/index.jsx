import { ABOUT_ME } from "../../constants";

import './index.scss';

const AboutMeComponent = () => {
    return (
        <div className="about-me-container">
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