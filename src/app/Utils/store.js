import {applyMiddleware, createStore} from 'redux';
import reducer from '../Reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = localStorage.getItem("initialState") ? JSON.parse(localStorage.getItem("initialState")) : { list: [], activeFilter: "All" }
export const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(()=> {
    localStorage.setItem("initialState", JSON.stringify(store.getState()))
})