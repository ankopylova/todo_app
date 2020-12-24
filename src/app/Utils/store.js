import {applyMiddleware, createStore} from 'redux';
import reducer from '../Reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = localStorage.getItem("initialState") ?
    JSON.parse(localStorage.getItem("initialState")) : {
        list: [],
        activeFilter: "All"
    }
export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    localStorage.setItem("initialState", JSON.stringify(store.getState()))
})