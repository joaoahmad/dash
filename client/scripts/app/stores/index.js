import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import { fetchEntries } from '../actions/entries'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {

    let store = createStore( rootReducer, initialState, compose(
            applyMiddleware(thunkMiddleware),
            global.devToolsExtension ? global.devToolsExtension() : f => f
        )
    );

    if (module.onReload) {
        module.onReload(() => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer.default || nextReducer);
            return true
        });
    }

    return store
}
