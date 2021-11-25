module.exports = {
  title: "Evan's blog",
  description: '随手记录日常开发、学习中值得分享的内容。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }, // 根路径
      { text: '笔记', link: '/note/' },
      { text: '团队', link: '/team/' },
      { text: 'External', link: 'https://google.com' } // 外部链接
    ],
    sidebar: {
      '/note/': [
        {
          title: '笔记',
          path: '/note/',
          collapsable: false,
          // sidebarDepth:0,
          children: ['webpack学习笔记', 'tinyimg webpack插件开发笔记']
        }
      ],
      '/team/': [
        {
          title: '团队文档',
          collapsable: false,
          children: ['开发规范']
        }
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/docs/.vuepress/public/images'
      }
    }
  }
}
