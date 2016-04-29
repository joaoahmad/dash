import { combineReducers } from 'redux'
import entries from './entries'
import customers from './customers'

const rootReducer = combineReducers({
  entries,
  customers
})

export default rootReducer
