module.exports = {
  siteMetadata: {
    name: 'Design Prototype Consult LLC',
    basepath: 'https://www.dpcservices.co/',
    siteUrl:'https://www.dpcservices.co/',
    description: 'DPC specializes in creating tailor-made products and solutions for our clients. Whether you have a concept for a consumer product or need a custom device made for your industry, we are here to help.',
    keywords: ['gatsby', 'gatsbyjs', 'gatsby starter', 'github'],
    type: 'website',
    image: 'https://www.dpcservices.co/ok.png',
  },
  plugins: [
    {
      resolve: `@prismicio/gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `dpcservices`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:300,400,600,700`, `Mulish\:300,400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/ok.png', // This path is relative to the root of the site
      },
    },

    // The following are all optional plugins that you may find useful.
    // If you choose not to use them, consider removing them from your package.json!

    // This plugin enables Progressive Web App + Offline functionality
    // https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-179241537-1',
        head: false,
        anonymize: false,
        respectDNT: false,
      },
    },

    // (optional) Enable the following for Google tag manager
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KRHH7MS',
        defaultDataLayer: { platform: "gatsby" },
      },
    },

    // (optional) Enable the following for generation of an XML sitemap
    // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/
    'gatsby-plugin-advanced-sitemap',
  ],
};
