import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from "../reducers/root"
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const configureStore = (preloadedState={}) =>{
    const railsEnv = $('#root').data('env')
    if(railsEnv === "development"){
        return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
    } else {
        return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
    }
    
}