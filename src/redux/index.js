
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

//para ativar plugin do redux no Chorme
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers(), 
    composeEnhancer(
        applyMiddleware(
            sagaMiddleware
        )
    ),
     
);

sagaMiddleware.run(rootSaga)//Saga set