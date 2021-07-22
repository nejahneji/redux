import {createStore } from 'redux'
import reducerCounter from './reducer/ReducerCounter'

const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store= createStore(reducerCounter, devtool)


export default store