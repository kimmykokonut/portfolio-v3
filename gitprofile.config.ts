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
        limit: 12, 
        exclude: {
          forks: false, 
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        projects: [
          'kimmykokonut/beyondtipping',
          'kimmykokonut/dumpling-client',
          'kimmykokonut/dumpling-api',
          'kimmykokonut/Garden-guardian', 'kimmykokonut/Park-Api',
          'kimmykokonut/my-portfolio',
          'kimmykokonut/myco-matrix-api',
          'kimmykokonut/sound-check',
          'kimmykokonut/inventory-tracker-cra-redux',
          'kimmykokonut/cooking-compendium', 'kimmykokonut/Pierre.Solution', 'kimmykokonut/word-puzzle'
        ],
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Myco Matrix',
          description:
            'My capstone project to streamline and automate the field trip registration and lottery process for the Mycological Society.  A user can sign in, register for field trips, connect with other members and access resources.  The individual trip pages utilizes OpenWeatherApi for weather forecast and Leaflet.js for map visualization.  Built with Python, Django, Typescript and React',
          imageUrl:
            'https://www.wildmushrooms.org/wp-content/uploads/2016/06/OMS-logo.png',
          link: 'https://github.com/kimmykokonut/Capstone',
        },
        {
          title: 'Beyond Tipping',
          description:
            'Find Portland restaurants that have left the tipping model. A team project built in 4 days with Typescript, React, Python, Flask and SQLite',
          imageUrl:
            'https://raw.githubusercontent.com/henry-oberholtzer/beyondtipping/dev/src/assets/img/home.png',
          link: 'https://github.com/kimmykokonut/beyondtipping',
        },
        {
          title: 'Dumpling Truck',
          description:
            'An application about dumplings built to learn Python, Django and PostgreSQL. React front end is in progress.',
          imageUrl:
            'https://raw.githubusercontent.com/kimmykokonut/dumpling-client/main/src/assets/images/signin.png',
          link: 'https://dumpling-atlas.netlify.app/',
        },
        {
          title: 'Garden Guardian',
          description:
            'An application where a user can create and organize their garden data by grids and track yields over time.  Built with Typescript, React, PostgreSQL and C# ASP.NET WebApi',
          imageUrl:
            'https://garden-client.onrender.com/assets/bg--gtvbhDK.jpg',
          link: 'https://garden-client.onrender.com/',
        },
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
    email: '',
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
    'Python',
    'Django',
    'Flask',
    'Webpack',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind CSS',
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
      body: '1000 classroom hours, 120 capstone hours, 150 internship hours',
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
      degree: 'B.S. Natural Resources Management and Engineering, minor: Spanish',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: 'Amateur mycologist and full-stack software developer',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com'
      description:
        'Hailing from New England with strong opinions about pizza and bagels, currently rooted in the Pacific NW. A Portland based full-stack software engineer, blending background of natural sciences and the culinary world into a unique recipe for problem-solving. With a dash of creativity from the kitchen and a sprinkle of analytical thinking from the sciences, I cook up innovative solutions in the tech space. In my downtime, you\'ll find me exploring the great outdoors or experimenting with new recipes.  I most recently completed Epicodus\' full-stack programming bootcamp, honing my technical and collaborative skills.',
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
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
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

  //Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;