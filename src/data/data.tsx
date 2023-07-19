import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/hero.webp';
import profilepic from '../images/profilepic.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import testimonialImage from '../images/hero.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {

  imageSrc: heroImage,
  name: `I'm Sergey Pigarin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently
        <strong className="text-stone-100"> finishing my undergraduate studies</strong>, coding a bots
        and video games.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time you can catch me training in <strong className="text-stone-100"> archery</strong>,
        <strong className="text-stone-100"> listening to music</strong> or exploring beautiful
        <strong className="text-stone-100"> Moscow</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an energetic and motivated professional who strives to achieve high results in my career. 
  I have solid experience in software development. I strive for constant development and learning, always open to new 
  challenges and ready to learn new technologies. My creative thinking and analytical skills allow me to find 
  innovative solutions and solve problems effectively. I work well in a team and show leadership qualities in all 
  projects that I deal with. My goal is to make a meaningful contribution to the achievement of the company's goals and 
  continue to grow professionally.`,
  aboutItems: [
    {label: 'Location', text: 'Stary Oskol', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'European / Russian', Icon: FlagIcon},
    {label: 'Interests', text: 'Painting, Archery, Music, AI/ML/DL', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Science and Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: '-', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'English',
        level: 6,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'Rest',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C/C++',
        level: 5,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
  {
    name: 'Game Engines',
    skills: [
      {
        name: 'Unreal Engine',
        level: 6,
      },
      {
        name: 'Unity 3D Engine',
        level: 4,
      },
      {
        name: 'Godot Engine',
        level: 5,
      },
    ],
  },
  {
    name: 'Desktop development',
    skills: [
      {
        name: 'Qt',
        level: 5,
      },
      {
        name: 'Tauri',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://google.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2009 - 2020',
    location: 'SOSH No. 14 MBU - Stary Oskol',
    title: 'Secondary Education',
    content: <p>XML, HTML5, CSS, JavaScript, Blender, Pascal, Python </p>,
  },
  {
    date: '2020 - 2024',
    location: 'The National University of Science and Technology MISIS',
    title: 'Software Engineer',
    content: <p>Microsoft Office, Linux, Apache, Webpack, Php, C/C++, C#, Qt </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 - Present',
    location: 'TiltBot - Discord API',
    title: 'CIO pet project',
    content: (
      <p>
        Django, Django Rest Framework, Celery, Uvicorn, React, TailwindCSS, TypeScript, PosgreSQL, Redis, Nextcord, Pillow, OpenAI, loguru, Docker, Jenkins
      </p>
    ),
  },
  {
    date: 'May 2021 - July 2021',
    location: 'Stariy Oskol - Government administration',
    title: 'Junior Data Engineer',
    content: (
      <p>
        Python, Pandas, BeautifulSoup4, Jupyter Notebook, SQL
      </p>
    ),
  },
  {
    date: 'April 2023 - Present',
    location: '3D SnakeGame',
    title: 'CIO pet project',
    content: (
        <p>
          Unreal Engine, Blender, BluePrints, C++
        </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: heroImage,
  testimonials: [
    {
      name: 'Naikrass',
      text: 'For a very long time I was looking for a person who could, with my help, quickly, professionally and the necessary recommendations. I needed to make a fun bot for my Discord server. The task was excellent! Thank you for your response and responsiveness! I am very glad that I was treated to you!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'zio0@bk.ru',
      href: 'mailto:zio0@bk.ru',
    },
    {
      type: ContactType.Location,
      text: 'Stary Oskol, Russia',
      href: 'https://goo.gl/maps/wzut5rbxx3ChAH7J6',
    },
    {
      type: ContactType.Instagram,
      text: '@t1lt_gxd',
      href: 'https://www.instagram.com/t1lt_gxd/',
    },
    {
      type: ContactType.Github,
      text: 'tiIt-dev',
      href: 'https://github.com/tiIt-dev',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tiIt-dev'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/14553807/t1ltxz-gxd'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sergey-pigarin-3a4930283/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/t1lt_gxd/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/t1lt_gxd'},
];
