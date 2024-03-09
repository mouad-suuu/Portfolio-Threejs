import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Nginx,
  html,
  css,
  reactjs,
  MySQL,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ALX,
  Fst,
  google,
  self,
  AirBnB,
  portfolio,
  threejs,
  shell,
  ayoub,
  othman,
  menobeard,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Low-level Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Project manager",
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
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Nginx",
    icon: Nginx,
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
    title: "Cycle licence in math-IT-physics",
    company_name: "Fst Fes",
    icon: Fst,
    iconBg: "#E6DEDD",
    date: "Auguest 2021 - june 2024",
    points: [
      "Acquired a solid foundation in programming through intensive coursework at the University of Science and Techniques following completion of my BAC. Emphasis placed on mastering low-level programming techniques utilizing C language.",
      "Engaged deeply in the realms of data structures and algorithms, honing analytical and problem-solving skills essential for software development.",
      "Developed proficiency in numerical analysis leveraging Silab, augmenting mathematical prowess with practical computational techniques.",
      "Explored the intricacies of relational databases with a focus on MySQL, acquiring hands-on experience in database design, implementation, and optimization strategies.",
    ],
  },
  {
    title: " enrolled in a software engineering program",
    company_name: "ALX (powerd by Holberton School)",
    icon: ALX,
    iconBg: "#383E56",
    date: "June 2023 - June 2024",
    points: [
      "Currently enrolled in a rigorous 12-month software engineering program at ALX, in collaboration with Holberton School, poised to complete within the next three months.",
      "Engaged in an immersive curriculum encompassing foundational principles of software engineering, spanning from low-level programming to high-level programming and DevOps practices, with a specialized focus in back-end development.",
      "Progressing in mastering low-level programming techniques utilizing C language, coupled with an intensive exploration of data structures and algorithms, aimed at fostering proficiency in computational efficiency and problem-solving methodologies.",
      "Advancing skills in high-level programming languages including Python, JavaScript, and Ruby, as part of the comprehensive journey towards building scalable and efficient software solutions.",
      "Gaining practical knowledge in DevOps methodologies and security practices, including the deployment and management of web servers such as Nginx and Apache2, alongside networking fundamentals and cybersecurity principles.",
      "Actively participating in full-stack web development projects, utilizing various frameworks and environments such as Node.js, Flask, and React, to develop dynamic and responsive web applications.",
    ],
  },
  {
    title: " Google Project Management Certificate",
    company_name: "google",
    icon: google,
    iconBg: "#E6DEDD",
    date: "December 2023 - June 2024",
    points: [
      "Currently undertaking the Google Project Management Certificate program with a targeted completion within the next three months, aimed at honing expertise in modern project management methodologies and practices.",
      "Engaged in a comprehensive curriculum designed by Google, tailored to equip professionals with the essential skills and knowledge required to excel in project management roles across diverse industries.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Self-Learning: Front-end & Back-end Advancement",
    company_name: "self-education",
    icon: self,
    iconBg: "#E6DEDD",
    date: "Always",
    points: [
      "Actively pursuing self-improvement in both front-end and back-end development.",
      "Engaging with diverse online courses from platforms like YouTube, Udemy, Coursera, and FreeCodeCamp.",
      "Expanding expertise in technologies including Three.js, Tailwind CSS, NEXT.js, Vite.js, and more.",
      "Demonstrating commitment to staying updated with the latest advancements in web development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mouad proved me wrong.",
    name: "Othman the titan",
    designation: "CFO",
    company: "BENI MELLAL",
    image: othman,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mouad does.",
    name: "Ayoub bald version",
    designation: "CFO",
    company: "ENSAF",
    image: ayoub,
  },
  {
    testimonial: "Damn i'am good!",
    name: "me no beard",
    designation: "CTO",
    company: "FSTF",
    image: menobeard,
  },
];

const projects = [
  {
    name: "AirBnB clone",
    description:
      "I've built an AirBnB clone using Flask, focusing on RESTful API development. With expertise in Flask and comprehensive unit testing, I've crafted efficient endpoints for managing amenities, cities, places, and users. This project demonstrates my proficiency in back-end development and my ability to create scalable and robust web applications.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: AirBnB,
    source_code_link: "https://github.com/mouad-suuu/AirBnB_clone_v3",
  },
  {
    name: "Simple Shell",
    description:
      "Simple Shell is a lightweight command-line interpreter written in C for UNIX-based operating systems. It allows users to execute commands, manage processes, and navigate directories seamlessly. With its minimalistic design and intuitive interface, Simple Shell provides a fundamental tool for understanding the basics of shell scripting and operating system interactions.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "DATA_Strucute",
        color: "green-text-gradient",
      },
      {
        name: "Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: shell,
    source_code_link: "https://github.com/NabilM5/simple_shell",
  },
  {
    name: "3D portfolio",
    description:
      "In this portfolio project, I embarked on a journey to enhance my front-end skills by leveraging cutting-edge technologies to create a visually stunning portfolio.",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/mouad-suuu/Portfolio-Threejs",
  },
];

export { services, technologies, experiences, testimonials, projects };
