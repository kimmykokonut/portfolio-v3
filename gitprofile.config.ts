// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'kimmykokonut',
  },
  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, 
        exclude: {
          forks: false, 
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        projects: [
          'kimmykokonut/Garden-guardian', 'kimmykokonut/Park-Api',
          'kimmykokonut/myco-matrix-api',
          'kimmykokonut/Pierre.Solution',
          'kimmykokonut/sound-check',
          'kimmykokonut/word-puzzle',
          'kimmykokonut/inventory-tracker-cra-redux',
          'kimmykokonut/HairSalon.Solution',
          'kimmykokonut/cooking-compendium'
        ],
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Garden Guardian',
          description:
            'A garden tracker rebuilt with Typescript, React, PostgreSQL, C# ASP.NET WebApi',
          imageUrl:
            'https://garden-client.onrender.com/assets/bg--gtvbhDK.jpg',
          link: 'https://garden-client.onrender.com/',
        },
        {
          title: 'Sound  Check',
          description:
            'An application where a user can sign in, find and save concerts by location and post comments to a forum',
          imageUrl:
            'https://raw.githubusercontent.com/kimmykokonut/sound-check/main/src/assets/page.png',
          link: 'https://sound-check.netlify.app/',
        }
      ],
    },
    
  },
  seo: {
    title: 'Portfolio of Kim Robinson',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kimmykokonut',
    mastodon: '',
    researchGate: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'kimmykokonut@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Typescript',
    'React.js',
    'Node.js',
    'Redux',
    'MySQL',
    'PostgreSQL',
    'Firestore NoSql',
    'Git',
    'C#',
    'ASP.NET',
    'Webpack',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind',
    'Material UI',
    'TDD: Jest, MSTest',
    'Web API',
    'Agile: Scrum'
  ],
  experiences: [
    {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Web and Mobile Development',
      body: '760 classroom hours, 120 capstone hours, 150 internship hours',
      year: 'March 2024',
      link: 'https://www.epicodus.com/',
    },
  ],
  educations: [
    {
      institution: 'Epicodus',
      degree: 'Certificate of Web and Mobile Development',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'University of Connecticut',
      degree: 'Bachelor Science',
      year: '2023'
    },
  ],
  publications: [
    {
      //title: 'About Me',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com'
      description:
        'Hailing from New England with strong opinions about pizza and bagels, currently rooted in the Pacific NW.  My science background is rounded with a joy of baking, travel, and time in the nearby National forests.  I most recently completed the Epicodus full-stack programming bootcamp, honing my technical and collaborative skills.  I bring a unique perspective to the tech world with my adaptable and problem-solving nature.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'fantasy',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;