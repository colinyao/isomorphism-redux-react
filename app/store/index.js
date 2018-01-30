import { combineReducers } from 'redux'
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
