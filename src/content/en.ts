import { skills } from "./shared";
import type { Resume } from "./types";

export const en: Resume = {
  name: "Rezazi Mohamed Abdelbasset",
  shortName: "Abdelbasset Rezazi",
  title: "Full Stack Developer & Software Engineer",
  intro:
    "I build web and mobile applications with React, Next.js and Node.js, with a strong eye for detailed design and clean, maintainable code.",
  about: [
    "I'm a full stack developer and software engineer with a Master's degree in Software Engineering from USTHB. I'm passionate about web and mobile standards and always look for opportunities to improve my skills and learn from others.",
    "Today I work as a front-end developer at DadyCar, building healthcare, fleet and garage management products, and on weekends I teach full stack web development at BrainerX. I care about clear communication, attention to design detail, and the long-term value of code.",
  ],
  location: "Algiers / Medea, Algeria",
  facts: [
    { label: "Based in", value: "Algiers / Medea, Algeria" },
    { label: "Degree", value: "Master's in Software Engineering" },
    { label: "Languages", value: "Arabic, English, French" },
    { label: "Hackathons", value: "2nd place, Seba9 Hackathon" },
  ],
  skillGroups: [
    { title: "Frontend", items: skills.frontend },
    { title: "Mobile", items: skills.mobile },
    { title: "Backend", items: skills.backend },
    { title: "Databases & tools", items: skills.data },
    { title: "AI & vibe coding", items: skills.ai },
  ],
  experience: [
    {
      organization: "BrainerX",
      role: "Web Instructor",
      start: "2025-06",
      end: null,
      meta: "Weekends",
      summary: "Teaching full stack web development to students.",
      points: [
        "How the web works, from requests to rendering.",
        "Frontend: HTML, CSS, JavaScript, the DOM and React.",
        "Backend: Node.js, Express, MongoDB, authentication and authorization.",
      ],
    },
    {
      organization: "Cevital SPA",
      role: "Master's Graduation Project — Centralized Training Platform",
      start: "2025-02",
      end: "2025-05",
      points: [
        "Designed and developed a centralized training management platform for Cevital Group to streamline planning, tracking and evaluation across 26 subsidiaries.",
        "Worked with HR and technical teams to analyze requirements, propose the architecture and implement a scalable solution aligned with enterprise needs.",
        "Integrated decision-support features to improve training effectiveness and support strategic HR planning through data-driven insights.",
      ],
    },
    {
      organization: "DadyCar",
      role: "Front-end Developer",
      start: "2023-12",
      end: null,
      meta: "Part-time · Remote (France)",
      points: [
        "Built a healthcare platform for prenatal surgery: patients answer a guided questionnaire, an algorithm computes the result automatically, and the doctor sees it directly without asking again.",
        "Worked on the Fleet app, a driver companion with data-collection features for the company and tools for drivers such as car sharing and garage and service reservations.",
        "Worked on a garage management app that centralizes services, appointments, leave, payments, invoices, quotes, suppliers and vehicles.",
        "Contributed to the redesign of the company's main website.",
      ],
    },
    {
      organization: "Factory Degitale",
      role: "Front-end Developer",
      start: "2023-06",
      end: "2023-09",
      meta: "Full-time",
      points: [
        "Built two e-commerce admin dashboards for two different mobile applications.",
        "Grew quickly by working alongside many senior developers.",
      ],
    },
  ],
  community: [
    {
      organization: "GDG & WTM Algiers",
      role: "Dev Team Lead — IWD'23 Hackathon",
      start: "2023-02",
      end: "2023-03",
      points: [
        "Ran the development workflow of the IWD'23 website.",
        "Prepared the hackathon theme: “UTOPIA, Dare to Create a Perfect World”.",
        "Mentored participants in web development during the hackathon.",
      ],
    },
    {
      organization: "Google Developer Student Club USTHB",
      role: "Web Co-Lead",
      start: "2022-11",
      end: "2023-04",
      points: [
        "Responsible for everything related to web development in the club.",
        "Ran web development workshops.",
        "Built and supervised development projects.",
      ],
    },
    {
      organization: "Google Developer Group Algiers",
      role: "Member",
      start: "2022-01",
      end: "2024-10",
      points: [
        "Won GIP, the internal hackathon for new members.",
        "Development team lead, web development trainer and mentor.",
        "Built projects and helped organize events.",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "Focus Care",
      context: "DadyCar",
      kind: "Healthcare",
      description:
        "A guided questionnaire whose answers are scored automatically by an algorithm, so doctors see the result instantly at the appointment.",
    },
    {
      title: "DadyCar Fleet",
      context: "DadyCar",
      kind: "Mobility",
      description:
        "Everything drivers need day to day — car sharing, garage and service reservations — plus data collection for the company.",
    },
    {
      title: "Garage management app",
      context: "DadyCar",
      kind: "Business",
      description:
        "Centralizes services, appointments, leave, payments, invoices, quotes, suppliers and vehicles for car garages.",
    },
    {
      title: "Centralized training platform",
      context: "Cevital Group",
      kind: "Enterprise",
      description:
        "Plans, tracks and evaluates training across 26 subsidiaries, with decision support for strategic HR planning.",
    },
  ],
  personalProjects: [
    {
      title: "Dz Imposters",
      kind: "Full stack",
      description: "A platform for reporting and reviewing online customers who receive goods and don't return them.",
    },
    { title: "Learning management platform", kind: "Full stack", description: "A full stack platform for online courses and learners." },
    { title: "PFE management system", kind: "Full stack", description: "Manages graduation projects (PFE) at the university." },
    { title: "Airbnb clone", kind: "Full stack", description: "A full stack clone of the rental marketplace." },
    { title: "Facebook, Instagram & Discord clones", kind: "Full stack", description: "Full stack clones of three social platforms." },
    { title: "Deliveroo 2.0 clone", kind: "Mobile", description: "A mobile clone of the food delivery app." },
    { title: "Instagram mobile clone", kind: "Mobile", description: "A mobile clone of the photo sharing app." },
    { title: "Movies app", kind: "Mobile", description: "A mobile app for browsing movies." },
    { title: "Restaurant website & landing pages", kind: "Web", description: "A restaurant website and several landing pages." },
  ],
  education: [
    {
      degree: "Master's in Software Engineering",
      school: "University of Science and Technology Houari Boumediene (USTHB)",
      period: "2023 – 2025",
    },
    {
      degree: "Bachelor's (Licence) in Computer Science",
      school: "University of Science and Technology Houari Boumediene (USTHB)",
      period: "2020 – 2023",
      detail: "Grade: 13.09 / 20",
    },
    {
      degree: "Baccalaureate in Technical Mathematics",
      school: "Kemel Zemerline High School, Medea",
      period: "2020",
      detail: "Grade: 15.71 / 20",
    },
  ],
  achievements: [
    "2nd place — Seba9 Hackathon",
    "Winner — GIP, GDG Algiers internal hackathon",
    "Participant — DevFest Algiers 2022 Hackathon",
  ],
  languages: ["Arabic", "English", "French"],
};
