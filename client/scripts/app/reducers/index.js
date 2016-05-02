import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import entries from './entries'
import customers from './customers'
import users from './users'

const rootReducer = combineReducers({
  entries: entries,
  customers: customers,
  users: users,

  form: formReducer
})

export default rootReducer
