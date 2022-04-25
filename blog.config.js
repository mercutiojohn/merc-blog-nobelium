const BLOG = {
    title: 'MercBlog',
    author: 'Mercutio John',
    email: 'mercutio_john@foxmail.com',
    link: 'https://mercblog.vercel.app',
    description: 'Mercutio的博客',
    lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
    appearance: 'auto', // ['light', 'dark', 'auto'],
    font: 'sans-serif', // ['sans-serif', 'serif']
    lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
    darkBackground: '#18181B', // use hex value, don't forget '#'
    path: '', // leave this empty unless you want to deploy Nobelium in a folder
    since: 2019, // If leave this empty, current year will be used.
    postsPerPage: 7,
    sortByDate: true,
    showAbout: true,
    showArchive: true,
    autoCollapsedNavBar: false, // The automatically collapsed navigation bar
    ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
    socialLink: 'https://mercutio.club',
    mainPage: 'https://mercutio.club',
    seo: {
        keywords: ['Blog', 'Website', 'Notion', '博客', 'Mercutio', 'Python', 'Java', 'Vue'],
        googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
    },
    notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
    notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
    analytics: {
        provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
        ackeeConfig: {
            tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
            dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
            domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
        },
        gaConfig: {
            measurementId: 'G-44SCYY00E5' // e.g: G-XXXXXXXXXX
        }
    },
    comment: {
        // support provider: gitalk, utterances, cusdis
        provider: 'gitalk', // leave it empty if you don't need any comment plugin
        gitalkConfig: {
            repo: 'mercblog-comments', // The repository of store comments
            owner: 'mercutiojohn',
            admin: ['mercutiojohn'],
            clientID: '5ea89b56d4798e1d472d',
            clientSecret: '6ea23c80ec0e7dea1b6e6834e50890cd729856bf',
            distractionFreeMode: false
        },
        utterancesConfig: {
            repo: ''
        },
        cusdisConfig: {
            appId: '', // data-app-id
            host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
            scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
        }
    },
    isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG