import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'

import App from '../containers/App'
import Detail from '../containers/Detail'
import Home from '../containers/Home'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="detail" component={Detail} />

    </Route>
  </Router>
)
// //react 4.0改用react-router-dom
// import React, {
//     Component
// } from 'react';
// import {
//     Router,
//     Route
// } from 'react-router-dom';
// import Bundle from '../components/Bundle'
// // 利用高阶组件bundle-loader实现按需加载
// import Home from '../containers/Home';
// import Detail from '../containers/Detail'

// 利用高阶组件Bundle实现按需加载
// const loadComponent=(loadHome)=>{
//    return (props)=>(
//      <Bundle load={loadHome}>
//          {(Component) => <Component {...props}/>}
//     </Bundle>
//    )
// }

// export default class Routes extends Component {
//
//     render() {
//
//         return (
//             // Router 下只能包一个子元素
//
//                        <Router>
//                             <Route exact path='/' component={Home}></Route>
//                             <Route path='/detail' component={Detail}></Route>
//                         </Router>
//
//
//         )
//
//     }
// }
