# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 使用craco工具为src路径起别名

- 装包@craco/craco，npm i @craco/craco -D
- 在根路径下创建craco.config.js，并配置webpack选项下，alias

### 三、项目打包

#### 1.运行打包命令

- npm run build

#### 2.全局安装serve包

- npm install -g serve

#### 3.静态服务器，运行项目

- serve -s build

### 四、react路由的懒加载

#### lazy函数+react内置的Suspense组件

- 第一步：使用lazy方法，将路由改为动态导入的方式；const Publish=>lazy(()=>import("@/pages/publish/Publish"));
- 第二步：使用react的内置Suspense组件包裹路由对应的组件；element:<Suspense><Publish/></Suspense>

### 五、CDN服务

#### 5.1 概念

- CDN：CDN（Content Delivery Network）是一种内容分发网络服务；当用户向网站请求内容时，会由离用户最近的服务器将缓存的内容传递给用户

#### 5.2 哪些资源可以放到CDN服务？

- 体积较大的，需要利用浏览器对CDN的缓存特性，加快加载时间
- 非业务js代码，不需要经常改动，CDN不需要频繁更新缓存

#### 5.3 具体实施

##### 将react、react-dom等体积大的非业务js代码，使用CDN服务

- 把需要做CDN缓存的react和react-dom排除在打包之外
- 以CDN的方式重新引入资源（react、react-dom）

##### 5.3.1 在craco.config.js中配置webpack和CDN,将react和react-dom包排除在打包之外

