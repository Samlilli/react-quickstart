import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import * as reducers from '../reducers'
import thunk from 'redux-thunk'

const engine = createEngine('weather-local-storage')

let createStoreWithMiddleware;
createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(storage.createMiddleware(engine)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

const combinedReducers = storage.reducer(combineReducers(reducers))
const store = createStoreWithMiddleware(combinedReducers)
const load = storage.createLoader(engine)
load(store)

// load(store)
//     .then((newState) => console.log('Loaded state:', newState))
//     .catch(() => console.log('Failed to load previous state'));
export default store
