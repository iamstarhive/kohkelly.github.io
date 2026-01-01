
import React from 'react';
import { ExpertiseItem, ExperienceItem, ExperienceSection, Artwork } from './types';

export const ENTITY_NAME = "Kohlab Consulting";
export const PERSONAL_NAME = "Kelly Koh";

export const EXPERTISE: ExpertiseItem[] = [
  {
    title: 'Program Coordination & Lifecycle Management',
    description: 'Leading projects from conceptualization through to final evaluation. We ensure project lifecycles are managed with meticulous oversight and stakeholder alignment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Legal Analysis & Regulatory Compliance',
    description: 'Leveraging a legal background to navigate grant agreements, local regulations, and governance structures.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Strategic Research & Report Writing',
    description: 'Synthesizing complex data into high-stakes reports for donors and stakeholders.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Administrative Design & Operational Support',
    description: 'Building the systems and processes that allow programs to run autonomously and efficiently.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export const EXPERIENCE = [
  // Work experience first filtered on right column
  {
    period: "2021 – 2024",
    title: "Program Officer – SPr (Southeast Asia, India & Hong Kong)",
    detail: `Led a regional digital rights project across 10 countries, coordinating 30+ partners and donors.
Executed annual launch of 9–10 country reports per year, managing research design, stakeholder engagement, report drafting, and launches.
Country researcher for Freedom on the Net (Malaysia, 2021–2024).
Speaker at APrIGF, RightsCon, Asia-Pacific Conference on Internet Freedom, and DRAPAC23.
Delivered capacity-building workshops and appeared on EngageMedia's Pretty Good Podcast.

Key Responsibilities:
- Managed programs from planning to execution including proposals, budgets, reporting, compliance, and events.
- Coordinated with partners on digital rights, compliance, and administration.
- Oversaw donor relationships, budgets, and fund allocation.
- Developed training materials and conducted workshops.
- Handled operational matters including policy, HR, and financial processes.`
  },
  {
    period: "2016 – 2017",
    title: "Practising Lawyer – Malaysia",
    detail: `Represented clients in civil and contractual disputes, including RM2 million claim.
Appeared in Magistrate, Sessions, High Court, Court of Appeal, and Federal Court.
Managed multiple civil litigation cases: research, drafting, submissions, and client relations.`
  },

  // Education column: Middle Temple before Bristol
  {
    period: "Education",
    title: "Called to the Bar – Middle Temple, UK",
    detail: "2016"
  },
  {
    period: "Education",
    title: "University of Malaya – Master of Laws (LLM)",
    detail: "Graduated: 12/2023, Kuala Lumpur, Malaysia."
  },
  {
    period: "Education",
    title: "University of the West of England – Postgraduate Diploma, Bar Professional Training Studies",
    detail: "Graduated: 11/2016, Bristol, United Kingdom."
  },
  {
    period: "Education",
    title: "University of London – Bachelor of Laws (LLB)",
    detail: "Graduated: 08/2015, United Kingdom."
  },
];

export const EXPERIENCE_SECTIONS: ExperienceSection[] = [
  {
    category: "Program Management & Regional Coordination",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    role: "Program Officer | Sinar Project",
    period: "2021 – 2024",
    location: "Malaysia & Southeast Asia",
    subsections: [
      {
        title: "Regional Project Leadership",
        achievements: [
          "Orchestrated a 3-year digital rights initiative involving 30+ international partners, donors, and local stakeholders across 10 jurisdictions",
          "Managed full-cycle delivery including proposal development, budget oversight, and financial compliance",
          "Led end-to-end lifecycle of complex, cross-border social impact initiatives"
        ]
      },
      {
        title: "Research Architecture",
        achievements: [
          "Designed and executed the annual production cycle for a series of 10 country reports (2022–2023)",
          "Developed researcher guidelines and facilitated regional input gathering",
          "Managed technical drafting and coordinated global launch events"
        ]
      },
      {
        title: "Subject Matter Expertise",
        achievements: [
          "Served as Country Researcher for Malaysia for the Freedom on the Net report (2021–2024)",
          "Provided high-level legal and policy analysis on internet freedom",
          "Conducted comprehensive assessments of digital rights and online freedoms"
        ]
      },
      {
        title: "Capacity Building & Training",
        achievements: [
          "Designed and delivered technical workshops across the region in Southeast Asia",
          "Trained international partners and activists on data analysis and censorship monitoring",
          "Developed training materials on digital rights tools and methodologies"
        ]
      },
      {
        title: "Organizational Operations",
        achievements: [
          "Directed internal policy writing, HR management, and donor contracting",
          "Ensured organization met rigorous international compliance standards",
          "Managed cross-functional operational processes including budgets, reporting, and events"
        ]
      }
    ]
  },
  {
    category: "Community & Operations Management",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    role: "Community & Operations Manager | New Paradigm / Impact Collectief",
    period: "2025 – Present",
    location: "Netherlands",
    subsections: [
      {
        title: "Community Management & Member Relations",
        achievements: [
          "Managing a shared workspace and community hub for legal and policy professionals focused on impact-driven work",
          "Attending to member needs across a diverse community working on climate law, tech ethics, grassroots advocacy, and systems change",
          "Leading onboarding processes for new members joining the Impact Collectief community",
          "Fostering connections between impact-driven organizations, entrepreneurs, and NGOs"
        ]
      },
      {
        title: "Operations & Systems Development",
        achievements: [
          "Designing and implementing operational systems to professionalize workspace infrastructure",
          "Managing day-to-day office operations to ensure smooth functioning of the shared space",
          "Building sustainable frameworks for community operations and growth",
          "Establishing processes that support both immediate needs and long-term scalability"
        ]
      },
      {
        title: "Administrative & Financial Management",
        achievements: [
          "Overseeing administrative processes for the workspace and community operations",
          "Managing financial operations including budgeting, accounting, and financial reporting",
          "Ensuring compliance with regulatory requirements and proper documentation",
          "Maintaining accurate records and financial controls"
        ]
      },
      {
        title: "Vendor Relations & Event Coordination",
        achievements: [
          "Managing relationships with external service providers including cleaning services, internet providers, and printing services",
          "Organizing community events and activities to foster engagement and collaboration",
          "Negotiating contracts and service agreements with vendors",
          "Coordinating logistics for workspace operations and community programming"
        ]
      },
      {
        title: "Creative & Communications Support (New Paradigm)",
        achievements: [
          "Providing ad-hoc support to New Paradigm law firm on various projects",
          "Compiling and organizing legal documents with attention to detail",
          "Creating design work and optimizing document layouts for professional presentation",
          "Developing social media content for LinkedIn using Canva to enhance visibility on projects"
        ]
      }
    ]
  },
  {
    category: "Legal Practice & Advocacy",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    role: "Advocate & Solicitor | High Court of Malaya",
    period: "2016 – 2018",
    location: "Malaysia",
    subsections: [
      {
        title: "Litigation & Dispute Resolution",
        achievements: [
          "Successfully represented clients in high-stakes contractual disputes",
          "Managed a claim exceeding RM2 million in the first year of practice",
          "Applied rigorous legal analysis to diverse civil briefs"
        ]
      },
      {
        title: "Court Appearances",
        achievements: [
          "Appeared extensively across all levels of the Malaysian judiciary",
          "Conducted proceedings in Magistrates Court, Sessions Court, High Court, Court of Appeal, and Federal Court",
          "Handled civil procedure applications and substantive hearings"
        ]
      },
      {
        title: "Strategic Counsel",
        achievements: [
          "Managed multiple briefs under tight timelines with competing priorities",
          "Provided comprehensive legal opinions and drafted complex cause papers",
          "Navigated judicial reviews; contractual, land and family disputes; and estate matters"
        ]
      },
      {
        title: "Stakeholder Liaison",
        achievements: [
          "Acted as primary point of contact for clients, court officers, and opposing counsel",
          "Maintained professional integrity in high-pressure litigation environments",
          "Built strong working relationships across the legal profession"
        ]
      }
    ]
  },
  {
    category: "Speaking Engagements",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    role: "Regional & Global",
    period: "2022 – 2024",
    location: "International",
    subsections: [
      {
        title: "International Conferences",
        achievements: [
          "RightsCon (2022, 2023): Speaker on Digital Repression in Southeast Asia and Internet Censorship Monitoring",
          "Asia-Pacific Conference on Internet Freedom, Bangkok (2023): Presented on Legislative Developments affecting Internet Freedom",
          "APrIGF (2022): Panelist on Empowering New Voices in Internet Governance"
        ]
      },
      {
        title: "Media & Podcast Appearances",
        achievements: [
          "Featured guest on EngageMedia's 'Pretty Good Podcast' discussing the Internet Monitoring Action Project",
          "Provided expert commentary on digital rights and internet freedom issues",
          "Contributed to public discourse on technology policy and governance"
        ]
      }
    ]
  },
  {
    category: "Academic Foundation",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    role: "Legal Qualifications",
    period: "2015 – 2023",
    location: "UK & Malaysia",
    subsections: [
      {
        title: "Postgraduate Studies",
        achievements: [
          "Master of Laws (LLM) – University of Malaya, Malaysia (2023)",
          "Bar Professional Training Studies (PG Dip) – University of the West of England, UK (2016)",
          "Called to the Bar at the Honourable Society of the Middle Temple (2016)"
        ]
      },
      {
        title: "Undergraduate Education",
        achievements: [
          "Bachelor of Laws (LLB, Hons) – University of London (2015)",
        ]
      }
    ]
  }
];

export const METHODOLOGY = [
  { step: '01', title: 'Audit', detail: 'Diagnosing operational gaps and regulatory blindspots.' },
  { step: '02', title: 'Align', detail: 'Synchronizing project goals with global compliance standards.' },
  { step: '03', title: 'Architect', detail: 'Building custom management and reporting frameworks.' },
  { step: '04', title: 'Amplify', detail: 'Securing the legacy of impact through sustainable governance.' },
];

export const FREELANCER_BIO = () => (
  <>
    <p>
      Kelly Koh is the lead practitioner at Kohlab Consulting, supporting nonprofit
      and public-interest organizations through program coordination, operational
      support, and legal and policy research. Working in close collaboration with
      internal teams, Kelly helps organizations navigate complexity, strengthen
      execution, and meet compliance and reporting expectations.
    </p>

    <p>
      With a background spanning nonprofit operations, legal research, and analytical
      report writing, Kohlab Consulting combines hands-on support with disciplined
      methodology. The result is work that is practical, well-structured, and aligned
      with the realities of mission-driven organizations.
    </p>
  </>
);

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Root Memory',
    imagePath: '/Testrun/images/1-root-memory.jpg',
    license: 'CC BY-NC-SA 4.0',
    featured: true,
    year: '2025',
    medium: 'Acrylic',
    description: 'An exploration of memories and their connection to our inner self.',
  },
  {
    id: '2',
    title: 'View from the Window',
    imagePath: '/Testrun/images/2-view-from-the-window.jpg',
    license: 'CC BY-NC-SA 4.0',
    featured: true,
    year: '2025',
    medium: 'Acrylic',
    description: 'Perspective from within looking outward on a cloudy winter day.',
  },
  {
    id: '3',
    title: 'Ler Ler in Technicolour',
    imagePath: '/Testrun/images/3-ler-ler-in-technicolour.jpg',
    license: 'CC BY-NC-SA 4.0',
    featured: true,
    year: '2023',
    medium: 'Acrylic',
    description: 'A vibrant celebration of color and form with my dog, Ler Ler in it.',
  },
  {
    id: '4',
    title: 'Spirit Swarm',
    imagePath: '/Testrun/images/4-spirit-swarm.jpg',
    license: 'CC BY-NC-SA 4.0',
    featured: true,
    year: '2023',
    medium: 'Acrylic',
    description: 'Movement and energy captured in abstract forms. Partly inspired by Krobelus, a Dota 2 hero character and her summoning ability.',
  },
  {
    id: '5',
    title: 'Three in the Thicket',
    imagePath: '/Testrun/images/5-three-in-the-Thicket.jpg',
    license: 'CC BY-NC-SA 4.0',
    featured: true,
    year: '2025',
    medium: 'Acrylic',
    description: 'A woman, man and dog. Nature and mystery intertwined using negative space.',
  },
  {
    id: '6',
    title: 'Pines and Pillars',
    imagePath: '/Testrun/images/6-pines-and-Pillars.jpg',
    license: 'CC BY-NC-SA 4.0',
    featured: true,
    year: '2025',
    medium: 'Acrylic',
    description: 'The intersection of natural and constructed forms.',
  },
];
