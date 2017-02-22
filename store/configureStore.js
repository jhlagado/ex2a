import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { firebaseConfig } from '../config'
import { reactReduxFirebase } from 'react-redux-firebase'

console.log("rootReducer", rootReducer);

export default function configureStore (initialState) {
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebaseConfig,
      {
        userProfile: 'users',
        enableLogging: false
      }
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../store/reducers', () => {
      const nextRootReducer = require('../store/reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
