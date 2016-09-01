// Set up your root reducer here...
 import { combineReducers } from 'redux'
 import { routerReducer } from 'react-router-redux'
 // export default combineReducers
 import builder from './builderReducer'

const rootReducer = combineReducers({
  builder
})

export default rootReducer