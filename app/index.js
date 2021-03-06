/**
 * 浏览器端 React的根节点挂载
 * 通过打包生成到Views目录中index.ejs页面
 */
 if (module.hot) {
   module.hot.accept();
 }
import 'core-js/fn/object/assign'
import 'isomorphic-fetch'
import React from 'react'
import {render} from 'react-dom'
import routes from './routes'
import { Provider } from 'react-redux'

// 和服务端共用的redux状态管理
import configureStore from './store'

// 页面加载时，从全局对象中获取服务端注入到页面的State数据
const store = configureStore(window.__REDUX_STATE__)

// 浏览器端使用 ReactDOM.render 初始化页面，首屏渲染
render(<Provider store={store}>{routes}</Provider>, document.querySelector('#app'))
