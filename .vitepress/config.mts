import { defineConfig } from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid';

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Identidad Digital Abitab",
  description: "Documentación de integración para nuestro SDK",
  srcDir: 'docs',
  head: [['link', { rel: 'icon', href: '/logo-favicon.png' }]],
  cleanUrls: true,
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
    socialLinks: [
      // TODO: Publish this social links once the repo is public
      // { icon: 'github', link: 'https://github.com/IDDigital-Abitab/id-digital-android-sdk', ariaLabel: 'Link al codigo fuente' },
      // { icon: 'jitpack', link: 'https://jitpack.io/#IDDigital-Abitab/id-digital-android-sdk', ariaLabel: 'Link de distribución de Android' },
      // { icon: 'iOS', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'Link de distribución de iOS' },
      // { icon: 'React Native', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'Link de distribución de React Native' },
    ]
  }
})

