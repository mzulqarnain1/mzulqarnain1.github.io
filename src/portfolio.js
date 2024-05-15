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
    "A passionate Full Stack Engineer 🚀 having 8 years experience of building Web applications with Python/Django/ReactJS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Ld2XgLAIgZIRkYgvjFf23aUbt052yig-/view?usp=sharing",
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
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO BUILD AWESOME WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop highly scalable and reliable Web Application Backends using Python/Django/Flask/FastAPI"
    ),
    emoji("⚡ Develop blazing fast Web Application Frontends using ReactJS and NextJS"),
    emoji(
      "⚡ Deploy Full Stack Web Application on AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
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
      role: "Sr. Software Engineer",
      company: "Basis Set Ventures",
      companylogo: require("./assets/images/bsv-logo-2.jpg"),
      date: "May 2022 – Present",
      desc: "Working as a Python/Django Developer",
      descBullets: [
        "Python, Django, PostgreSQL, SQLAlchemy, Docker, Apache Airflow, Air Table, AWS, Unit Testing, Agile Scrum"
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "Stack Builders",
      companylogo: require("./assets/images/sb-logo.jpg"),
      date: "October 2021 – April 2022",
      desc: "Working as a Python/Flask Developer",
      descBullets: [
        "Python, Flask, Flask RestX, Docker, MariaDB, AWS, Unit Testing, Git, Agile Scrum"
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "Arbisoft",
      companylogo: require("./assets/images/arbisoft-logo.jpg"),
      date: "January 2018 – November 2021",
      desc: "Working as a Senior Software Engineer",
      descBullets: [
        "Python, Django, Docker, PostgreSQL, NoSQL, AWS, Django, Unit Testing, Git, Agile Scrum, CI/CD Pipelines"
      ]
    },
    {
      role: "Software Engineer",
      company: "QC Technologies",
      companylogo: require("./assets/images/qc-logo.png"),
      date: "October 2016 – January 2018",
      desc: "Worked as Full Stack Software Engineer",
      descBullets: [
        "Python, Django, MySQL, Python Unit Testing, Git, Vagrant, Agile Scrum"
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
