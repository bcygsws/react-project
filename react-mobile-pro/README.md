# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked`
  or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
    // Set the react version
    settings: {react: {version: '18.3'}},
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
})
```

## react-mobile-pro项目

### 一、项目介绍

- 模拟一个下拉刷新移动端app

### 二、技术栈

- React 18+antd-mobile+sass

### 三、无限滚动，InfiniteScroll滚动组件

- loadMore方法控制hasMore状态量

### 四、API文档

#### 4.1 公共接口地址

- http://geek.ithema.net/v1_0/

#### 4.2 请求频道列表

- 请求地址：http://geek.itheima.net/v1_0/channels
- 请求方式：GET
- 无参数

#### 4.3  根据id请求当前频道对应的文章列表

- 请求地址：http://geek.itheima.net/v1_0/articles
- 请求方式：GET
- params查询参数
    - channel_id：string类型，频道id字符串
    - timestamp：string类型，时间戳，首次请求传当前时间戳字符

### 4.4 根据文章id,请求文章详情

- 请求地址：http://geek.itheima.net/v1_0/articles/:id
- 请求方式：GET
- 路径参数:id,/details和/details?id=33132312仍然匹配的是同一个组件
#### 4.5 下拉刷新，再次请求文章列表






