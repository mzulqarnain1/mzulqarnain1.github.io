/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "M. Zulqarnain",
  title: "Hi, I'm Zulqarnain",
  subTitle:
    "Backend and applied AI engineer with about a decade of experience, most of it in Python, Django, and FastAPI. I've worked on systems in edtech (including a platform that reached 40M+ learners), travel search, healthcare, and most recently an AI-driven investment platform, picking up AWS, data pipelines, and LLM tooling along the way.",
  resumeLink:
    "https://docs.google.com/document/d/1yU6obaAtZmotQwO8ZJmjApOCeSW0-ck0/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mzulqarnain1",
  linkedin: "https://www.linkedin.com/in/mzulqarnain1/",
  gmail: "zulqarnain.mailbox@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend systems, data infrastructure, and the AI/LLM tooling wrapped around them",
  skills: [
    "Backend systems in Python, Django, and FastAPI, built to hold up under real production load",
    "LLM and agentic workflows: pipelines, MCP servers, automation that replaces work people used to do by hand",
    "Data infrastructure and ETL, most recently for a database of 500,000+ companies, plus the AWS deployments that keep it running"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      svgPath:
        "M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AI / LLM",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Punjab University College of Information Technology",
      logo: require("./assets/images/pucit-logo.jpg"),
      subHeader: "BS(H) Software Engineering",
      duration: "October 2012 - June 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend & APIs",
      progressPercentage: "100%"
    },
    {
      Stack: "Data & Cloud Infra",
      progressPercentage: "95%"
    },
    {
      Stack: "AI / LLM Engineering",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data & Software Engineer",
      company: "Basis Set Ventures",
      companylogo: require("./assets/images/bsv-logo-2.jpg"),
      date: "May 2022 – Mar 2026",
      desc: "One of three engineers building and running the firm's core investment platform, from backend services to the data pipelines feeding them.",
      descBullets: [
        "Proposed and led the rewrite of Pascal, our main product, from Django templates to FastAPI and React. It was my call to make the switch, and I owned the implementation.",
        "Built and maintained the pipelines that pull in and process thousands of startups a day: company profiles, GitHub activity, founder background and education history, all feeding a database of over 500,000 companies.",
        "Built a founder-enrichment pipeline on my own, combining LinkedIn scraping, Google search, and tools like PhantomBuster, with logging at every step so failures were easy to trace.",
        "Built a social presence tracking module that pulled follower counts and activity for every company in the database, across GitHub, Product Hunt, YCombinator, Discord, and Twitter.",
        "Replaced a clunky form-based search with plain full-text search, so investors could just type what they were looking for instead of filling out a form.",
        "Added LLM-based automation for business case evaluation, data filtering, and categorization, parts of the process that used to be manual.",
        "Stack: Python · Django · FastAPI · PostgreSQL · AWS · Docker · Apache Airflow · Argo Workflows · Next.js · MCP · Vector Databases · Agentic AI Workflows"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Stack Builders",
      companylogo: require("./assets/images/sb-logo.jpg"),
      date: "Oct 2021 – Apr 2022",
      desc: "Backend engineer at FindKeepLove, a platform fashion and lifestyle brands use to run sweepstakes campaigns.",
      descBullets: [
        "Shipped new features and fixed production issues across a Flask backend and React frontend.",
        "Built the recurring-payment and subscription-billing service from scratch, with retry logic and alerting when charges failed.",
        "Stack: Python · Flask · ReactJS · MariaDB · Celery · Redis · Docker · CircleCI"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Arbisoft",
      companylogo: require("./assets/images/arbisoft-logo.jpg"),
      date: "Jan 2018 – Nov 2021",
      desc: "Worked with two clients, edX and Wanderu, on infrastructure and travel-provider integrations.",
      descBullets: [
        "Worked directly with an edX engineering manager on infrastructure across 140+ microservices, doing the unglamorous but critical work: dependency upgrades, CI/CD changes, deprecations, security patches.",
        "Built and maintained 30+ travel-provider integrations for Wanderu, including FlixBus, Trenitalia, and RailEasy, covering thousands of stations across Europe and a lot of geolocation and maps API work.",
        "Owned the Trenitalia and RailEasy integrations top to bottom, including both search and booking flows and credit card payments.",
        "Stack: Python · Django · ReactJS · PostgreSQL · MongoDB · AWS · Kubernetes · Jenkins · GoCD"
      ]
    },
    {
      role: "Software Engineer",
      company: "QC Technologies",
      companylogo: require("./assets/images/qc-logo.png"),
      date: "Nov 2016 – Jan 2018",
      desc: "Full-stack developer on Vital Interaction, a patient-communication platform used by healthcare organizations across the US.",
      descBullets: [
        "Onboarded hundreds of US medical facilities onto the appointment-automation portal, built on two-way SMS, email, and IVR.",
        "Shipped web features and backend services for the mobile apps, and was in the room for planning, architecture calls, and client conversations.",
        "Stack: Python · Django · MySQL · jQuery"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Work",
  subtitle: "A closer look at what I built and owned at each company",
  projects: [
    {
      image: require("./assets/images/bsv-logo.jpg"),
      projectName: "Basis Set Ventures",
      projectDesc:
        "Led the rewrite of the firm's core investment platform from Django templates to FastAPI and React, and built a founder-enrichment pipeline (LinkedIn and Google scraping, PhantomBuster, verification) that covers a database of 500,000+ companies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.basisset.ventures/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fkl-logo.jpg"),
      projectName: "FindKeepLove",
      projectDesc:
        "Backend engineer on a Flask and React sweepstakes platform. Built the recurring-payment and subscription-billing service from scratch, with retry logic and alerting.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.findkeep.love/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/edx-logo.png"),
      projectName: "edX",
      projectDesc:
        "Worked directly with edX's engineering team keeping infrastructure healthy across 140+ microservices, for a platform that reached 40M+ learners worldwide.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.edx.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wanderu-logo.png"),
      projectName: "Wanderu",
      projectDesc:
        "Built and maintained 30+ travel-provider integrations, including FlixBus, Trenitalia, and RailEasy, covering thousands of stations and full booking flows with payment processing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wanderu.com/"
        }
      ]
    },
    {
      image: require("./assets/images/vi-logo.png"),
      projectName: "Vital Interaction",
      projectDesc:
        "Onboarded hundreds of US medical facilities onto an automated patient-communication portal built on two-way SMS, email, and IVR.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vitalinteraction.com/"
        }
      ]
    },
    {
      image: require("./assets/images/tasseled-logo.svg"),
      projectName: "Tasseled",
      projectDesc:
        "Built a GraphQL API for Tasseled that sits between their frontend and an ArangoDB graph database, along with a number of new REST endpoints and feature work on the frontend itself.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tasseled.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),

  achievementsCards: [
    {
      title: "AWS Cloud Developer Nanodegree",
      subtitle:
        "A Udacity Nanodegree covering the fundamentals of cloud development and deployment on AWS, including microservices, Kubernetes, and serverless architecture.",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://confirm.udacity.com/MGAVGFVQ"
        },
        {
          name: "Program Curriculum",
          url: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9990"
        }
      ]
    },
    {
      title: "ReactJS Nanodegree",
      subtitle:
        "A Udacity Nanodegree on building UIs with React (and React Native for iOS/Android), plus state management with Redux.",
      image: require("./assets/images/react-logo.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://confirm.udacity.com/A7PHGVNK"
        },
        {
          name: "Program Curriculum",
          url: "https://www.udacity.com/course/react-nanodegree--nd019"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-331-7431748",
  email_address: "zulqarnain.mailbox@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
