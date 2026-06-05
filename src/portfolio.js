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
  subTitle: emoji(
    "A Senior Software & Applied AI Engineer 🚀 with nearly a decade of experience designing and scaling backend systems across edtech, travel search, healthcare SaaS, and AI-driven investment platforms. Core expertise in Python, Django, and FastAPI — complemented by hands-on experience with AWS, data engineering, and agentic AI workflows."
  ),
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
  subTitle: "SENIOR SOFTWARE & APPLIED AI ENGINEER BUILDING SCALABLE BACKENDS AND INTELLIGENT SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and scale backend systems using Python, Django, and FastAPI across distributed, high-availability architectures"
    ),
    emoji("⚡ Build and integrate agentic AI workflows, LLM-powered pipelines, and MCP servers for intelligent automation"),
    emoji(
      "⚡ Engineer data infrastructure, ETL pipelines, and full-stack web applications deployed on AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
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
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Scripting",
      progressPercentage: "95%"
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
      desc: "Part of a 3-person engineering team building and maintaining the firm's core AI-driven investment platform across the full stack.",
      descBullets: [
        "Proposed and led the migration of the main product (Pascal) from Django templates to a modern FastAPI and ReactJS stack, owning the architectural decision and its implementation.",
        "Designed and maintained data pipelines that fetched and processed thousands of viable companies and startups daily, covering company profiles, GitHub activity, and founder backgrounds across a database of 500,000+ companies.",
        "Solely designed and built an end-to-end founder enrichment pipeline combining LinkedIn scraping, Google search scraping, and third-party tools like PhantomBuster, with full logging and step-level tracking.",
        "Built a social presence tracking module monitoring follower counts and activity across GitHub, Product Hunt, YCombinator, Discord, and Twitter for every company in the database.",
        "Integrated LLM-powered automations to support business case evaluation, data filtration, categorization, and AI-driven decision workflows.",
        "Stack: Python · Django · FastAPI · PostgreSQL · AWS · Docker · Apache Airflow · Argo Workflows · Next.js · MCP · Vector Databases · Agentic AI Workflows"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Stack Builders",
      companylogo: require("./assets/images/sb-logo.jpg"),
      date: "Oct 2021 – Apr 2022",
      desc: "Senior Software Engineer on the backend team at FindKeepLove, a platform where fashion and lifestyle brands run sweepstakes campaigns to engage wide audiences.",
      descBullets: [
        "Designed, developed, and maintained new features while resolving high-priority production issues across a Flask backend and ReactJS frontend.",
        "Built a new recurring-payment and subscription-billing service from scratch with retry logic and automated alerting.",
        "Stack: Python · Flask · ReactJS · MariaDB · Celery · Redis · Docker · CircleCI"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Arbisoft",
      companylogo: require("./assets/images/arbisoft-logo.jpg"),
      date: "Jan 2018 – Nov 2021",
      desc: "Served two major clients — edX and Wanderu — across infrastructure maintenance and travel provider integrations.",
      descBullets: [
        "Worked directly with an edX Engineering Manager to maintain infrastructure across 140+ microservices, handling dependency upgrades, CI/CD updates, deprecations, and security patches at scale.",
        "Built, maintained, and debugged 30+ ground and rail travel provider integrations for Wanderu, including major European providers such as FlixBus, Trenitalia, and RailEasy, covering thousands of stations and significant geolocation/maps API work.",
        "Owned end-to-end integration for Trenitalia, RailEasy, and several other providers, handling both search and booking flows including credit card payment processing.",
        "Stack: Python · Django · ReactJS · PostgreSQL · MongoDB · AWS · Kubernetes · Jenkins · GoCD"
      ]
    },
    {
      role: "Software Engineer",
      company: "QC Technologies",
      companylogo: require("./assets/images/qc-logo.png"),
      date: "Nov 2016 – Jan 2018",
      desc: "Full-stack developer in the healthcare domain on Vital Interaction, an automated patient communication platform serving healthcare organizations across the US.",
      descBullets: [
        "Integrated hundreds of US medical facilities into the platform's appointment-automation portal using two-way SMS, email, and IVR workflows.",
        "Shipped web application features and backend services supporting mobile applications, with active involvement in planning, architecture design, and direct client interaction.",
        "Stack: Python · Django · MySQL · jQuery"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Products",
  subtitle: "Products that I have worked on",
  projects: [
    {
      image: require("./assets/images/bsv-logo.jpg"),
      projectName: "Basis Set Ventures",
      projectDesc: "Basis Set Ventures is an early-stage investment firm focused on artificial intelligence and its practical application.",
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
      projectDesc: "FindKeepLove partners with brands, retailers, and consumers internet companies to offer exciting sweepstakes opportunities.",
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
      projectDesc: "edX is an American massive open online course provider created by Harvard and MIT. It hosts online university-level courses in a wide range of disciplines to a worldwide student body, including some courses at no charge. It also conducts research into learning based on how people use its platform.",
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
      projectDesc: "Wanderu is a ground and air travel metasearch engine that operates throughout North America and Europe. It provides a one-stop search and booking platform for buses, trains and flights through its website and mobile app. Wanderu is headquartered in Boston, Massachusetts.",
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
      projectDesc: "Vital Interaction is a software provider specialized in automating complex communication workflows. Their premier product, the Automated Patient Interaction System, enables healthcare organizations to communicate more effectively with patients using text messaging, automated voice, and email.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vitalinteraction.com/"
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
      title: "ReactJS Nanodegree",
      subtitle:
        "In this Nanodegree program offered by Udacity.com, I learnt how to build declarative user interfaces for the web with React, and for iOS and Android with React Native. I also learnt how to manage state more predictably in applications with Redux.",
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
    },
    {
      title: "AWS Cloud Developer Nanodegree",
      subtitle:
        "In this Nanodegree program offered by Udacity.com, I am learning the fundamentals of cloud development and deployment with AWS. Then, building different apps leveraging microservices, Kubernetes clusters, and serverless application technology.",
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
