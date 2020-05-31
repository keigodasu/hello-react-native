import {createStore} from 'redux';
import counterReducer, {createInitialState} from './reducers/counter';

const store = createStore(counterReducer, createInitialState());

export default store;
