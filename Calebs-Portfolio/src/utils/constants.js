const baseUrl = "http://127.0.0.1:3000/src/assets/";

const skills = [
  "JavaScript",
  "SQL",
  "MongoDB",
  "React",
  "Node.js",
  "Express",
  "Pug",
  "API Handling",
  "jQuery",
  "CSS",
  "HTML",
  "AJAX",
  "Terminal Navigation",
  "Online Communication (slack, discord, zoom, etc.)",
];

const projectList = {
  projects: [
    {
      id: 0,
      project_name: "WTWR",
      description:
        "An app that recommends clothing based off current weather in my hometown provided by a third party api. Users can register, add their own items, and like others.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "API",
        "Express",
        "Node.js",
        "MongoDB",
        "Virtual Terminal",
        "Google Cloud",
        "HTTPS",
      ],
      tags: ["favorites", "database", "forms"],
      live_link: "https://calebhaschwtwr.crabdance.com/",
      github_link: "https://github.com/CalebHasch/se_project_react",
      image_urls: [
        `${baseUrl}WTWR(2).png`,
        `${baseUrl}WTWR(3).png`,
        `${baseUrl}WTWR(4).png`,
        `${baseUrl}WTWR(1).png`,
      ],
    },
    {
      id: 1,
      project_name: "React Gallery",
      description:
        "A search engine that finds images related to a typed or predetermined prompt.",
      technologies: ["React", "CSS", "Third-Party API"],
      tags: ["favorites", "search"],
      live_link: "https://calebhasch.github.io/React-Gallery/",
      github_link: "https://github.com/calebhasch/React-Gallery",
      image_urls: [
        `${baseUrl}React-gallery(1).png`,
        `${baseUrl}React-gallery(2).png`,
        `${baseUrl}React-gallery(3).png`,
      ],
    },
    {
      id: 2,
      project_name: "Around The US",
      description: "App that displays locations traveled for a specific user.",
      technologies: ["JavaScript", "OOP", "HTML", "CSS"],
      tags: ["favorites", "database", "forms"],
      live_link: "https://calebhasch.github.io/se_project_aroundtheus/",
      github_link: "https://github.com/CalebHasch/se_project_aroundtheus",
      image_urls: [
        `${baseUrl}Around-the-US(1).png`,
        `${baseUrl}Around-the-US(2).png`,
        `${baseUrl}Around-the-US(3).png`,
      ],
    },
    {
      id: 3,
      project_name: "OOP Game Show App",
      description:
        "This is an app to play a hangman-esk type game. After you start the game you have five trys to guess the hidden word by using the online keyboard or your computer keyboard until you lose.",
      technologies: ["Object-Oriented JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/OOP-Game-Show-App/",
      github_link: "https://github.com/calebhasch/OOP-Game-Show-App",
      image_urls: [
        `${baseUrl}project4(1).png`,
        `${baseUrl}project4(2).png`,
        `${baseUrl}project4(3).png`,
      ],
    },
    {
      id: 4,
      project_name: "Coffee Shop",
      description:
        "An app that has a coffee shop feel to it, being visually appealing, and easy to navigate.",
      technologies: ["HTML", "CSS"],
      tags: ["vanilla"],
      live_link: "https://calebhasch.github.io/se_project_coffeeshop/",
      github_link: "https://github.com/calebhasch/Tech-degree-project-5",
      image_urls: [
        `${baseUrl}coffeeshop(1).png`,
        `${baseUrl}coffeeshop(2).png`,
        `${baseUrl}coffeeshop(3).png`,
        `${baseUrl}coffeeshop(4).png`,
      ],
    },
    {
      id: 5,
      project_name: "List Pagination and Filtering",
      description:
        "This app searches through any sized list of students. It searches as you type and splits up the results into more manageable tabs.",
      technologies: ["JavaScript", "HTML", "CSS", "DOM"],
      tags: ["favorites"],
      live_link: "https://calebhasch.github.io/list-and-pagination-filtering/",
      github_link:
        "https://github.com/calebhasch/list-and-pagination-filtering",
      image_urls: [
        `${baseUrl}project2(1).png`,
        `${baseUrl}project2(2).png`,
        `${baseUrl}project2(3).png`,
      ],
    },
    {
      id: 6,
      project_name: "Racing",
      description: "A 2 player racing game.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/Racing/",
      github_link: "https://github.com/CalebHasch/Racing",
      image_urls: [
        `${baseUrl}Racing(1).png`,
        `${baseUrl}Racing(2).png`,
        `${baseUrl}Racing(3).png`,
      ],
    },
    {
      id: 7,
      project_name: "Public API Requests",
      description:
        "An app that fetches employee data from a 3rd party API and then displays the data dynamically.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Third Party API",
        "Terminal",
        "HTTP",
        "AJAX",
      ],
      tags: [],
      live_link: "https://calebhasch.github.io/Public-API-Requests/",
      github_link: "https://github.com/calebhasch/Public-API-Requests",
      image_urls: [
        `${baseUrl}Public-api-requests(1).png`,
        `${baseUrl}Public-api-requests(2).png`,
        `${baseUrl}Public-api-requests(3).png`,
      ],
    },

    {
      id: 8,
      project_name: "About Caleb",
      description: "A simple html page showing my likes and interests.",
      technologies: ["HTML", "CSS"],
      tags: ["vanilla"],
      live_link: "https://calebhasch.github.io/about-me/",
      github_link: "https://github.com/CalebHasch/about-me",
      image_urls: [
        `${baseUrl}about-me(1).png`,
        `${baseUrl}about-me(2).png`,
        `${baseUrl}about-me(3).png`,
      ],
    },
    {
      id: 9,
      project_name: "Brickbreaker",
      description: "The classic brickbreaker game.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/brickbreaker/",
      github_link: "https://github.com/CalebHasch/brickbreaker",
      image_urls: [
        `${baseUrl}Brickbreaker(1).png`,
        `${baseUrl}Brickbreaker(2).png`,
        `${baseUrl}Brickbreaker(3).png`,
      ],
    },
    {
      id: 10,
      project_name: "Interactive Form",
      description: "An interactive form that uses jQuery and input validation.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "jQuery",
        "Regular Expressions",
      ],
      tags: ["forms"],
      live_link: "https://calebhasch.github.io/interactive-form/",
      github_link: "https://github.com/calebhasch/interactive-form",
      image_urls: [
        `${baseUrl}project3(1).png`,
        `${baseUrl}project3(2).png`,
        `${baseUrl}project3(3).png`,
      ],
    },
    {
      id: 11,
      project_name: "A Random Quote Generator",
      description:
        "This project produces a random qoute and puts it into the html. It also changes the page's background color. Its activated by a button and by a 20 second timer.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["vanilla"],
      live_link: "https://calebhasch.github.io/Random-quote-generator/",
      github_link: "https://github.com/calebhasch/Random-quote-generator",
      image_urls: [
        `${baseUrl}project1(1).jpg`,
        `${baseUrl}project1(2).png`,
        `${baseUrl}project1(3).png`,
      ],
    },
    {
      id: 12,
      project_name: "Library",
      description: "A simple but visually appealing html page.",
      technologies: ["HTML", "CSS"],
      tags: ["vanilla"],
      live_link: "https://calebhasch.github.io/se-project-library/",
      github_link: "https://github.com/CalebHasch/se-project-library",
      image_urls: [
        `${baseUrl}library(1).png`,
        `${baseUrl}library(2).png`,
        `${baseUrl}library(3).png`,
        `${baseUrl}library(4).png`,
      ],
    },
    {
      id: 13,
      project_name: "Pong",
      description: "The classic pong game with a twist.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/Pong/",
      github_link: "https://github.com/CalebHasch/Pong",
      image_urls: [
        `${baseUrl}Pong(1).png`,
        `${baseUrl}Pong(2).png`,
        `${baseUrl}Pong(3).png`,
      ],
    },
  ],
};

const personalLinks = {
  link1: "https://github.com/calebhasch",
  link2: "href=https://www.linkedin.com/in/caleb-hasch-bb80151a8/",
  link1Text: "Github",
  link2Text: "LinkedIn",
};

export { projectList, skills, personalLinks };
