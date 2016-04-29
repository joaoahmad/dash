import { combineReducers } from 'redux'
import entries from './entries'
import customers from './customers'
import users from './users'

const rootReducer = combineReducers({
  entries,
  customers,
  users
})

export default rootReducer
