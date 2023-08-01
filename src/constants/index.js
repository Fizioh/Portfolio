import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    markus,
    bsca,
    ypci,
    armee,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    python,
    django,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Bio",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "GIS Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Mentor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    /*
    {
      name: "Koa JS",
      icon: koa,
    },
    {
      name: "Cesium JS",
      icon: cesium,
    },
    {
      name: "Material UI",
      icon: material,
    },
    {
      name: "ArcGIS API",
      icon: arcgis,
    },
    {
      name: "QGIS",
      icon: qgis,
    },
    */
  ];
  
  const experiences = [
    {
      title: "Chef d'équipe Réseaux",
      company_name: "Ministère de la Défense",
      icon: armee,
      iconBg: "#fff",
      date: "Octobre 2015- Janvier 2021",
      points: [
        "Mise en œuvre et maintenance de systèmes d'information et de communication sol sur les bases de défense, les bases aériennes et certains sites isolés.",
        "Participation au déploiement et à l’entretien des systèmes de télécommunication",
        "Direction et formation d'une équipe dans la mis en place de réseaux hertziens",
      ],
    },
    {
      title: "Développeur Fullstack React/Django",
      company_name: "Markus",
      icon: markus,
      iconBg: "#454545",
      date: "Juillet 2021 - Septembre 2021",
      points: [
        "Conception des interfaces réactives et responsives avec React et Redux",
        "Développement et maintenance du back-end Python avec Django REST pour la gestion d'API et interface d'administration",
        "Gestion des déploiements depuis git sur les plateformes Firebase et Heroku",
        "Formation stagiaires au technos Front, Back, Base de données et création API",
      ],
    },
    {
      title: "Développeur Fullstack Vue/Django",
      company_name: "YPCI",
      icon: ypci,
      iconBg: "#fff",
      date: "Septembre 2021 - Mars 2022",
      points: [
        "Développement API métier avec les frameworks Django et Django Rest Framework sur Oracle VM avec distribution linux Debian 11",
        "Mise en place de dashboard administrateur avec Vue.js, VueX et Vuetify avec vérification tokens JWT",
        "Récupération et envoi automatique de fichiers, dossiers depuis API vers Google Drive",
        "Architecture graphique de schémas via SQL Power Architect, import/export des données dans la base PostgreSQL via DBeaver",
      ],
    },
    {
      title: "Développeur Fullstack GIS React/Django",
      company_name: "BSCA",
      icon: bsca,
      iconBg: "#454545",
      date: "Mars 2022 - Present",
      points: [
        "Développement des interfaces utilisateurs GIS via React (Typescript).",
        "Création et utilisation de cartes 2D ArcGIS via API JS",
        "Utilisation d'endpoints Django pour récupération des datas",
        "Déploiement des applications sur machine linux via Git et serveur web Windows IIS",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };