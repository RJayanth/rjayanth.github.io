import { getYearsOfExperience } from './utils';

const yearsOfExperience = getYearsOfExperience(2016, 7);

export const ABOUT_ME = {
  HEADING: (
    <>
      Hey there! I'm a passionate Senior Front-End Developer with over{' '}
      <span className="stat-highlight">{yearsOfExperience} years</span> of
      experience turning complex challenges into seamless, high-performance web
      applications.
    </>
  ),
  EXPERIENCE:
    'Specializing in React, Angular, Microfrontends, and modern state architectures, I bridge the gap between complex design systems and high-efficiency browser execution. I have a proven track record of taking enterprise platforms from zero to production, implementing responsive web design across viewports, and building isolated multi-tab architectures.',
  ROLE: (
    <>
      My engineering philosophy centers on measurable impact: slashing load
      times by <span className="stat-highlight">50%</span> and boosting
      Lighthouse metrics from <span className="stat-highlight">30% to 75%</span>
      . Whether it's optimizing Core Web Vitals or integrating custom AI-driven
      code quality agents, I approach every project with creative
      problem-solving and technical rigor.
    </>
  ),
};

export const WORK_EXPERIENCE = {
  IBM: {
    OVERVIEW:
      'Responsible for developing UI components, with experience across multiple domains including supply chain, healthcare, and home services akin to UrbanClap. All projects I have worked on were developed from scratch.',
    RESPONSIBILITIES: [
      'Developing user interface components',
      'Mentoring junior engineers',
      'Participating in peer code reviews',
      'Code repository ownership',
      'Managing deployment activities',
      'Participating in cross-team communications',
      'Interacting with various stakeholders',
      'Breaking down user stories and contributing to roadmaps',
      'Actively participating in all Agile ceremonies',
    ],
  },
  CERNER: {
    OVERVIEW:
      'Responsible for developing user interface components, with experience in the healthcare domain.',
    RESPONSIBILITIES: [
      'Developing user interface components',
      'Fixing bugs',
      'Participating in peer code reviews',
      'Reviewing requirements and change requests',
      'Participating in Root Cause Analysis (RCA) meetings',
      'Participating in  cross-team communication',
      'Interacting with various stakeholders',
      'Breaking down user stories and contributing to roadmaps',
      'Actively participating in all Agile ceremonies',
    ],
  },
};

export const PROJECTS = {
  PEGIT:
    'ALCM is a startup located in South Africa that mainly focuses on home improvement systems. This product is similar to UrbanClap. We connect homeowners with service providers such as electricians and plumbers, enabling them to fulfill their requirements. We developed this project from scratch, and it was an MVP.',
  ORDER_MANAGEMENT:
    'A comprehensive order management tool with options to Manage, Update, and view History for orders and upload necessary documents of the order. I faced a challenge in this project. Multiple instances of the tab were conflicting with data across tabs, leading to data mismatches. I resolved this by maintaining a separate data pattern inside Redux to avoid any conflicting data across tabs within the application.',
  CHATODPEDIA:
    'This project establishes real-time communication between users primarily using Socket.io. This project includes features such as allowing users to select their avatars during login, displaying a list of users post-login, filtering available users based on their preferences, and sending one-on-one private messages. Presently, this project is a work in progress. Additionally, it is a Progressive Web App (PWA), enabling users to install the app and access it without needing to visit the browser and enter the URL each time.',
  UNIT_TEST_GENERATOR:
    'This project focuses on generating unit test skeletons for JavaScript source files. It offers several features, allowing users to utilize both a Command Line Interface (CLI) and a Graphical User Interface (GUI) for generating test files. Using the CLI, users can generate tests for a single file, for all files, or for all files with the option to skip specific files by providing an additional skip property. The GUI provides functionality to generate test files for either a single file or all files.',
};
