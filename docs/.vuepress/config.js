module.exports = {
  theme: "antdocs-pro",
  title: "Tulip-scroll",
  description: "A lightweight scroll for Vue project.",
  base: process.env.NODE_ENV === "production" ? "/scroll-docs/" : "/",
  head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最后更新时间",
    repo: "https://github.com/artiely/tulip-scroll",
    editLinks: true
  },
  plugins: ["copy-code"],
  markdown: {
    lineNumbers: true
  }
};
