import * as types from '../actions/actionTypes'
import initialState from './initialState'
import _ from 'lodash'

export default function builderReducer(state = initialState.builder, action){
  switch(action.type){
    case types.ADD_TEXT_ITEM:
      return state
    default:
      return state
  }
}