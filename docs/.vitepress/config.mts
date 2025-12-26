import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的技术文档书",
  description: "个人技术学习笔记和分享",
  base: '/my-book/',
  lang: 'zh-CN',
  lastUpdated: true,
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '学习指南', link: '/guide/' },
      { text: '实战案例', link: '/examples/' },
      { 
        text: '更多', 
        items: [
          { text: 'GitHub', link: 'https://github.com/WindMajor/my-book' },
          { text: '关于作者', link: '/about' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '环境配置', link: '/guide/setup' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '代码示例',
          items: [
            { text: 'Markdown 示例', link: '/examples/markdown' },
            { text: 'API 示例', link: '/examples/api' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WindMajor/my-book' }
    ],
    
    editLink: {
      pattern: 'https://github.com/WindMajor/my-book/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    lastUpdatedText: '最后更新',
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})