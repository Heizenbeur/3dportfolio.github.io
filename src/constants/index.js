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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Rodent Brain Surgeon",
      icon: web,
    },
    {
      title: "Behavioralist",
      icon: mobile,
    },
    {
      title: "Histologist, Anatomist",
      icon: backend,
    },
    {
      title: "Programmer, Developer",
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
      name: "Three JS",
      icon: threejs,
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
  ];
  
  const experiences = [
    {
      title: "BSc in Biology",
      company_name: "Claude Bernard University (France)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2011 - Jul 2014",
      points: [
        "Major in Animal Physiology.",
      ],
    },
    {
      title: "Project Leader Assistant",
      company_name: "GenOway",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jul 2015 - Dec 2015",
      points: [
        "Leading company in the field of genetically modified mouse and rat models.",
        "Support to 6 project leaders in writing technical reports and led a project to optimize an internal bioinformatic tool.",
        "Collaborating with cross-functional teams to create high-quality products.",
      ],
    }, 
    {
      title: "MSc – Research in Neurosciences",
      company_name: "Claude Bernard University (France)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2014 - Jul 2016",
      points: [
        "Fundamental & Clinical.", 
        "5-months internship: Study of injury-induced neurogenesis in the mouse dentate gyrus following cortical impact, Dr Kernie's lab (CUMC, NY, USA).",
        "1-month internship: Study of the role of the Sp8 transcription factor in postnatal olfactory neurogenesis in mice, Dr Raineteau (SBRI, INSERM U846, France).",
      ],
    },     
    {
      title: "Laboratory Manager",
      company_name: "Columbia University Medical Center (NY, USA)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2016 - Feb 2020",
      points: [
        "Team: Dr Kernie's lab.",
        "Differential effects of human ApoE isoforms on traumatic brain injury-induced neurogenesis in the mouse dentate gyrus.",
        "Large mouse colony management (maintenance, breeding, genotyping).",
        "Purchasing, health and security and ongoing training of lab members."
      ],
    },   
    {
      title: "PhD candidate in Neurosciences",
      company_name: "CNRS, University of Bordeaux (France)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2021 - present",
      points: [
        "Title: Contribution of insular pathways in value- versus cue-guided choice behavior in rats.",
        "Supervision: Dr Shauna L. Parkes.",
        "Team: Decision and Adaptation, INCIA, UMR5287.",
        "Team leader: Dr Mathieu Wolff.",
        "Professional service: Student representative to unit and department councils, teaching and mentoring."
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
