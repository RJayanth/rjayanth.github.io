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
      times by 50% and boosting Lighthouse metrics from{' '}
      <span className="stat-highlight">30% to 75%</span>. Whether it's
      optimizing Core Web Vitals or integrating custom AI-driven code quality
      agents, I approach every project with creative problem-solving and
      technical rigor.
    </>
  ),
};

export const WORK_EXPERIENCE = {
  IBM: {
    OVERVIEW:
      'Senior Front-End Developer with experience delivering enterprise portal solutions and scalable UI systems across healthcare and supply chain domains. Worked across new product builds from the ground up and modernization efforts, translating business requirements into production-ready, high-impact web experiences.',
    RESPONSIBILITIES: [
      'Led front-end architecture and development for enterprise portal solutions in healthcare and supply chain domains',
      'Improved application performance and Lighthouse scores through targeted optimization of bundle size, rendering patterns, and front-end architecture',
      'Delivered new product builds from the ground up while also supporting modernization efforts',
      'Converted Figma designs and product requirements into modular, reusable interfaces',
      'Built browser-like multi-tab workspaces with isolated state patterns to prevent data collisions',
      'Mentored junior engineers and contributed to Agile delivery, code quality, and team collaboration',
      'Partnered with stakeholders and cross-functional teams to shape requirements and delivery priorities',
      'Participated in peer reviews, technical discussions, and Agile ceremonies',
    ],
  },
  CERNER: {
    OVERVIEW:
      'Front-End Developer with experience building healthcare-focused user interfaces and enterprise web applications. Contributed to responsive UI development, requirement analysis, and defect resolution in a collaborative Agile environment.',
    RESPONSIBILITIES: [
      'Developed and maintained healthcare web application interfaces and reusable UI components',
      'Reviewed requirements and change requests to translate business needs into user-facing solutions',
      'Resolved defects and participated in root cause analysis discussions',
      'Collaborated with cross-functional teams to align feature delivery with stakeholder needs',
      'Participated in peer reviews, technical discussions, and Agile ceremonies',
      'Supported requirement breakdown and contributed to roadmap planning activities',
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
