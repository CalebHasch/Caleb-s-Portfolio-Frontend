import about1 from "../assets/about-me(1).png";
import about2 from "../assets/about-me(2).png";
import about3 from "../assets/about-me(3).png";
import aroundTheUS1 from "../assets/Around-the-US(1).png";
import aroundTheUS2 from "../assets/Around-the-US(2).png";
import aroundTheUS3 from "../assets/Around-the-US(3).png";
import brickbreaker1 from "../assets/Brickbreaker(1).png";
import brickbreaker2 from "../assets/Brickbreaker(2).png";
import brickbreaker3 from "../assets/Brickbreaker(3).png";
import coffeeShop1 from "../assets/coffeeshop(1).png";
import coffeeShop2 from "../assets/coffeeshop(2).png";
import coffeeShop3 from "../assets/coffeeshop(3).png";
import coffeeShop4 from "../assets/coffeeshop(4).png";
import library1 from "../assets/library(1).png";
import library2 from "../assets/library(2).png";
import library3 from "../assets/library(3).png";
import library4 from "../assets/library(4).png";
import pong1 from "../assets/Pong(1).png";
import pong2 from "../assets/Pong(2).png";
import pong3 from "../assets/Pong(3).png";
import quotes1 from "../assets/project1(1).jpg";
import quotes2 from "../assets/project1(2).png";
import quotes3 from "../assets/project1(3).png";
import pagination1 from "../assets/project2(1).png";
import pagination2 from "../assets/project2(2).png";
import pagination3 from "../assets/project2(3).png";
import form1 from "../assets/project3(1).png";
import form2 from "../assets/project3(2).png";
import form3 from "../assets/project3(3).png";
import gameShow1 from "../assets/project4(1).png";
import gameShow2 from "../assets/project4(2).png";
import gameShow3 from "../assets/project4(3).png";
import publicAPI1 from "../assets/Public-api-requests(1).png";
import publicAPI2 from "../assets/Public-api-requests(2).png";
import publicAPI3 from "../assets/Public-api-requests(3).png";
import racing1 from "../assets/Racing(1).png";
import racing2 from "../assets/Racing(2).png";
import racing3 from "../assets/Racing(3).png";
import gallery1 from "../assets/React-Gallery(1).png";
import gallery2 from "../assets/React-Gallery(2).png";
import gallery3 from "../assets/React-Gallery(3).png";
import wtwr1 from "../assets/WTWR(1).png";
import wtwr2 from "../assets/WTWR(2).png";
import wtwr3 from "../assets/WTWR(3).png";
import wtwr4 from "../assets/WTWR(4).png";

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
      images: [wtwr1, wtwr2, wtwr3, wtwr4],
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
      images: [gallery1, gallery2, gallery3],
    },
    {
      id: 2,
      project_name: "Around The US",
      description: "App that displays locations traveled for a specific user.",
      technologies: ["JavaScript", "OOP", "HTML", "CSS"],
      tags: ["favorites", "database", "forms"],
      live_link: "https://calebhasch.github.io/se_project_aroundtheus/",
      github_link: "https://github.com/CalebHasch/se_project_aroundtheus",
      images: [aroundTheUS1, aroundTheUS2, aroundTheUS3],
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
      images: [gameShow1, gameShow2, gameShow3],
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
      images: [coffeeShop1, coffeeShop2, coffeeShop3, coffeeShop4],
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
      images: [pagination1, pagination2, pagination3],
    },
    {
      id: 6,
      project_name: "Racing",
      description: "A 2 player racing game.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/Racing/",
      github_link: "https://github.com/CalebHasch/Racing",
      images: [racing1, racing2, racing3],
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
      images: [publicAPI1, publicAPI2, publicAPI3],
    },

    {
      id: 8,
      project_name: "About Caleb",
      description: "A simple html page showing my likes and interests.",
      technologies: ["HTML", "CSS"],
      tags: ["vanilla"],
      live_link: "https://calebhasch.github.io/about-me/",
      github_link: "https://github.com/CalebHasch/about-me",
      images: [about1, about2, about3],
    },
    {
      id: 9,
      project_name: "Brickbreaker",
      description: "The classic brickbreaker game.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/brickbreaker/",
      github_link: "https://github.com/CalebHasch/brickbreaker",
      images: [brickbreaker1, brickbreaker2, brickbreaker3],
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
      images: [form1, form2, form3],
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
      images: [quotes1, quotes2, quotes3],
    },
    {
      id: 12,
      project_name: "Library",
      description: "A simple but visually appealing html page.",
      technologies: ["HTML", "CSS"],
      tags: ["vanilla"],
      live_link: "https://calebhasch.github.io/se-project-library/",
      github_link: "https://github.com/CalebHasch/se-project-library",
      images: [library1, library2, library3, library4],
    },
    {
      id: 13,
      project_name: "Pong",
      description: "The classic pong game with a twist.",
      technologies: ["JavaScript", "HTML", "CSS"],
      tags: ["games"],
      live_link: "https://calebhasch.github.io/Pong/",
      github_link: "https://github.com/CalebHasch/Pong",
      images: [pong1, pong2, pong3],
    },
  ],
};

const personalLinks = {
  link1: "https://github.com/calebhasch",
  link2: "https://www.linkedin.com/in/caleb-hasch-bb80151a8/",
  link1Text: "Github",
  link2Text: "LinkedIn",
};

export { projectList, skills, personalLinks };
