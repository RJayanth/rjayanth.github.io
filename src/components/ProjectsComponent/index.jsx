import SectionHeadingText from "../../commons/SectionHeadingText"
import HomeServices from "../../assets/images/HomeServices.png";
import SupplyChainOrderManagement from '../../assets/images/SupplyChainOrderManagement.png';
import ChatoPedia from '../../assets/images/ChatoPedia.png';
import UnitTestGenerator from '../../assets/images/UnitTestGenerator.png';

import './index.scss';
import { PROJECTS } from "../../constants";
import { useThemeContext } from "../../themes";

const ProjectsComponent = () => {

    const { isDarkTheme } = useThemeContext();
    const ProjectCard = ({title, img, details, projectLink}) => {
        return (
          <div className="project-card-container">
            <div className="project-title">{title}</div>
            <img src={img} alt={title} className="project-img" />
            <div className="project-details">{details}</div>
            {projectLink && (
              <div className="project-link">
                A demonstration video can be seen here
                <a href={projectLink} className="project-link-icon">                  
                  <i className="fa fa-youtube fa-2x"></i>
                </a>
              </div>
            )}
          </div>
        );
    };
    return (
        <div className={`projects-container ${isDarkTheme ? 'pcc-dark' : 'pcc-light'}`}>
            <SectionHeadingText title="Projects" />
            <div className="projects-cards-container">
            <ProjectCard title="PEGIT" img={HomeServices} details={PROJECTS.PEGIT}/>
            <ProjectCard title="Order Management" img={SupplyChainOrderManagement} details={PROJECTS.ORDER_MANAGEMENT}/>
            <ProjectCard title="ChatoPedia" img={ChatoPedia} details={PROJECTS.CHATODPEDIA}/>
            <ProjectCard title="Unit Test Skeleton Generator" img={UnitTestGenerator} details={PROJECTS.UNIT_TEST_GENERATOR} projectLink='https://youtu.be/9PsxCK1IbLg?si=tstIAQz_Q-_llIj7' />
            </div>
        </div>
    )
}

export default ProjectsComponent;