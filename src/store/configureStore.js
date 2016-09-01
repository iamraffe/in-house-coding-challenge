// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
    // Add other middleware on this line...
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  )

  return store
}
