import { defaultTheme } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    base: '/intelligent-city-document/',
    title: '智慧城市',
    description: '智慧城市官方文档',
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10
    },
    theme: defaultTheme({
        logo: '/logo.png',
        colorModeSwitch: true,
        lastUpdatedText: '最后更新于',
        contributorsText: '贡献值',
        sidebar: 'auto',
        navbar: [
            { text: '首页', link: '/' },
            { text: '简介', link: '/introduce' },
            { text: '系统功能', children: ['/functions/admin/','/functions/user/','/functions/business/'] },
            { text: '技术架构', link: '/technicalArchitecture' },
        ],
    }),
    plugins: [
        searchPlugin({
            // 配置项
        }),
        backToTopPlugin(),
        nprogressPlugin(),
        mediumZoomPlugin({
        }),
    ],
}
