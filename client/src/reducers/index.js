import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import users from './users'
import uiPage from './ui-page'

const rootReducer = combineReducers({
  users: users,
  uiPage: uiPage,

  form: formReducer
})

export default rootReducer
