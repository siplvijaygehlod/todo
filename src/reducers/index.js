// reducers index file
import { combineReducers } from 'redux'
import todoReducers from './todoReducers'

export default combineReducers({
  mydata: todoReducers
})
