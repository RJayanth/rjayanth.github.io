import SectionHeadingText from "../../commons/SectionHeadingText";
import { ABOUT_ME } from "../../constants";
import { useThemeContext } from "../../themes";
import DisplayPicture from "../DisplayPicture";
import FileDownload from "../../commons/FileDownload";

import './index.scss';
import withViewMore from "../withViewMore";
import useMediaQuery from "../../hooks/useMediaQuery";

const AboutMeComponent = () => {
    const { isDarkTheme } = useThemeContext();
    const isMobileView = useMediaQuery('(max-width: 767px)');
    const AdditionalSection = () => {
        return (
            <>
                <p className="am-desc">{ABOUT_ME.EXPERIENCE}</p>
                <p className="am-desc">{ABOUT_ME.ROLE}</p>
            </>
        )
    }

    const AdditionalSectionMobileView= withViewMore(AdditionalSection);

    return (
        <div className={`about-me-container ${isDarkTheme ? 'am-dark' : 'am-light'}`}>
            <DisplayPicture />
            <div className="section-main-heading-text">Jayanth R</div>
            <div className="circle-shadow"></div>
            <SectionHeadingText title='about me' customClassName='about-me-heading' />
            <div className="am-description-container">
                <p className="am-desc">{ABOUT_ME.HEADING}</p>
                {isMobileView ? <AdditionalSectionMobileView /> : <AdditionalSection />}
            </div>
            <FileDownload title='Resume' fileName='Jayanth_R_Resume' path='Jayanth_R_Resume' />
        </div>
    )
}

export default AboutMeComponent;