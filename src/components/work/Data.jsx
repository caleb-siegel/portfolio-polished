import Work1 from "../../assets/sous-chef.png";
import Work2 from "../../assets/python-roulette.png";
import Work3 from "../../assets/broadwaycommunity.png";
import Work4 from "../../assets/mojito-walkthrough.png";

export const projectsData = [
  {
    id: 3,
    image: Work3,
    title: "Broadway Community",
    category: "deployed",
    link: "https://broadwaycommunity.vercel.app/",
    modal_description: "Price alert app utilizing Stubhub’s API to display the cheapest ticket to each Broadway show",
    modal_info: [
      "Utilized Postman to test StubHub API endpoints and generated bearer tokens with API keys for secure data access",
      "Retrieved and organized ticket data from StubHub API in the backend to enable streamlined frontend communication",
      "Developed ticket price sliders with Swiper.js, ensuring smooth transitions and touch-friendly navigation",
      "Integrated affiliate links into ticket pages for revenue generation through the Partnerize platform"
    ],
    modal_technologies: [
      {"id": 1, "name": "Javascript", "class": "bx bxl-javascript work__modal-tech-icon"},
      {"id": 2, "name": "Python", "class": "bx bxl-python work__modal-tech-icon"},
      {"id": 3, "name": "React", "class": "bx bxl-react work__modal-tech-icon"},
      {"id": 4, "name": "Flask", "class": "bx bxl-flask work__modal-tech-icon"},
      {"id": 5, "name": "Vite", "class": "bx bx-buildings work__modal-tech-icon"},
      {"id": 3, "name": "CSS", "class": "bx bxl-css3 work__modal-tech-icon"},
    ],
  },
  {
      id: 1,
      image: Work1,
      title: "Sous Chef",
      category: "fullstack",
      link: "https://vimeo.com/935867199?share=copy",
      modal_description: "Full-stack one-stop-shop for meal prep with directory of recipes, calendared meal planning and shopping list curation",
      modal_info: [
        "Mapped out ERD with whiteboard platform, Miro, for organized database structure",
        "Wrote backend with Flask and SQLAlchemy for simple communication between frontend and backend",
        "Initiated frontend with Vite for fast file creation, transitioning midway from Create-React-App, to solve proxy errors",
        "Utilized React and Material UI for efficient frontend development and styling",
      ],
      modal_technologies: [
        {"id": 6, "name": "Material UI", "class": "bx bxl-google work__modal-tech-icon"},
        {"id": 1, "name": "Javascript", "class": "bx bxl-javascript work__modal-tech-icon"},
        {"id": 2, "name": "Python", "class": "bx bxl-python work__modal-tech-icon"},
        {"id": 3, "name": "React", "class": "bx bxl-react work__modal-tech-icon"},
        {"id": 4, "name": "Flask", "class": "bx bxl-flask work__modal-tech-icon"},
        {"id": 5, "name": "Vite", "class": "bx bx-buildings work__modal-tech-icon"},
        
      ],
    },
    {
      id: 2,
      image: Work2,
      title: "Python Roulette",
      category: "python",
      link: "https://vimeo.com/940468558/b5f77adeda?share=copy",
      modal_description: "Command Line Interface (CLI) roulette casino game written in Python",
      modal_info: [
        "Mapped out user journey to ensure robust handling of edge cases as well as to include unique gameplay features",
        "Implemented inputs and exceptions for smooth and accurate user interaction",
      ],
      modal_technologies: [
        {"id": 1, "name": "Python", "class": "bx bxl-python work__modal-tech-icon"},
    ],
    },
    {
      id: 4,
      image: Work4,
      title: "Mojito Budgeting",
      category: "fullstack",
      link: "https://vimeo.com/1009850454/338de610f1?share=copy",
      modal_description: "Budgeting app alternative to recently discontinued Mint",
      modal_info: [
        "Construct database through Flask and SQLAlchemy",
        "Use bcrypt to encrypt passwords and enable secure login",
      ],
      modal_technologies: [
        {"id": 1, "name": "Javascript", "class": "bx bxl-javascript work__modal-tech-icon"},
        {"id": 2, "name": "Python", "class": "bx bxl-python work__modal-tech-icon"},
        {"id": 3, "name": "React", "class": "bx bxl-react work__modal-tech-icon"},
        {"id": 4, "name": "Flask", "class": "bx bxl-flask work__modal-tech-icon"},
      ],
    },
  ];

  export const projectsNav = [
    {
        name: "all",
    },
    {
        name: "deployed",
    },
    {
        name: "fullstack",
    },
    {
        name: "python",
    },
  ];