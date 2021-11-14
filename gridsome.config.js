module.exports = {
  siteName: 'Gridbox',
  siteDescription: 'Gridbox is a static site builder for Wordpress.',
  titleTemplate: '%s - Gridbox',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: (process.env.WORDPRESS_URL) + "/graphql",
        fieldName: 'WordPress',
        typeName: ''
      }
    },
    {
      use: 'gridsome-plugin-uikit'
    }
  ]
}
