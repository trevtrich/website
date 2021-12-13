module.exports = {
  siteMetadata: {
    title: 'Trevor Richardson',
    description: 'Thoughts on life & crafting software',
    url: 'https://trevorrichardson.me',
    author: 'richardson-trevor',
    twitter: 'trevtrich',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ],
      },
    },
  ],
}
