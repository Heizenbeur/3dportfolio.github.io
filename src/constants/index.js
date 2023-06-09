import {
    anaconda,
    cellprofiler,
    discord,
    excel,
    fiji,
    githublogo,
    googleresearch,
    ppt,
    prism,
    python,
    quartzy,
    rstats,
    slack,
    visualcodestudio,
    word,
    zotero,
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
    office, 
    mbf,
    brainandb,
    combio,
    eneuro,
    plosone,
    gscholar, 
    incia, 
    linkedin, 
    neurocampus,  
    orcid, 
    pubmed, 
    researchgate, 
    twitter,
    univbdx,
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
        name: "Office",
        icon: office,
    },
    {
        name: "Zotero",
        icon: zotero,
    },
    {
        name: "FIJI",
        icon: fiji,
    },
    {
        name: "Cell Profiler",
        icon: cellprofiler,
    },
    {
        name: "mbf",
        icon: mbf,
    },
    {
        name: "prism",
        icon: prism,
    },
  ];
  
  const experiences = [
    {
      title: "BSc in Biology",
      company_name: "Claude Bernard University (France)",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "Sep 2011 - Jul 2014",
      points: [
        "Major in Animal Physiology.",
      ],
    },
    {
      title: "Project Leader Assistant",
      company_name: "GenOway",
      icon: meta,
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
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
      name: "Linkedin",
      image: linkedin,
      source_code_link: "https://www.linkedin.com/in/yacinetensaouti/",
    },
    {
      name: "Twitter",
      image: twitter,
      source_code_link: "https://twitter.com/yacinetensaouti",
    },
    {
      name: "Google scholar",
      image: gscholar,
      source_code_link: "https://scholar.google.com/citations?hl=fr&user=JJRk43sAAAAJ",
    },
    {
      name: "Pubmed",
      image: pubmed,
      source_code_link: "https://pubmed.ncbi.nlm.nih.gov/?term=Tensaouti+Y&cauthor_id=32119690",
    },
    {
      name: "Research Gate",
      image: researchgate,
      source_code_link: "https://www.researchgate.net/profile/Yacine-Tensaouti",
    },
    {
      name: "Orcid",
      image: orcid,
      source_code_link: "https://orcid.org/0000-0001-6475-3245",
    },
    {
      name: "Université de Bordeaux",
      image: univbdx,
      source_code_link: "https://www.u-bordeaux.fr/en/research/research-organisation/research-departments/bordeaux-neurocampus",
    },
    {
      name: "Bordeaux Neurocampus",
      image: neurocampus,
      source_code_link: "https://www.bordeaux-neurocampus.fr/staff/yacine-tensaouti/",
    },
    {
      name: "INCIA",
      image: incia,
      source_code_link: "http://www.incia.u-bordeaux1.fr/spip.php?article757",
    },
  ];
  
  const projects = [
    {
      name: "Communications Biology (2021)",
      description:
        "Yu TS, Tensaouti Y*, Stephanz EP, Chintamen S, Rafikian EE, Yang M, Kernie SG. Astrocytic ApoE underlies maturation of hippocampal neurons and cognitive recovery after traumatic brain injury in mice.",     
        tags: [
        {
          name: "apolipoprotein E",
          color: "blue-text-gradient",
        },
        {
          name: "astrocytes",
          color: "green-text-gradient",
        },
        {
          name: "hippocampal neurogenesis",
          color: "pink-text-gradient",
        },
      ],
      image: combio,
      source_code_link: "https://www.nature.com/articles/s42003-021-02841-4",
    },
    {
      name: "Plos One (2020)",
      description:
        "Tensaouti Y*, Yu TS, Kernie SG. Apolipoprotein E regulates the maturation of injury-induced adult-born hippocampal neurons following traumatic brain injury.",
      tags: [
        {
          name: "apolipoprotein E",
          color: "blue-text-gradient",
        },
        {
          name: "traumatic brain injury",
          color: "green-text-gradient",
        },
        {
          name: "hippocampal neurogenesis",
          color: "pink-text-gradient",
        },
      ],
      image: plosone,
      source_code_link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229240",
    },
    {
      name: "eNeuro (2018)",
      description:
        "Tensaouti Y*, Stephanz EP, Yu TS, Kernie SG. ApoE Regulates the Development of Adult Newborn Hippocampal Neurons.",
      tags: [
        {
          name: "apolipoprotein E",
          color: "blue-text-gradient",
        },
        {
          name: "human isoforms",
          color: "green-text-gradient",
        },
        {
          name: "hippocampal neurogenesis",
          color: "pink-text-gradient",
        },
      ],
      image: eneuro,
      source_code_link: "https://www.eneuro.org/content/5/4/ENEURO.0155-18.2018",
    },
 {
      name: "Brain and Behavior (2017)",
      description:
        "Yu TS, Tensaouti Y*, Bagha ZM, Davidson R, Kim A, Kernie SG. Adult newborn neurons interfere with fear discrimination in a protocol-dependent manner.",
      tags: [
        {
          name: "fear conditioning",
          color: "blue-text-gradient",
        },
        {
          name: "traumatic brain injury",
          color: "green-text-gradient",
        },
        {
          name: "hippocampal neurogenesis",
          color: "pink-text-gradient",
        },
      ],
      image: brainandb,
      source_code_link: "https://onlinelibrary.wiley.com/doi/full/10.1002/brb3.796",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
