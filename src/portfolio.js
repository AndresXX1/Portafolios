/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import carga from "./assets/lottie/carga.json"; // Rename to your file name for custom animation
import Button from "./components/button/Button";
import React from 'react';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: carga,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Andres Vera",
  title: "Hola a todos, Soy Andres",
  subTitle: emoji(
    "Un apasionado desarrollador de software Full Stack 🚀 con experiencia en la creación de aplicaciones web y móviles con JavaScript/Reactjs/Nodejs/React Native y algunas otras bibliotecas y marcos interesantes."
  ),
 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AndresXX1",
  linkedin: "https://www.linkedin.com/in/andres-vera-676414281/",
 gmail: "andres_9_09@hotmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle: "Desarrollador full stack developer que busca explorar todo lo relacionado a la programacion",
  skills: [
    emoji(
      "⚡ Desarrolle interfaces de usuario/front-end altamente interactivas para sus aplicaciones web y móviles"
    ),
    emoji("⚡ Aplicaciones web (SPA) "),
    emoji(
      "⚡ Integracion de servicios de terceros  Firebase/ Mercado Pago / Google login / Google Maps / wallets de cryptos / etc "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Henry BootCamp ",
      logo: require("./assets/images/logoOG.png"),
      subHeader: "Full Stack Developer",
      duration: "Marzo 2023 - Marzo 2024",
      desc: "+800 horas de cursada realizando 2 proyectos individuales y 2 proyectos grupales",
      descBullets: [
        "Los proyectos individuales tienen el proposito de perfeccionar las heard Skill",
        "Los proyectos grupales mejoraron mucho mis soft skill como el trabajo en equipo y la coordinacion del mismo"
      ]
    },
    {
      schoolName: "Instituto de ingles (P. Ochoa)",
      logo: require("./assets/images/descarga (2).png"),
      subHeader: "Curso de Ingles desde 0",
      duration: "Octubre 2023 - Actualidad",
      desc: "Ingles para principiantes",
      descBullets: ["Actualmente cursando el modulo 3/4"]
    },
    {
      schoolName: "Facultad de Arquitectura (F.A.U.D.I) (U.N.C)",
      logo: require("./assets/images/images.jpeg"),
      subHeader: "Arquitecto",
      duration: "Febrero 2017 - Diciembre 2020",
      desc: "Complete el 2do año de la carrera y curse algunas materias de 3ro",
      descBullets: ["Promedio de 10 en todas las materias, el mejor de la clase siempre"]
    },
    {
      schoolName: "Ing C. Cassaffousth",
      logo: require("./assets/images/800_5c9f3f5424e87.jpg"),
      subHeader: "Tecnico Maestro mayor de Obras",
      duration: "Febrero 2009 - Diciembre 2016",
      desc: "Especialista en estructuras sismo resistentes",
      descBullets: ["1er puesto provincial en diseño arquitectonico "]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full stack Developer",
      company: "Henry",
      companylogo: require("./assets/images/logoOG.png"),
      date: "Marzo 2023 – Marzo 2024",
      desc: "Contrato de formacion",
      descBullets: [
        "Realizacion de 2 proyectos profecionales con un equipo profecional",
        "Relizacion de proyectos individuales aplicando las tecnologias aprendidas tanto en el front como en el back"
      ]
    },
    {
      role: "Operador de equipamiento pesado",
      company: "F2J INDUSTRY",
      companylogo: require("./assets/images/descarga.jpeg"),
      date: "Mayo 2020 – Febrero 2022",
      desc: "Operario cambiador de moldes, operaba puentes gruas para mover matrices entre 10 a 20 toneladas, la principal tarea era organizar el comabio de produccion "
    },
    {
      role: "Tecnico de calidad",
      company: "Connam",
      companylogo: require("./assets/images/16134_logo.jpg"),
      date: "Jan 2015 – Sep 2015",
      descBullets:[ " Control Permanente del producto y cada material utilizado",
      " Uso de herramientas de medición calibre decimal, cinta metrica, calibres pasa no pasa",
      "Pruebas en laboratorio de resistencia a la compresión, pegado y destrucción",
      "Carga de datos de controles de calidad y proceso cada 15min ",
      "Creación de estadísticas y resúmenes diarios"

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
  title: "Grandes Proyectos",
  subtitle: "Algunos proyectos en los que trabaje",
  projects: [
    
    {
      image: require("./assets/images/logo_runners_paradise.jpg"),
      projectName: "Runners Paradise",
      projectDesc: "E-commerse de zapatillas deportivas ofrece mayor visibilidad a los vendedores y genera ganancias por la venta de productos ",
      footerLink: [

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/P.F-Front"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Pf-back"
        }
      ]
    },
    {
      image: require("./assets/images/descarga (1).png"),
      projectName: "Hostel Premium",
      projectDesc: "Agencia Hotelera que ofrese el sericio de alquiler de cabañas a los propietarios y retiene una ganancia por el servicio",
      footerLink: [


        {
          name: "Link del repositorio (Client-Front)",
          url: "https://github.com/AndresXX1/Front-cliente-Hostel-Premium"
        },
        {
          name: "Link del repositorio (Client-Back)",
          url: "https://github.com/AndresXX1/back-pf-hoteles"
        },
        {
          name: "Link del repositorio (Admin-Front)",
          url: "https://github.com/AndresXX1/PF-front-Admin"
        },
        {
          name: "Link del repositorio (Admin-Back)",
          url: "https://github.com/AndresXX1/pf-back-hostel-admin"
        }
      ]
    },
    {
      image: require("./assets/images/pokelogo.png"),
      projectName: "Pokemon",
      projectDesc: "Proyecto integrador del bootcamp, utilizando la poke api, la idea es desarrollar una (pokedex) como la del programa",
      footerLink: [

        {
          name: "Link del repositorio (front y back)",
          url: "https://github.com/AndresXX1/P.i-pokemons"
        }

      ]
    },
    {
      image: require("./assets/images/logo_formula1_nuevo.jpg"),
      projectName: "Drivers",
      projectDesc: "Proyecto integrador del bootcamp de hanry donde se aplican tecnologias como react, redux, sequelize y express",
      footerLink: [

        {
          name: "Proyecto en gitHub (front y back)",
          url: "https://github.com/AndresXX1/Drivers-P.I"
        },
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/u183fjQb_400x400.jpg"),
      projectName: "Rick and Morty",
      projectDesc: "Primer proyecto como developer, salio el tercer mejor proyecto por votacion de toda la cohorte con mas de 130 compañeros",
      footerLink: [

        {
          name: "Link del repositorio (front y back)",
          url: "https://github.com/AndresXX1/rick-and-morty"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
  
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y certificaciones 🏆 "),
  subtitle:
    "Logros, certificaciones, cartas de premios y algunas cosas interesantes que hice!",

  achievementsCards: [
    {
      title: "Full Stack Developer",
      subtitle:
        "Desarrollador de softhware full stack fronted y backend con mas de 800 horas cursadas",
      image: require("./assets/images/Henry-logo-white-space.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://res.cloudinary.com/ds4blfuip/image/upload/v1710204275/Imagen_de_WhatsApp_2024-03-08_a_las_17.44.07_e8d1646f_rdsfln.jpg"
        },

      ]
    },
    {
      title: "Asstente de Google",
      subtitle:
        "Desarrollé un gurú de JavaScript de acción del Asistente de Google que está disponible en 2 mil millones de dispositivos en todo el mundo..",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Bases de datos",
      subtitle: "Curso completo de +40 horas de bases de datos",
      image: require("./assets/images/database.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactame!  ☎️"),
  subtitle:
    "¿Queres discutir un proyecto o simplemente quieres saludar? Mi bandeja de entrada está abierta para todos.",
  number: "+54-3512439562",
  email_address: "andres_9_09@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
