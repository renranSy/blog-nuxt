// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devServer: {
    port: 3001
  },
  modules: [
    'nuxt-primevue',
    '@unocss/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@formkit/auto-animate'
  ],
  extends: ['nuxt-umami'],
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
    experimental: {
      search: { ignoredTags: [], filterQuery: {}, indexed: true }
    },
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
        'sql',
        'json',
        'shell',
        'cmd',
        'bash',
        'zsh',
        'ts',
        'tsx',
        'yaml',
        'yml',
        'xml'
      ]
    }
  },
  appConfig: {
    host: '81.68.86.65:3000',
    id: '1f1a69a1-746a-4665-9cbc-97441c0eea6b',
    autoTrack: true,
  }
})