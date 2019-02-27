// reducers index file
import { combineReducers } from 'redux'
import todoReducers from './todoReducers'
//import deleteTodo from './deleteTodo';

export default combineReducers({
  mydata: todoReducers
})
