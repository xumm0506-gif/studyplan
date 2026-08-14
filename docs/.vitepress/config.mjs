import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/studyplan/',
  title: 'Word Buddy',
  description: 'RAZ A-D 儿童英语复习手册',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    logo: '▦',
    siteTitle: 'Story Word Buddy',
    search: { provider: 'local' },
    nav: [
      { text: '首页', link: '/' },
      { text: '词库', link: '/vocabulary/' },
      { text: '复习', link: '/review/' },
      { text: '故事', link: '/stories/' },
      { text: '打印', link: '/print/retell' }
    ],
    sidebar: [
      {
        text: '准备与导入',
        items: [
          { text: '01 学习手册首页', link: '/' },
          { text: '02 词库总表', link: '/vocabulary/' }
        ]
      },
      {
        text: '主动复习',
        items: [
          { text: '03 语音回答复习', link: '/review/' },
          { text: '04 口语复述打印表', link: '/print/retell' }
        ]
      },
      {
        text: '听力故事',
        items: [
          { text: '05 故事目录', link: '/stories/' },
          { text: '06 A Nest in the Tree', link: '/stories/day-1' },
          { text: '07 The Arctic Animals', link: '/stories/day-2' },
          { text: '08 A Trip into Space', link: '/stories/day-3' }
        ]
      }
    ],
    outline: { label: '页面目录' },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
