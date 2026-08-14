import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/studyplan/',
  title: 'Word Buddy',
  description: 'RAZ A-D 儿童英语复习站',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    logo: '🌈',
    search: { provider: 'local' },
    nav: [
      { text: '首页', link: '/' },
      { text: '词库', link: '/vocabulary/' },
      { text: '每日复习', link: '/review/' },
      { text: '听力故事', link: '/stories/' },
      { text: '打印资料', link: '/print/retell' }
    ],
    sidebar: {
      '/vocabulary/': [{ text: '词库总表', link: '/vocabulary/' }],
      '/review/': [{ text: '每日复习', link: '/review/' }],
      '/stories/': [
        { text: '听力故事首页', link: '/stories/' },
        { text: 'Day 1 树上的鸟巢', link: '/stories/day-1' },
        { text: 'Day 2 北极动物', link: '/stories/day-2' },
        { text: 'Day 3 太空旅行', link: '/stories/day-3' }
      ],
      '/print/': [{ text: '口语复述对照表', link: '/print/retell' }]
    }
  }
})
