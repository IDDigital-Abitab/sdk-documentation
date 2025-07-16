// https://vitepress.dev/reference/site-config
export default {
  title: "Identidad Digital Abitab",
  description: "Documentación de integración para nuestro SDK",
  srcDir: "docs",
  head: [["link", { rel: "icon", href: "/logo-favicon.png" }]],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo-favicon.png",
    footer: {
      copyright: "Copyright © 2025 Abitab S.A.",
      message:
        "Identidad Digital Abitab es una herramienta desarrollada por ID Digital Abitab.",
    },
    nav: [{ text: "Documentación", link: "/primeros-pasos" }],
    sidebar: [
      {
        text: "Primeros pasos",
        link: "/primeros-pasos",
      },
      {
        text: "Plataformas",
        items: [
          { text: "Android", link: "/android" },
          { text: "iOS", link: "/ios" },
          { text: "React Native", link: "/react-native" },
        ],
      },
    ],
  },
};
