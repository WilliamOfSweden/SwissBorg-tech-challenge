import { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    ogDescription:
      'Deep-dive into the statistics of CHSB and understand the mechanics of the full SwissBorg ecosystem.',
    ogImageUrl: 'https://sbtc.netlify.app/banner.jpg',
    ogTitle: 'CHSB token live performance and metrics | SwissBorg',
    ogType: 'website',
    siteDescription:
      'Deep-dive into the statistics of CHSB and understand the mechanics of the full SwissBorg ecosystem.',
    siteTitle: 'CHSB token live performance and metrics | SwissBorg',
    siteUrl: 'https://sbtc.netlify.app',
    twitterCard: 'summary_large_image',
    twitterCreator: '@SwissBorg',
    twitterTitle: 'CHSB token live performance and metrics | SwissBorg',
    twitterDescription:
      'Deep-dive into the statistics of CHSB and understand the mechanics of the full SwissBorg ecosystem.',
    navLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}

export default gatsbyConfig
