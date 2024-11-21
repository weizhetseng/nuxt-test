// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ['@/assets/style/all.scss'],
  modules: ['@vee-validate/nuxt'],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VError',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Freyja | 高雄頂級旅館 - 提供奢華住宿體驗',
      meta: [
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          'http-equiv': 'X-Content-Type-Options',
          content: 'nosniff',
        },
        {
          name: 'author',
          content: 'Freyja 旅館',
        },
        {
          name: 'keywords',
          content: 'Freyja,Freyja 訂房,高雄旅遊,訂房,住宿,住宿預訂,四人房,雙人房,景觀房',
        },
        {
          name: 'description',
          content:
            'Freyja 旅館位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          property: 'fb:app_id',
          content: '12345678',
        },
        {
          property: 'og:locale',
          content: 'zh-TW',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://freyja.travel.com.tw',
        },
        {
          property: 'og:title',
          content: 'Freyja | 高雄頂級旅館 - 提供奢華住宿體驗',
        },
        {
          property: 'og:image',
          content: 'https://freyja.travel.com.tw/images/og-image.jpg',
        },
        {
          property: 'og:description',
          content:
            'Freyja 旅館位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'canonical',
          href: 'https://freyja.travel.com.tw',
        },
      ],
    },
  },
})
