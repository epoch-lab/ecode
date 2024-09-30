import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";

import { devDependencies } from "../package.json";

export default defineConfig({
  title: "ECODE",
  // description: "BLOG！",
  lang: "zh-CN",
  ignoreDeadLinks: true, // 防止因死链而失败

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-brand-leetcode%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M12%2013h7.5%22%20/%3E%3Cpath%20d=%22M9.424%207.268l4.999%20-4.999%22%20/%3E%3Cpath%20d=%22M16.633%2016.644l-2.402%202.415a3.189%203.189%200%200%201%20-4.524%200l-3.77%20-3.787a3.223%203.223%200%200%201%200%20-4.544l3.77%20-3.787a3.189%203.189%200%200%201%204.524%200l2.302%202.313%22%20/%3E%3C/svg%3E"
      },
    ],
  ],
  // vite: {
  //   plugins: [
  //     groupIconVitePlugin({
  //       customIcon: {
  //         ts: localIconLoader(import.meta.url, "./svg/typescript.svg"), //本地ts图标导入
  //         md: localIconLoader(import.meta.url, "./svg/md.svg"), //markdown图标
  //         css: localIconLoader(import.meta.url, "./svg/css.svg"), //css图标
  //         js: "logos:javascript", //js图标
  //       },
  //     }),
  //   ],
  // },

  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释
  themeConfig: {
    editLink: {
      pattern: "https://github.com/epoch-lab/ecode/:path",
      text: "在 GitHub 上编辑此页面",
    },
    search: {
      provider: "local",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/src" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar([
      {
        manualSortFileNameByPriority: ["README"],
        collapsed: true,
        collapseDepth: 2,
        useFolderLinkFromIndexFile: true,
        // 如果要把 src 目录下的文件放到根目录，可以设置 scanStartPath 为 '/src'
        // 而不是使用 documentRootPath: 'example', 会导致所有文件都放到 example 目录下;
        scanStartPath: "/src",
        // 用法是, 直接写名字;
        excludeFolders: ["Exclude"],
      },
    ]),

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/epoch-lab/ecode",
      },
    ],
  },
});
