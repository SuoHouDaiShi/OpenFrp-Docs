module.exports = {
    title: 'OpenFrp Docs',
    description: '分享每一份技术。',
    plugins: [
    [
      // 不知道这是干嘛的, 但是它部署失败
      // '@vuepress/last-updated',
      // {
      //   transformer: (timestamp, lang) => {
      //     // 不要忘了安装 moment
      //     const moment = require('moment')
      //     moment.locale(lang)
      //     return moment(timestamp).fromNow()
      //   }
      // }
    ]
  ],
    themeConfig: {
        sidebar: {
            '/use/':[
                {
                    title: '使用教程',
                    path: '/use/',
                    sidebarDepth: 1,
                    collapsable: false,
                    children:[
                        ['','基本教程'],
                        ['desktop-launcher','桌面启动器'],
                        ['frpc','FRPC 使用教程'],
                        ['boot-on-startup','FRPC 自启动指南'],
                        ['proxy-protocol','反馈用户真实IP']
                    ]
                },
                {
                    title: '三方服务教程',
                    collapsable: false,
                    children:[
                        ['/use/other/minecraft-service','Minecraft 服务端帮助']
                    ],
                    initialOpenGroupIndex: -1
                }

            ],
            '/problems/':'auto',
            '/guides/':'auto'
        },

        docsRepo: 'ZGIT-Network/OpenFrp-Docs',
        docsDir: 'src',
        docsBranch: 'main',
        editLinks:true,
        editLinkText: '帮我们编辑该页面!',

        nav:[
            { text: '首页', link: '/' },
            { text: '常见问题', link: '/problems/' },
            { text: '使用教程', link: '/use/' },
            { text: '配置指南', link: '/guides/' }
        ],

        lastUpdated: '该文章最后更新于 ', // string | boolean
    }
}
