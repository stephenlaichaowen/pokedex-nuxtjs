
export default {
  mode: 'universal',
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  loading: { color: '#fff' },
  
  css: [
  ],  

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  components: true,

  plugins: [
  ],
  
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://pokeapi.co/api/v2',
    // baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'
  },
  
  build: {    
    extend (config, ctx) {
    }
  }
}
