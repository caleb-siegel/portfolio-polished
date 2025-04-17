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
    modal_description: "Live-event price tracker with email alerts",
    modal_info: [
      "Built full-stack site integrating StubHub, Ticketmaster, and TodayTix APIs to surface best ticket prices for Broadway shows and other events, with embedded affiliate links for seamless purchasing and revenue tracking",
      "Generated 200+ orders and $10k+ in ticket sales through discovery of 90+% discounts including Wicked for $1, Hamilton for $10, Book of Mormon for $11, Aladdin for $15, and many others",
      "Developed modular Python code to manipulate and filter event data by price, date, category/event, venue and region",
      "Implemented CRON jobs via GitHub Actions, reducing load times by 90% by serving cached PostgreSQL data instead of real-time API calls",
      "Added email alert system allowing users to receive customized price notifications through email provider, SendGrid",
      "Designed user-driven features including event submission, relative value indicators, fee-adjustments and sorting",
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
      category: "deployed",
      link: "https://souschef2.vercel.app/recipes",
      modal_description: "Full-stack digital cookbook and meal prep planner featuring ~800 curated recipes",
      modal_info: [
        "Built Google-authenticated platform enabling users to save recipes, tag favorites, log cooking history, and create weekly meal plans",
        "Engineered automated shopping list generator with real-time checkbox functionality for streamlined grocery runs",
        "Designed dynamic recipe pages with interactive ingredients and step-by-step instructions for an intuitive cooking experience",
        "Developed robust multi-dimensional filtering system (by source, ingredients, tags, dietary preferences, and more) to enhance recipe discovery",
        "Optimized API data structure and load handling, cutting load times by over 90%",
        "Applied agile methodologies via Monday.com to manage sprints and accelerate development lifecycle",
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