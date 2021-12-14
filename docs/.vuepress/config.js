module.exports = {
  title: "Evan's blog",
  description: '随手记录日常开发、学习中值得分享的内容。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }, // 根路径
      { text: '笔记', link: '/note/' },
      { text: '团队', link: '/team/' },
      { text: '每日一卷', link: '/daily/' },
      { text: 'Github', link: 'https://github.com/evansun1995/' } // 外部链接
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
      ],
      '/daily/': [
        {
          title: '简介',
          path: '/daily/'
        },
        {
          title: 'HTTP',
          collapsable: false,
          children: ['http/http与https', 'http/从输入url到页面加载完成发生了什么', 'http/前端缓存', 'http/前端安全性问题']
        },
        {
          title: 'JS',
          collapsable: false,
          children: []
        },
        {
          title: 'VUE',
          collapsable: false,
          children: []
        },
        {
          title: 'REACT',
          collapsable: false,
          children: []
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
