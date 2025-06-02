// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "coming soon",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "A growing collection of my go-to resources and papers I’ve enjoyed reading.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-selected-to-attend-the-amazon-ml-summer-school-to-learn-fundamental-concepts-and-connect-them-with-practical-applications-from-industry-experts",
          title: 'Selected to attend the Amazon ML Summer School to learn fundamental concepts and...',
          description: "",
          section: "News",},{id: "news-received-the-summer-of-reproducibility-fellowship-and-started-working-as-a-research-fellow-under-prof-fraida-fund-at-nyu-on-data-leakage-in-ml-applications",
          title: 'Received the Summer of Reproducibility Fellowship and started working as a research fellow...',
          description: "",
          section: "News",},{id: "news-began-working-as-a-research-intern-under-prof-sandip-mondal-at-iit-bombay-focusing-on-time-series-prediction-and-forecasting",
          title: 'Began working as a research intern under Prof. Sandip Mondal at IIT Bombay,...',
          description: "",
          section: "News",},{id: "news-started-working-as-a-research-intern-under-dr-amit-sheth-at-ai-institute-uofsc",
          title: 'Started working as a research intern under Dr. Amit Sheth at AI Institute@UofSC...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
