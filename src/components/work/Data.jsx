import Work1 from "../../assets/sous-chef.png";
import Work2 from "../../assets/python-roulette.png";
import Work3 from "../../assets/bcom.png";
import Work4 from "../../assets/mojito-walkthrough.png";

export const projectsData = [
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
        "Utilized React for efficient frontend development and Material UI for simple frontend design",
      ],
      modal_technologies: [
        {"id": 6, "name": "Material-UI", "class": "bx bxl-google work__modal-tech-icon"},
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
      id: 3,
      image: Work3,
      title: "Broadway Community",
      category: "javascript",
      link: "https://vimeo.com/939689118?share=copy",
      modal_description: "Vanilla Javascript price notifications app for Broadway shows at consumers’ desired prices",
      modal_info: [
        "Built introductory project for foundational understanding of the basics of HTML, CSS and Javascript",
        "Implemented eventhandler functions to enable a simple user experience and dynamic user interaction",
      ],
      modal_technologies: [
        {"id": 1, "name": "Javascript", "class": "bx bxl-javascript work__modal-tech-icon"},
        {"id": 2, "name": "HTML", "class": "bx bxl-html5 work__modal-tech-icon"},
        {"id": 3, "name": "CSS", "class": "bx bxl-css3 work__modal-tech-icon"},
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
        name: "fullstack",
    },
    {
        name: "javascript",
    },
    {
        name: "python",
    },
  ];