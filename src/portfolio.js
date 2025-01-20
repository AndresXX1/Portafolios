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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
       fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Dialogflow",
      fontAwesomeClassname: "fas fa-comment"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux Toolkit",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Type script",
      fontAwesomeClassname: "fa-solid fa-user"
    },
    {
      skillName: "Material UI",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Next",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "My SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "BootsTrap",
      fontAwesomeClassname: "fa-solid fa-user"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Expo",
      fontAwesomeClassname: "fab fa-expeditedssl"
    },
    {
      skillName: "Sequelize",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Moment",
      fontAwesomeClassname: "far fa-clock"
    },
    {
      skillName: "Nodemailer",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "Morgan",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "SQL Shell Postgres",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Git Bash",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "SQL Base de datos",
      fontAwesomeClassname: "fas fa-database"
    },
  ],

  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Universidad Tecnologica nacional (UTN)",
      logo: require("./assets/images/UTN.jpg"),
      subHeader: "Ingeniero en sistemas",
      duration: "2024 - 2030",
      desc: "Actualmente cursando el primer año de la carrea",
      descBullets: [
        "Quiero ser ingeniero en sistemas para poder seguir creciendo como un profeccional programador"
      ]
    },
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
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "96%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true 
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [

    {
      role: "Full stack Developer",
      company: "May Land",
      companylogo: require("./assets/images/LogoMayLand.png"),
      date: "Oct 2024 – Actualidad",
      descBullets:[ "Realizacion de distintos proyectos en distintos equipos centrandome mas en el front-end y en la comunicacion del front-end con el back-end",
        "Trabajo constante en equipo entre el equipo de diseñadores XUI y con el equipo del back end",
        "Desarrollo completo de aplicaciones y paginas web como asi tambien paneles de administracion",
        "Es un trabajo en relacion de dependencia en el cual realizamos reuniones semanales para re-organizacion o correcciones",
        "Encargado del Front-end y de la conexion del front-end con el back-end"

      ]
    },
    {
      role: "Full stack Developer(Front)",
      company: "OPTIMO",
      companylogo: require("./assets/images/logo5.jpeg"),
      date: "Enero 2024 – Junio 2024",
      desc: "Pasantia paga",
      descBullets: [
        "Realizacion del frontend completo: Diseño XUI, Dashboard Admin, Dashboard Cliente, Dashboard Super Admin, Coneccion con el backend",
        
        "Trabajo en equipo de 5 personas y el cliente, dirigi el equipo de desarrolladores tanto el back como el front",
        "Reuniones diarias para la organizacion del proyecto y muestras de avance",
        "Cumplimiento con todas las tareas pedidas trabajando con un panel organizativo"
      ]
    },
    {
      role: "Full stack Developer",
      company: "Henry",
      companylogo: require("./assets/images/logoOG.png"),
      date: "Marzo 2023 – Marzo 2024",
      desc: "Contrato de formacion",
      descBullets: [
        "Realizacion de 4 proyectos profecionales con un equipo conformado por 6 personas",
        "las tecnologias principales aprendidas fueron JavaScript, React, Node.js, Express y postgress",
        "Ganador por votos del proyecto individual o P.I con el proyecto de rick and morty",
        "Distincion especial por diseño y manejo de datos",
        "Mas de 900 horas de cursado intensivo aproximadamente 8 horas por dia",
        "Relizacion de proyectos individuales aplicando las tecnologias aprendidas tanto en el front como en el back"
      ]
    },


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
      image: require("./assets/images/logo_Express-Cash.png"),
      projectName: "Express cash Panel Administrador",
      projectDesc: "Este panel de administracion de la app expressCash que realice dentro de May Land. Esta basada en Micro prestamos personales es para que el cliente pueda administrar datos de sus clientes y ver el flujo de los mismos. Desarrolle todo el front y la union del front con el back",
      footerLink: [


        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/EXP-Front"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/EXP-Back"
        }
      ]
    },
    {
      image: require("./assets/images/telefonoExpressCash.png"),
      projectName: "Express Cash Aplicacion movil",
      projectDesc: "Esta es la Aplicacion movil que realice dentro de  May Land. Es una aplicaccion finaniciera con el objetivo de otorgar prestamos a personas que tengan un historial crediticio confiable. Realice el front como tambien la comuniacion con el back",
      footerLink: [

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/EXP-App"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/EXP-Back"
        }
      ]
    },
    {
      image: require("./assets/images/logo_login.png"),
      projectName: "ArgenCompras E-Commerse",
      projectDesc: "Este es el e-commerse De una empresa financiera que busca otorgar prestamos a travez de la venta de productos su objetivo principal es vender prestamos a travez de los productos electronicos Realizado en May Land. Solo participe del front y la comunicacion con el back",
      footerLink: [

        {
          name: "ArgenCompras E-Commerse",
          url: "https://ecommerce.maylandlabs.com/"
        },

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Cons-Ecommers"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Cons-backend"
        }
      ]
    },
    {
      image: require("./assets/images/image_mobile.png"),
      projectName: "ArgenPesos Aplicacion movil",
      projectDesc: "Esta aplicacion es la misma del e-commerse de argenCompras, las dos funcionan en conjunto. Desarrollada en May Land con un euqipo de trabajo y reportandole directamente al dueño de la start-Up Desarrolle algunas comunicaciones con el back end en conjunto con el equipo de desarrollo.",
      footerLink: [

        {
          name: "ArgenPesos Aplicacion",
          url: "https://play.google.com/store/apps/details?id=com.binarysorcerers.argenpesosnuevo&hl=es_419"
        },

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Cons-app"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Cons-backend"
        }
      ]
    },
    {
      image: require("./assets/images/logo_argenpesos.png"),
      projectName: "ArgenPesos Panel de Administrador",
      projectDesc: "Este es el panel de administrador para la app argenpesos Desarrollada en May Land con un equipo de trabajo grande. En este proyecto trabaje en la coneccion entre el front-end y el back-end",
      footerLink: [

        {
          name: "Argen Pesos Admin Panel",
          url: "https://admin-ecommerce.maylandlabs.com"
        },

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Cons-Admin-Frontend"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Cons-backend"
        }
      ]
    },
    
    {
      image: require("./assets/images/nosotroslogosn.png"),
      projectName: "Profecionales",
      projectDesc: "Este es un proyecto para ayudar a los profecionales de la construccion para hacer compras y presupuestos de mano de obra como tambien de materiales.",
      footerLink: [


        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Profecionales-Front"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Profesionales-Back"
        }
      ]
    },
    {
      image: require("./assets/images/logo20.png"),
      projectName: "Oleo Bot",
      projectDesc: "El proyecto es un Bot de whatsApp para el restaurante Oleo, donde se pueden hacer pedidos reservas y demas, ademas de mejorar el sistema de comandas que se utiliza habitualemte y asi tener mas control del tiempo de los pedidos",
      footerLink: [

        {
          name: "Oleo Bot",
          url: "https://bot-whats-app-front-oleo.vercel.app/"
        },

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Bot-WhatsApp-Front-Oleo"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/whatsapp-bot-cocina-oleo-back"
        }
      ]
    },

    {
      image: require("./assets/images/marvel-Logo.png"),
      projectName: "Marvel Studio",
      projectDesc: "Prueba tecnica para una empresa de Argentina, Realizada con Vue y java escript. El back esta realizado con spring boot y java (Microservise)",
      footerLink: [

        {
          name: "Marvel Studio",
          url: "https://uteam-front-vue.vercel.app/"
        },

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Uteam-Front-Vue"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Uteam-Back-Java"
        }
      ]
    },

    {
      image: require("./assets/images/opsnf.png"),
      projectName: "Optimo",
      projectDesc: "Aplicacion de administracion y organicacion de espacios, aplicacion para una empresa colombiana para gestionar edificios publicos y privados ",
      footerLink: [

        {
          name: "Link del repositorio (Front)",
          url: "https://github.com/AndresXX1/Optimo-Front-End"
        },
        {
          name: "Link del repositorio (Back)",
          url: "https://github.com/AndresXX1/Optimo-Back-End"
        }
      ]
    },
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
      projectDesc: "Agencia Hotelera que da el sericio de alquiler de cabañas a los propietarios y retiene una ganancia por el servicio",
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
        "Desarrollador de software full stack fronted y backend con mas de 800 horas cursadas",
      image: require("./assets/images/Henry-logo-white-space.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://res.cloudinary.com/ds4blfuip/image/upload/v1710204275/Imagen_de_WhatsApp_2024-03-08_a_las_17.44.07_e8d1646f_rdsfln.jpg"
        },

      ]
    },
    // {
    //   title: "Assitente de Google",
    //   subtitle:
    //     "Desarrollé un gurú de JavaScript de acción del Asistente de Google que está disponible en 2 mil millones de dispositivos en todo el mundo..",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    
    //   ]
    // },

    {
      title: "Bases de datos",
      subtitle: "Curso completo de +40 horas de bases de datos",
      image: require("./assets/images/png-transparent-database-design-sql-online-database-software-development-logo-computer-program-data.png"),
      imageAlt: "PWA Logo",
      footerLink: [

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
