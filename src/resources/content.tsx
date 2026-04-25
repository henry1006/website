import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Henry",
  lastName: "Zhang",
  name: `Henry Zhang`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "cheunghenry70@hotmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/henry1006",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/henry1006/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Website`,
  description: `${person.name}'s Website`,
  headline: <>Welcome!</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Henry, a software engineer at <Text as="span" size="xl" weight="strong">Optum</Text>.
</>
  ),
};

const about: About = {
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
      <>Henry is a software engineer at Optum. During his free time, he is playing video games, traveling, and repairing electronics.</>
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
          <>Monitor poor system performance, investigate and address root cause with minimal member impact.</>,
          <>Implemented JWT tokenization in myUHC app for background data syncing to improve NPS score.</>,
          <>Configured Dependabot, Policy Bot, and Bulldozer to proactively manage dependencies, and enforce security protocols, enhancing application security and development efficiency.</>,
          <>Designed and implemented proof of concepts (POCs) for automating certificates and secrets in backend systems, reducing manual toil for developers and enhancing security compliance.</>,
          <>Engaged with external teams to assess system capabilities, foster collaboration, and proactively address identified system issues, ensuring seamless integration and operational efficiency.</>,
          <>Plan and host events for early-career developers in the Boston office, fostering engagement with colleagues, facilitating peer learning and strengthening professional development.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
        technicals: ["AWS", "Rust", "Java", "React JS", "Spring Boot", "Azure", "Launch Darkly", "DataDog"],
      },
      {
        company: "Braintree Public Schools",
        timeframe: "2016 - 2021",
        role: "IT Technician",
        achievements: [
          <>Developed Arduino system to automatically enroll Chromebooks into Google G-Suite with minimal staff intervention. Tested in 2019 on ~100 Chromebook enrollments.</>,
          <>Managed Windows PC, Google products, Apple electronics, and Epson projectors using SCCM, AD, Lightspeed Systems, or HelpDesk to support technologies that faculties use district wide.</>,
          <>Assisted in implementing Bring-Your-Own-Device (BYOD) plans at Braintree High School to increase access to technology using Cloudpath and support 1300+ connected student devices.</>,
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
          <>Graded students' homework and exams on a weekly basis in a ~250 student core CS course.</>,
          <>Held office hours weekly to answer students' questions and concerns about CS concepts and projects.</>,
          <>Assisted in running a lab section weekly that consists of around 40 students.</>,
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
          <>Taught Java fundamentals through Minecraft mods and data structures and algorithms via mini projects to an average of 5 campers ages 10-17 weekly.</>,
          <>Assisted Camp Director in camp administrative duties, such as camp check-in/checkout, health and safety oversight, supporting 3 - 4 instructors, and supervising 20 - 30 students daily.</>,
        ],
        images: [],
        technicals: ["Java"],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
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
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
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
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
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
        // optional: leave the array empty if you don't want to display images
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

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
