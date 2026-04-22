export interface CV {
  name: string;
  title: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  contact: Contact;
  work: Work[];
  education: Education[];
  skills: string[];
}

export interface Contact {
  email: string;
  tel: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
}

export interface Work {
  company: string;
  title: string;
  start: string;
  end: string | null;
  achievements?: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string | null;
}

export const CV_DATA: CV = {
  name: "Elena Makueva",
  title: "HR Specialist / Recruitment Manager",
  location: "St. Petersburg, Russia",
  locationLink: "https://www.google.com/maps/place/Saint+Petersburg",
  about: "Tech recruitment & executive search",
  summary: `Dynamic HR Professional with 10+ years of experience in full-cycle
      recruitment, talent mapping, and employee adaptation (IT, Real Estate,
      Hospitality). Proven track record of closing Middle+/Senior technical and
      managerial roles using advanced sourcing techniques (X-Ray, Boolean) and
      the "Who" methodology. Adept at navigating international employment and
      cross-border relocation (Cyprus). Adaptability: While possessing
      comprehensive HR experience, I am highly flexible, have no ego about
      titles, and am fully prepared to transition into Junior or HR Assistant
      roles. Dedicated to quickly learning team workflows and building long-term
      relationships to drive business growth. Open to remote, hybrid, or office
      formats.`,
  contact: {
    email: "lendosinaaa@mail.ru",
    tel: "+79603485547",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/elena-makueva-ba66a7269",
      },
    ],
  },
  work: [
    {
      company: "Proptech solutions (Digital real estate services)",
      title: "HR Recruiter",
      start: "Oct 2024",
      end: "Present",
      achievements: [
        `Managed end-to-end IT recruitment using the "Who" methodology and active cold searches across hh.ru, LinkedIn, Habr, Getmatch, and X-Ray.`,
        "Directly interacted with C-suite stakeholders, managing talent mapping and maintaining vacancy pages via Notion.",
        "Conducted A/B tests on outreach emails, significantly increasing Candidate Response Rates.",
        "Evaluated hard and soft skills, negotiated offers, and managed preboarding/onboarding processes.",
        "Key Placements: QA (Web/Mobile), Frontend Devs (PHP/React), B2B SaaS Sales, DevOps, 1C Developers, InfoSec Specialists, and Product Managers.",
        "Achievements: Promoted to Lead Recruiter within 6 months. Boosted company hiring metrics by 50% (speed, quality) and actively assisted in 360-degree employee evaluations.",
      ],
    },
    {
      company: "VERTICAL WE&I (Aparthotel Network)",
      title: "Recruitment Manager",
      start: "Oct 2024",
      end: "Present",
      achievements: [
        "Oversaw full-cycle recruitment for a 360-room capacity hotel, managing up to 20 simultaneous vacancies.",
        "Conducted headhunting, resume screening, and multi-stage interviews.",
        "Developed and integrated a motivation and adaptation system for line staff, reducing turnover.",
        "Partnered with universities in St. Petersburg for internship programs and entry-level hiring.",
        "Achievements: Consistently closed 10+ vacancies monthly without missing deadlines. Recognized as the most promising junior specialist of the year.",
      ],
    },
    {
      company: "Prismvisas.cy (Cyprus, Nicosia)",
      title: "HR Manager",
      start: "Dec 2023",
      end: "Sep 2024",
      achievements: [
        "Sourced and recruited personnel for 4 international offices (Dubai, Hong Kong, Cyprus, Switzerland).",
        "Facilitated candidate employment according to Cyprus legislation, managing visa applications, flights, and immigration board document preparation for candidates and their families.",
        "Organized Welcome Days and Family Days for employees in Cyprus.",
        "Key Placements: UI/UX, Web Dev, QA Manual, Frontend, SEO Specialist, Digital Marketer.",
      ],
    },
    {
      company: "Maternity Leave / Child Care",
      title: "",
      start: "Oct 2020",
      end: "Dec 2023",
      achievements: [],
    },
    {
      company: `OOO "Novy Vek"`,
      title: "HR Manager",
      start: "May 2019",
      end: "Oct 2020",
      achievements: [
        "Recruited candidates remotely and regionally (RF, Ukraine, Belarus).",
        "Organized adaptation events, developed corporate culture, and conducted internal webinars.",
        "Analyzed business processes and drafted internal regulations and normative acts.",
      ],
    },
    {
      company: `OOO "MIR Nedvizhimosti"`,
      title: "HR Specialist",
      start: "Oct 2018",
      end: "Apr 2019",
      achievements: [
        "Handled headhunting and full-cycle recruitment within the real estate sector.",
        "Conducted 5–11 interviews daily; resolved staff conflicts and guided employee adaptation.",
      ],
    },
    {
      company: `Various Companies (Inbrief, Azhiotazh, Coral Strand Hotel, Union
          Tobacco)`,
      title: "Early Career: Sales & Management",
      start: "2015",
      end: "2018",
      achievements: [
        "Gained foundational experience in team supervision, client relations, B2B sales, and international staff management across FMCG, advertising, and hospitality sectors.",
      ],
    },
  ],
  education: [
    {
      school: "Yandex Praktikum",
      degree: "Design, UI/UX Designer",
      start: "2022",
      end: "2022",
    },
    {
      school:
        "Saratov State University of Genetics, Biotechnology and Engineering",
      degree: "Faculty of Management and Agribusiness, Manager",
      start: "2009",
      end: "2014",
    },
  ],
  skills: [
    "IT Recruitment",
    "Agile HR / Scrum / Kanban",
    "Sourcing & Headhunting",
    "Talent Mapping",
    "X-Ray / Boolean Search",
    "Employee Adaptation",
    "Onboarding",
    "Corporate Culture",
    "Miro",
    "Figma",
    "Bitrix / Talantix",
  ],
};
