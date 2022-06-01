import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown, AnyAction> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
export * from './actions'
export * from './types'