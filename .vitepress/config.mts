import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Identidad Digital Abitab",
  description: "Documentación de integración para nuestro SDK",
  srcDir: 'docs',
  head: [['link', { rel: 'icon', href: '/logo-favicon.png' }]],
  cleanUrls: true,
  markdown: {

  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-favicon.png',
    footer: {
      copyright: 'Copyright © 2025 Abitab S.A.',
      message: 'Identidad Digital Abitab es una herramienta desarrollada por ID Digital Abitab.'
    },
    nav: [
      { text: 'Documentación', link: '/first-steps' },
    ],
    sidebar: [
      {
        text: 'Primeros pasos',
        link: '/first-steps',
        items: [
          { text: 'Flujo de asociación', link: '/flows/asociation-flow' },
          { text: 'Flujo de autenticación', link: '/flows/authentication-flow' },
        ]
      },
      {
        text: 'Plataformas',
        items: [
          { text: 'Android', link: '/tech-stack/android' },
          // { text: 'iOS', link: '/flows/authentication-flow' },
          // { text: 'React Native', link: '/flows/authentication-flow' },
        ]
      },
    ],
    // TODO: Add link to library distribution site
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'Link de distribucion de Android' },
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'Link de distribucion de iOS' },
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'Link de distribucion de React Native' },
    ]
  }
})
