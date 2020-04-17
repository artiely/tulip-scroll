module.exports = {
  theme: "antdocs",
  title: "Tulip-scroll",
  description: "A lightweight scroll for Vue project.",
  base: process.env.NODE_ENV === "production" ? "/scroll-docs/" : "/",
  // head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "",
    editLinks: false
  },
  plugins: ["copy-code"],
  markdown: {
    lineNumbers: true
  }
};
