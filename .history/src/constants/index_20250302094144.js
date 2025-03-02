import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Welcome 🌟",
  introduction:
    "I’m Abuzar, a frontend developer specializing in creating seamless web applications using React and Next.js.",
  description:
    "I create engaging digital experiences that enhance user satisfaction.",
};

export const PROJECTS = [
  {
    name: "Rains",
    description: "E-commerce platform offering stylish apparel and accessories",
    image: projects1, // Ensure `projects1` is defined and imported correctly
    link: "https://www.rains.com/",
  },
  {
    name: "E-Commerce Dashboard",
    description:
      "Manage your online store with real-time insights and analytics",
    image: projects2,
    link: "https://eccomerce-web-dashboard-di7d.vercel.app/",
  },
  {
    name: "E-Commerce Website (UI)",
    description: "A modern UI design for showcasing a variety of products",
    image: projects3,
    link: "https://eccomerce-01-abuzar.vercel.app/",
  },
  {
    name: "IntraChat App",
    description:
      "ChatApp for intra Department Communication of Islamia College Peshawar",
    image: projects4,
    link: "https://fyp-intra-chat-3gdl.vercel.app/",
  },
  {
    name: "PortFolio Old",
    description:
      "Dynamic portfolio showcasing diverse skills and innovative projects in design and development",
    image: projects5,
    link: "https://abuzar-protfolio-renk.vercel.app/",
  },
  {
    name: "Disney clone",
    description:
      "Disney app clone featuring immersive content and an engaging user experience for fans of all ages.",
    image: projects6,
    link: "https://disney-abuzar.vercel.app/",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer passionate about building modern web applications that are both functional and visually appealing. With a strong foundation in software engineering, I completed my BS in Software Engineering from Islamia College University Peshawar, where I developed a keen interest in creating user-centric digital experiences.",
    "I specialize in using React, Next.js, Tailwind CSS, Redux Toolkit, JavaScript, HTML, and CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I am constantly exploring new technologies and frameworks to stay updated with industry trends, ensuring that my skills remain sharp. Additionally, I believe in the importance of user feedback to enhance usability and deliver exceptional digital products.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 ",
    title: "Junior Frontend Developer",
    location: "Peshawar",
    description: [
      "Completed a 6-month internship at TechPioneers, gaining hands-on experience in frontend development using React.",
      "Assisted students in web development, providing valuable guidance and support to enhance their learning experience.",
      "Contributed to team projects by implementing responsive design and optimizing user interfaces.",
    ],
  },
  {
    yearRange: "2024 ",
    title: "Frontend Developer Intern",
    location: "Remote",
    description: [
      "Completed a 3-month internship at HiskyTech, a software house, where I developed and maintained dynamic, responsive web applications using React, Next.js, and Tailwind CSS, contributing to various client projects.",
      "Enhanced application performance through effective frontend optimization strategies, focusing on load times and user experience.",
      "Participated in code reviews and led workshops to mentor junior developers.",
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "abuzarktk123@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/xarrkhan001",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abuzar-04529030a",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Abuzar, Thanks for visiting.`,
};
