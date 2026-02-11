# agarwood-vue3-app-template Vue3 全家桶通用模板项目

- 程序员优雅哥 youyacoder agarwood 沉香系列。
- 整合了 TypeScript、Vue Router、Pinia、UnoCSS、SCSS、ESLint、Prettier、unplugin-vue-router、vite-plugin-vue-layouts、unplugin-auto-import、unplugin-vue-components、vueuse、vue-i18n。
- 支持多环境配置：dev、uat、prod。
- 最简代码模版，开箱即用，支持自动路由、全局布局、自动导入、组件自动注册。

## 分支说明
- main: 最简模板代码
- axios：集成 Axios，封装了网络请求

## 基于此模板创建新项目
可以通用 -b 指定要拉取的分支

1）拉取最简模板（main 分支）
```shell
git clone git@github.com:HeroCloudy/agarwood-vue3-app-template.git --depth 1 -b main your-project-name
```

2）拉取集成axios模板（axios 分支）
```shell
git clone git@github.com:HeroCloudy/agarwood-vue3-app-template.git --depth 1 -b axios your-project-name
```

3）拉取集成 Element Plus 的模板（element-plus 分支）
git clone git@github.com:HeroCloudy/wumeng-vue3-app-template.git --depth 1 -b element-plus your-project-name

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
