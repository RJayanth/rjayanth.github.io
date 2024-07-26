import SectionHeadingText from "../../commons/SectionHeadingText";
import { ABOUT_ME } from "../../constants";
import { useThemeContext } from "../../themes";
import DisplayPicture from "../DisplayPicture";
import FileDownload from "../../commons/FileDownload";

import './index.scss';

const AboutMeComponent = () => {
    const { isDarkTheme } = useThemeContext();
    return (
        <div className={`about-me-container ${isDarkTheme ? 'am-dark' : 'am-light'}`}>
            <DisplayPicture />
            <div className="section-main-heading-text">Jayanth R</div>
            <div className="circle-shadow"></div>
            <SectionHeadingText title='about me' customClassName='about-me-heading' />
            <div className="am-description-container">
                <p className="am-desc">{ABOUT_ME.HEADING}</p>
                <p className="am-desc">{ABOUT_ME.EXPERIENCE}</p>
                <p className="am-desc">{ABOUT_ME.ROLE}</p>
            </div>
            <FileDownload />
        </div>
    )
}

export default AboutMeComponent;