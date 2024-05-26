// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    'nuxt-primevue',
    '@unocss/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@formkit/auto-animate'
  ],
  plugins: [],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      path: '~/layouts/partial',
      pathPrefix: false
    }
  ],
  content: {
    highlight: {
      theme: 'github-light-default',
      preload: [
        'c',
        'c++',
        'java',
        'python',
        'go',
        'bash',
        'html',
        'css',
        'less',
        'scss',
        'javascript',
        'nginx',
        'yaml',
        'sql'
      ]
    },
    experimental: {
      clientDB: true
    }
  }
})