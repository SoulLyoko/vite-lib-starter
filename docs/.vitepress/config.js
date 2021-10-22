module.exports = {
  base: "/vite-lib-starter",
  lang: "zh-CN",
  title: "vite-lib-starter",
  description: "vite-lib-starter",
  themeConfig: {
    repo: "SoulLyoko/vite-lib-starter",
    nav: [],
    sidebar: {
      "/": [
        { text: "更新日志", link: "/CHANGELOG" },
        { text: "开始", link: "/" },
        {
          text: "示例",
          children: [{ text: "demo", link: "/demo/demo" }]
        }
      ]
    }
  }
};
