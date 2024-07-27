// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devServer: {
    port: 3001
  },
  nitro: {
    devProxy: {
      '/api/v2': {
        target: 'https://blog.renranz.cn',
        changeOrigin: true
      }
    }
  },
  modules: [
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
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
  site: {
    url: 'https://blog.renranz.cn'
  },
  sitemap: {
    sources: ['/api/sitemap']
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      },
      ripple: true
    }
  }
})
