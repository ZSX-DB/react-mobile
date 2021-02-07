# React Mobile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 本项目做了什么

* 配置rem，可以自动适配不同ppi的屏幕
* 引入移动端框架，hook库等，方便开发
* 封装axios，根据请求自动显隐loading，鉴权等需自定义配置
* 配置完毕sass，并提供了一些使用频率较高的类
* 配置完成路由，提供了重定向和404示例
* 通过mobx配置完成store，并提供了使用示例
* 合理的项目结构
* 配置.gitignore

***

## 引入的库

* **zarm**

  react的移动端框架较少，zarm是其中一个，其官网上的示例均为hook api，hook api也是一种比较优雅的复用方式。

  链接：https://zarm.gitee.io/#/

* **mobx & mobx-react**

  mobx是一个优秀的状态管理库，通过依赖注入的方式可实现全局状态。

  mobx-react是当前最适合react的状态管理工具，7.1.0版本提供了hook api，其中 `useLocalStore` 和 `useObserver` 可提供类似vue3的编程体验。

  链接：https://cn.mobx.js.org/ & https://github.com/mobxjs/mobx-react

* **ahooks**

  ahooks提供了一系列的自定义hooks，本人也提供了两个自定义hook `useDebounce` 和 `useThrottle`，与ahooks不同的是，`useDebounce` 是立即执行后续不执行， `useThrottle` 是delay后才执行方法，根据业务需求选择使用。

  链接：https://ahooks.js.org/zh-CN

* **react-router-dom**

  路由模块

  链接：https://serializedowen.com/docs/react-router-dom/
  
***

**项目介绍：https://juejin.cn/post/6925093292325634061/**

  