const projectList = {
  projects: [
    {
      id: 1,
      project_name: "A Random Quote Generator",
      description:
        "This project produces a random qoute and puts it into the html. It also changes the page's background color. Its activated by a button and by a 20 second timer.",
      technologies: ["JavaScript", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/Random-quote-generator/",
      github_link: "https://github.com/calebhasch/Random-quote-generator",
      image_urls: [
        "/static/images/project1(1).jpg",
        "/static/images/project1(2).png",
        "/static/images/project1(3).png",
      ],
    },
    {
      id: 2,
      project_name: "List Pagination and Filtering",
      description:
        "This is a list pagination and filtering app. I am attempting for exeeds expectations grade and have added the search bar with a button and keyup event listener.",
      technologies: ["JavaScript", "HTML", "CSS", "DOM"],
      live_link: "https://calebhasch.github.io/list-and-pagination-filtering/",
      github_link:
        "https://github.com/calebhasch/list-and-pagination-filtering",
      image_urls: [
        "/static/images/project2(1).png",
        "/static/images/project2(2).png",
        "/static/images/project2(3).png",
      ],
    },
    {
      id: 3,
      project_name: "Interactive Form",
      description: "An interactive form that uses jQuery and input validation.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "jQuery",
        "Regular Expressions",
      ],
      live_link: "https://calebhasch.github.io/interactive-form/",
      github_link: "https://github.com/calebhasch/interactive-form",
      image_urls: [
        "/static/images/project3(1).png",
        "/static/images/project3(2).png",
        "/static/images/project3(3).png",
      ],
    },
    {
      id: 4,
      project_name: "OOP Game Show App",
      description:
        "This is an app to play a hangman-esk type game. After you start the game you have five trys to guess the hidden word by using the online keyboard or your computer keyboard until you lose.",
      technologies: ["Object-Oriented JavaScript", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/OOP-Game-Show-App/",
      github_link: "https://github.com/calebhasch/OOP-Game-Show-App",
      image_urls: [
        "/static/images/project4(1).png",
        "/static/images/project4(2).png",
        "/static/images/project4(3).png",
      ],
    },
    {
      id: 5,
      project_name: "Public API Requests",
      description:
        "An app that gets employye data by API fetching then displays the data on the page.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "API",
        "Terminal",
        "HTTP",
        "AJAX",
      ],
      live_link: "https://calebhasch.github.io/Public-API-Requests/",
      github_link: "https://github.com/calebhasch/Public-API-Requests",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 6,
      project_name: "React Gallery",
      description:
        "A search engine that finds images related to a typed or predetermined prompt.",
      technologies: ["React", "CSS", "Third-Party API"],
      live_link: "https://calebhasch.github.io/React-Gallery/",
      github_link: "https://github.com/calebhasch/React-Gallery",
      image_urls: [
        "/static/images/ReactGallery(Cosmos).png",
        "/static/images/ReactGallery(cats).png",
        "/static/images/ReactGallery(NoResults).png",
      ],
    },
    {
      id: 7,
      project_name: "WTWR",
      description:
        "An app that recommends clothing based off current weather provided by a third party api.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "API",
        "Virtual Terminal",
        "Google Cloud",
        "HTTPS",
      ],
      live_link: "https://calebhaschwtwr.crabdance.com/",
      github_link: "https://github.com/CalebHasch/se_project_react",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 8,
      project_name: "Around The US",
      description: "App that displays locations traveled for a specific user.",
      technologies: ["JavaScript", "OOP", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/se_project_aroundtheus/",
      github_link: "https://github.com/CalebHasch/se_project_aroundtheus",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 9,
      project_name: "Coffee Shop",
      description: "An app that has a coffee shop feel to it.",
      technologies: ["HTML", "CSS"],
      live_link: "https://calebhasch.github.io/Public-API-Requests/",
      github_link: "https://github.com/calebhasch/Tech-degree-project-5",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 10,
      project_name: "Warrior Legend",
      description: "A game to collect the key and get the treasure.",
      technologies: ["JavaScript", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/Warrior-Legend/",
      github_link: "https://github.com/CalebHasch/Warrior-Legend",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 11,
      project_name: "Racing",
      description: "A 2 player racing game.",
      technologies: ["JavaScript", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/Racing/",
      github_link: "https://github.com/CalebHasch/Racing",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 12,
      project_name: "Pong",
      description: "The classic pong game with a twist.",
      technologies: ["JavaScript", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/Pong/",
      github_link: "https://github.com/CalebHasch/Pong",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
    {
      id: 13,
      project_name: "Brickbreaker",
      description: "The classic brickbreaker game.",
      technologies: ["JavaScript", "HTML", "CSS"],
      live_link: "https://calebhasch.github.io/brickbreaker/",
      github_link: "https://github.com/CalebHasch/brickbreaker",
      image_urls: [
        "/static/images/project5(1).png",
        "/static/images/project5(2).png",
        "/static/images/project5(3).png",
      ],
    },
  ],
};

const number = { test: "it works" };

export { projectList, number };
