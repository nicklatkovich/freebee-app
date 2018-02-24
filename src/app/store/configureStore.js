import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
// eslint-disable-next-line
import {
  composeWithDevTools,
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
// import { createLogger } from 'redux-logger'

export default function configureStore(initState) {
  // const logger = createLogger()
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    () => {},
    initState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ))
  return store
}