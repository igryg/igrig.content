// change it to actual site URL
const siteUrl = 'https://igrig.netlify.app'; // No trailing slash!

module.exports = {
  /* Meta */
  siteUrl,

  /* Disable Robots */
  noRobots: true,

  /**
   * name of content folder
   */
  contentDir: 'igrig.content',

  /**
   * Schema org
   *
   * folder: /static/assets
   *  */
  siteBusinessPhoto: [
    `${siteUrl}/assets/images/organization/1x1/business-photo.jpg`,
    `${siteUrl}/assets/images/organization/4x3/business-photo.jpg`,
    `${siteUrl}/assets/images/organization/16x9/business-photo.jpg`,
  ],
  siteLogo: `${siteUrl}/assets/images/logo.png`,

  /**
   * Open Graph Image
   *
   * meta property="og:image
   * one image per locale
   *
   * Sample file name: banner-ru.jpg
   *
   * folder: /static/assets/images
   * */
  ogImage: {
    src: `${siteUrl}/assets/images/og/banner-`,
    width: 1200,
    height: 630,
  },

  /**
   * Twitter Image
   *
   * meta name="twitter:image
   * one image per locale
   *
   * Sample file name: banner-ru.jpg
   *
   * folder: /static/assets/images
   *  */
  twitterImage: {
    src: `${siteUrl}/assets/images/twitter/2x1/banner-`,
    width: 600,
    height: 300,
  },

  /**
   * In order to use Facebook Insights you must add the app ID to your page.
   * Insights lets you view analytics for traffic to your site from Facebook.
   *
   * meta property="fb:app_id
   */
  fbAppID: '215275900280631',

  /**
   * Twitter URL
   *
   * meta name="twitter:site"
   *  */
  twitterSite: '',

  /**
   * Twitter Id
   *
   * meta name="twitter:creator"
   *  */
  twitterCreator: '',

  googleAnalyticsID: '',

  /**
   * webmanifest
   *  */
  // meta name="theme-color"
  themeColor: '#3498DB',
  backgroundColor: '#2e3246',

  postDirs: {
    'photo-serie': { folder: 'photo-series/posts' },
    'photo-project': { folder: 'photo-projects/posts' },
    blog: { folder: 'blog/posts' },
  },

  pageDirs: {
    page: { folder: 'pages' },
    photoSeriePage: { folder: 'photo-series/pages' },
    photoProjectPage: { folder: 'photo-projects/pages' },
    blogPage: { folder: 'blog/pages' },
  },

  cardsPerPage: 6,

  templatesDir: '/templates/',

  readMore: 'post.read',

  noBreadcrumbs: true,
};
