/* eslint-disable no-undef */
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reactotron from '../config/reactotron'

import sagas from './sagas'
import reducers from './ducks'

const middleware = []

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middleware.push(sagaMiddleware)

const store = createStore(reducers, compose(applyMiddleware(...middleware), Reactotron.createEnhancer()))

sagaMiddleware.run(sagas)

export default store;