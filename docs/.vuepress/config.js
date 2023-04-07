import { defaultTheme } from 'vuepress'

export default {
    base: '/intelligent-city-document/',
    title: '智慧城市',
    description: '智慧城市官方文档',
    theme: defaultTheme({
        logo: '/logo.png',
        navbar: [
            { text: '首页', link: '/' },
            { text: '简介', link: '/introduce' },
            { text: '系统功能', link: '/functions' },
            { text: '技术架构', link: '/technicalArchitecture' },
        ],
    }),
}
