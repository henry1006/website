import { About } from "@/types";
import { person } from "./person.config";

export const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Henry is a software engineer at Optum. During his free time, he is
        playing video games, traveling, and repairing electronics.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Optum",
        timeframe: "2020 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Monitor poor system performance, investigate and address root cause
            with minimal member impact.
          </>,
          <>
            Implemented JWT tokenization in myUHC app for background data
            syncing to improve NPS score.
          </>,
          <>
            Configured Dependabot, Policy Bot, and Bulldozer to proactively
            manage dependencies, and enforce security protocols, enhancing
            application security and development efficiency.
          </>,
          <>
            Designed and implemented proof of concepts (POCs) for automating
            certificates and secrets in backend systems, reducing manual toil
            for developers and enhancing security compliance.
          </>,
          <>
            Engaged with external teams to assess system capabilities, foster
            collaboration, and proactively address identified system issues,
            ensuring seamless integration and operational efficiency.
          </>,
          <>
            Plan and host events for early-career developers in the Boston
            office, fostering engagement with colleagues, facilitating peer
            learning and strengthening professional development.
          </>,
        ],
        images: [],
        technicals: [
          "AWS",
          "Rust",
          "Java",
          "React JS",
          "Spring Boot",
          "Azure",
          "Launch Darkly",
          "DataDog",
        ],
      },
      {
        company: "Braintree Public Schools",
        timeframe: "2016 - 2021",
        role: "IT Technician",
        achievements: [
          <>
            Developed Arduino system to automatically enroll Chromebooks into
            Google G-Suite with minimal staff intervention. Tested in 2019 on
            ~100 Chromebook enrollments.
          </>,
          <>
            Managed Windows PC, Google products, Apple electronics, and Epson
            projectors using SCCM, AD, Lightspeed Systems, or HelpDesk to
            support technologies that faculties use district wide.
          </>,
          <>
            Assisted in implementing Bring-Your-Own-Device (BYOD) plans at
            Braintree High School to increase access to technology using
            Cloudpath and support 1300+ connected student devices.
          </>,
        ],
        images: [],
        technicals: ["Arduino", "Helpdesk", "Troubleshoot", "Networks"],
      },
      {
        company: "University of Massachusetts Amherst",
        shortname: "UMass Amherst",
        timeframe: "2019 - 2021",
        role: "Undergraduate Course Assistant",
        achievements: [
          <>
            Graded students' homework and exams on a weekly basis in a ~250
            student core CS course.
          </>,
          <>
            Held office hours weekly to answer students' questions and concerns
            about CS concepts and projects.
          </>,
          <>
            Assisted in running a lab section weekly that consists of around 40
            students.
          </>,
        ],
        images: [],
        technicals: ["C/C++"],
      },
      {
        company: "iD Tech Camps",
        shortname: "iD Tech",
        timeframe: "2019",
        role: "Lead Instructor",
        achievements: [
          <>
            Taught Java fundamentals through Minecraft mods and data structures
            and algorithms via mini projects to an average of 5 campers ages
            10-17 weekly.
          </>,
          <>
            Assisted Camp Director in camp administrative duties, such as camp
            check-in/checkout, health and safety oversight, supporting 3 - 4
            instructors, and supervising 20 - 30 students daily.
          </>,
        ],
        images: [],
        technicals: ["Java"],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Massachusetts Amherst, Commonwealth Honors College",
        shortname: "UMass Amherst",
        description: <>BS in Computer Science with great distinction</>,
      },
      {
        name: "University of Massachusetts Amherst, Commonwealth Honors College",
        shortname: "UMass Amherst",
        description: <>BS in Mathematics with great distinction</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};
