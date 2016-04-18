import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import { fetchEntries } from '../actions/entries'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  let store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  )
  return store
}
