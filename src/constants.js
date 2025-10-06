// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import vguLogo from './assets/education_logo/vgu_logo.png'

// Project Section Logo's
import HyperCar from './assets/work_logo/Hyper_Car.png'
import printer_service from './assets/work_logo/Printer_Service_Website.png'
import Snake_and_ladder from './assets/work_logo/Snake_and_Ladder_Game.png'
import full_stack_grocery from './assets/work_logo/full_stack_grocery_store.png'
import tailwind_portfolio_template from './assets/work_logo/tailwind_portfolio_template.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: vguLogo,
      school: "Vivekanand Global University, Jaipur",
      date: "August 2023 - July 2026",
      grade: "7.81 CGPA",
      desc: "I am persuing my Bechlor Degree (BCA) in Computer Applications from Vivekanand Global University, Jaipur. During my time at VGU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at VGU University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications - BCA",
    }
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Frontend Based Car App",
      description:"Frontend I developed a modern and responsive frontend-based car app using React and Tailwind CSS. The app showcases various car models with their details, focusing on smooth UI interactions, clean design, and mobile responsiveness to enhance the overall user experience.Car App",
      image: HyperCar,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Anand930/FrontendBasedCarSite",
      webapp: "https://simplecar.netlify.app/",
    },
    {
      id: 1,
      title: "Snake and Ladder Game",
      description:
        "I created an interactive Snake and Ladder game using React, featuring a 100-cell grid with smooth player movement based on snakes’ and ladders’ positions. The game offers an engaging design and responsive interface, ensuring a fun and dynamic user experience.",
      image: Snake_and_ladder,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anand930/snakeandladder",
      webapp: "https://thesnakeandladder.netlify.app/",
    },
    {
      id: 2,
      title: "Printer Service WebApp",
      description:
        "I developed a responsive printer service website that provides complete printer and computer repair solutions. The site features a clean design, easy navigation, and clear service details, ensuring users can quickly find and request the support they need.",
      image: printer_service,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anand930/printers-site",
      webapp: "https://jaymahadevprinterservices.netlify.app",
    },
    {
      id: 3,
      title: "Full Stack Grocery Store App",
      description:
        "I built a full-stack grocery store application using the MERN stack, featuring user authentication, product management, and a smooth shopping experience. The app offers a clean interface and seamless functionality, allowing users to browse, add, and purchase groceries efficiently.",
      image: full_stack_grocery,
      tags: ["React JS", "Node.js", "NPM", "Validation","JWT","Mongodb","ExpressJs"],
      github: "https://github.com/Anand930/meridukan",
      webapp: "https://meri-dukan2.netlify.app/",
    },
    {
      id: 4,
      title: "Tailwind Portfolio Template",
      description:
        "I created a clone of a Tailwind CSS portfolio template using React and Tailwind CSS to enhance my frontend development skills. The project focuses on replicating the original design with precision, featuring a fully responsive layout and smooth UI animations for an appealing user experience.",
      image: tailwind_portfolio_template,
      tags: ["JavaScript", "react", "HTML", "CSS"],
      github: "https://github.com/Anand930/template1",
      webapp: "https://tailwindportfoliotemplate.netlify.app/",
    },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    
  ];  