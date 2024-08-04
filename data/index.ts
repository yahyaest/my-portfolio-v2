export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    des: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    des: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    des: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    des: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    des: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    des: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "Trade App Simulator",
    des: `Developed with a microservices architecture using Docker, this application integrates several key services: 
    * Client Service: Built with Next.js to deliver a responsive and interactive front-end experience. 
    * Gateway: Implemented with NestJS, it handles routing and service orchestration across the application. 
    * Crypto and Wallet Services: Developed using NestJS to manage cryptocurrency transactions and wallet functionalities. 
    * Task Scheduler: Utilizes Django and Celery for background task management and scheduling.This includes periodic tasks for monitoring coin prices, sending alerts when specific price thresholds are reached, executing buy operations, and updating wallet history. 
    * Notification Service: Leveraging FastAPI and WebSocket technology, it provides real-time alerts and notifications for user transactions. 
    The application integrates PostgreSQL for data storage and Redis as a message broker. It simulates a trading platform where users can buy and sell cryptocurrencies, monitor their wallet balance, and receive transaction notifications. 
    The App features a comprehensive dashboard where users can view their gains and losses, analyze the best and worst transactions, monitor asset performance, and explore a detailed history chart of their trading activities.`,
    img: "/Trade_App_Simulator.png",
    link: "https://anime-app.yahyamachat.com/",
    iconLists: [
      "/docker.svg",
      "/Next.js.svg",
      "nestjs.svg",
      // "/ts.svg",
      "/django.png",
      "fastapi.svg",
      "postgresql-icon.svg",
    ],
  },
  {
    id: 1,
    title: "Next Anime App",
    des: "Build using NextJS and MongoDB plus React Context as state manger and sass as css precompiler. On top of that, the app contains user authentication using jwt tokens. As user you can create an account,check latest animes news, find anime/manga and add them to your favourite list. Every anime/manga info page contains a comment section to discuss and exchange opinions. The app offer a chat room section and anime bots section where you can chat with AI anime charters.",
    img: "/Next_Anime_App.png",
    tags: ["MongoDB", "NextJS", "Node"],
    link: "https://anime-app.yahyamachat.com/",
    iconLists: [
      "/docker.svg",
      "/Next.js.svg",
      "/ts.svg",
      "/mongodb.svg",
      "/sass.svg",
    ],
  },
  {
    id: 2,
    title: "Games API Finder",
    des: "Build using React as frontend and Firebase as database and igdb API for fetching video games data. As user you can login/register to the app, search for games and save your favourites video games.",
    img: "/Games_API_Finder.png",
    tags: ["React", "Firebase"],
    link: "https://yahyamachat.com/game-app/",
    iconLists: ["/re.svg", "/firebase-icon.svg", "/tail.svg"],
  },
  {
    id: 3,
    title: "COVID-19 Tracker",
    des: "First project using React and covid-19 api to fetch covid data. The App fetch covid-19 data for the chosen countries then visualize the result in Cards, Chart and Map.",
    img: "/COVID-19_Tracker.png",
    tags: ["React"],
    link: "https://yahyamachat.com/covid-19-app/",
    iconLists: ["/re.svg"],
  },
  {
    id: 4,
    title: "Bookstore App",
    des: "Build an application using the MERN stack (MongoDB, Express, React, and Node.js) with Redux as the state manager. The app features user authentication using JWT tokens. Users can create an account, search for, filter, and sort books. They can also add books to their favorites and cart lists. Each book's information page includes a comment section for users to discuss and exchange opinions.",
    img: "/Bookstore_App.png",
    tags: ["MongoDB", "React", "Node", "Redux"],
    link: "https://yahyamachat.com/book-store-app/",
    iconLists: [
      "/docker.svg",
      "/re.svg",
      "nodejs-icon.svg",
      // "/express.svg",
      "/mongodb.svg",
      "/redux-logo.svg",
    ],
  },
  {
    id: 5,
    title: "PC Builder App",
    des: "Build using Vanilla JavaScript as frontend , Flask as backend and and PostgreSQL as database. As user you can build your own PC station from differents Pc hardware components and make an order to buy.",
    img: "/PC_Builder_App.png",
    tags: ["JavaScript", "Flask", "PostgreSQL"],
    link: "https://yahyamachat.com/pc-builder-app/",
    iconLists: ["/flask.png", "/postgresql.svg", "/js.svg"],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "QA Test Engineer",
    company: "Focus Corporation",
    duration: "January 2019 - March 2020",
    desc: "Project: Open Vehicle Infotainment Platform - Continental Automotive & PSA",
    tasks: [
      "Reviews of speciﬁcations and customer requirements (DOORS)",
      "Design test cases that meet to customer requirements",
      "Run test cases, either manually or using test execution tools",
      "Follow the anomalies/Log traces",
    ],
    tools: ["DOORS", "DLT Viewer", "CANalyzer", "Putty", "Jira"],
  },
  {
    id: 2,
    title: "Automation Test Developer",
    company: "Focus Corporation",
    duration: "April 2020 - July 2022",
    desc: "Project: Open Vehicle Infotainment Platform - Continental Automotive & PSA",
    tasks: [
      "Design and develop automated test scripts for end to end testing",
      "Create and maintain test cases and test data for automation",
      "Analyze test results and provide detailed reports on test outcomes",
      "Write Python scripts to command phone using Android Debug Bridge (adb)",
      "Develop web app with react and flask to monitor automated test result",
    ],
    tools: [
      "Python",
      "Flask",
      "Javascript",
      "React",
      "MYSQL",
      "Confluence",
      "Jira",
    ],
  },
  {
    id: 3,
    title: "Software Development Engineer",
    company: "Digitalberry",
    duration: "August 2022 - Present",
    desc: "Project: BerryCert - Digital certificate lifecycle management software",
    tasks: [
      "Developing and implementing features for the digital certificate management software, utilizing microservice architecture",
      "Contributing to the design and architecture of the software to ensure that it is scalable and reliable.",
      "Write code for the backend and frontend of the software, ensuring that it meets quality and performance standards",
      "Debugging, troubleshooting and resolve any technical issues that may arise during the development process",
      "Working on end-to-end testing, using Selenium and the Behave framework in Python",
      "Maintain and update the software over time, fixing bugs, adding new features, and ensuring its security and reliability",
      "Work within the CI/CD process to ensure seamless and efficient software delivery",
      "Write user manuals, technical specifications, and developer guides to support the software",
      "Conduct code reviews and provide feedback to improve overall code quality",
      "Participate in sprint planning, daily stand-ups, and retrospectives",
    ],
    tools: [
      "Django",
      "Angular",
      "Postgres",
      "RabbitMQ",
      "Redis",
      "Linux",
      "Docker",
      "Git",
      "Nginx",
      "Selenium",
      "Jenkins",
      "Jira",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yahyaest",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/machat-yahya-0667b2149/",
  },
];

export const skills = [
  {
    id: 1,
    title: "Front-End",
    techList: ["React/Next.js", "Angular", "Tailwind CSS", "TypeScript"],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Back-End",
    techList: ["Django", "Node/Express", "Nest JS"],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Database",
    techList: ["PostgreSQL", "MongoDB", "MySQL"],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "DevOps",
    techList: ["Linux", "Docker", "Git", "Nginx"],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
