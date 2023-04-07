import { defaultTheme } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default {
    base: '/intelligent-city-document/',
    title: '智慧城市',
    description: '智慧城市官方文档',
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新于',
    },
    theme: defaultTheme({
        logo: '/logo.png',
        navbar: [
            { text: '首页', link: '/' },
            { text: '简介', link: '/introduce' },
            { text: '系统功能', link: '/functions' },
            { text: '技术架构', link: '/technicalArchitecture' },
        ],
    }),
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        mediumZoomPlugin({
        }),
    ],
}
