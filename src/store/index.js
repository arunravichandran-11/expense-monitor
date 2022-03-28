import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const Middleware = applyMiddleware(thunk);
const Reducers = rootReducer;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;