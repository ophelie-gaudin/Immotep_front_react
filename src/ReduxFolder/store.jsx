import { createStore, combineReducers } from 'redux';
import isConnectedReducer from './stateUser/userReducer';

const rootReducer = combineReducers({
  connected: isConnectedReducer,
})

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;