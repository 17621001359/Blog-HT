// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  port: 1000,
  siteName: '桃子汽水\'s Blog',
  siteDescription: 'if（bool学习==false）bool落后=true；不断的学习，我们才能不断的前进。',
  titleTemplate: "%s - 桃子汽水",
  pathPrefix: "gridsome-blog-case",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./data/home/**/*.md",
        typeName: "HomeArticle",
        resolveAbsolutePaths: true,
      }
    }, {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./data/journal/**/*.md",
        typeName: "Journal",
        resolveAbsolutePaths: true,
      }
    }
  ],
  templates: {
    HomeArticle: [
      {
        path: '/article/:id',
        component: './src/templates/Article.vue'
      }
    ],
    Journal: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue'
      }
    ]
  }
}
